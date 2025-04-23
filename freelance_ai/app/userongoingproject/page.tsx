'use client'
import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react"
import { useStore } from "../zustand/Store/useStore";
import Userongoingproject from '../actions/User_Ongoing_Projet';
import ChatBox from "../components/Chat";
import { io } from "socket.io-client"; 
export  default function(){
    const {data:session} = useSession();
    const [userongoingproject,Setuserongoingproject] = useState([{}]);
    const [userindex,setuserindex] = useState(-1);
    const [client_email,Setclient_email] = useState('');
    const [acceptbuttonstate, Setacceptbuttonstate] = useState<boolean>(false);
    const user_id = session?.user.id;
    const user_email = session?.user?.email;
    const {setclientemail} = useStore();
    const {setwhichuser} = useStore();
    const socket = useMemo(()=>io('http://localhost:8001'),[]);
    async function allprojectsofclient(){
        const data = await Userongoingproject(user_id);
        Setuserongoingproject(data || [{}]);
        console.log(typeof(data));

    }
    function startcommunication(index:number,clientemail:string){
        setuserindex(index);
        Setacceptbuttonstate(true);
        setclientemail(clientemail);
        setwhichuser(session?.user.whichuser)
    }
    useEffect(()=>{
        allprojectsofclient();
        if (user_email){
          socket.emit("register-user",user_email);
        }
    },[user_email])
    return(
<div>
  {userongoingproject.map((item, index) => (
    <div key={index} className="mb-6 p-6 border border-gray-300 rounded-2xl shadow-md bg-white">
      <h2 className="font-bold text-xl text-gray-800 mb-2">Project Title: {item.project_title || 'N/A'}</h2>
      <p className="text-gray-700 mb-1">💰 <span className="font-medium">Budget:</span> {item.budget || 0}</p>
      <p className="text-gray-700 mb-1">⏳ <span className="font-medium">Timeline:</span> {item.timeline || 'N/A'}</p>
      <p className="text-gray-700 mb-1">👤 <span className="font-medium">Client Name:</span> {item.client?.client_name || 'N/A'}</p>
      <p className="text-gray-700 mb-1">👤 <span className="font-medium">Client Email:</span> {item.client?.Email || 'N/A'}</p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200" onClick={()=>startcommunication(index,item.client?.Email)}>
        Start Communication
      </button>

      {
        acceptbuttonstate && index==userindex ?(
          <ChatBox></ChatBox>
        ):null
      }
      
    </div>
  ))}
</div>
    );
}