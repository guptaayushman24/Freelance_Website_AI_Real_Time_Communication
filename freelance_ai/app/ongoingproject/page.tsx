'use client'
import { useSession } from "next-auth/react"
import { useState, useEffect, useMemo, useRef} from "react";
import { useStore} from '../zustand/Store/useStore'
import { useRouter } from "next/navigation";
import {io} from 'socket.io-client'
import Ongoingproject from "../actions/Ongoing_Project";
import ChatBox from '../components/Chat'
export default function () {
  const { data: session } = useSession();
  const [ongoingproject, Setongoingproject] = useState([{}]);
  const [acceptbuttonstate, Setacceptbuttonstate] = useState<boolean>(false);
  const [activeindex, Setactiveindex] = useState<number>(-1);
  // const [useremail,Setuseremail] = useState('');
  const {setuseremail} = useStore();
  const {setwhichuser} = useStore();
  const [sendmessage,Setsendmessage] = useState('');
  const [recievemessage,Setrecievemessage] = useState('');
  const clientid = session?.user?.id;
  const clientemail = session?.user?.email;
  const route = useRouter();
  const socket = useMemo(()=>io('http://localhost:8001'),[]);

  // Creating Map

  async function allprojectsofclient() {
    if (!clientid) {
      Setongoingproject([]);
      return;
    }
    const projects = await Ongoingproject(clientid);
    console.log("The project is", projects);
    Setongoingproject(projects || [{}]);

  }

  async function startcommunication(index: number,useremail:string) {
    Setacceptbuttonstate(true);
    Setactiveindex(index);
    console.log("User email in the ongoing is",useremail);
    setuseremail(useremail);
    setwhichuser(session?.user.whichuser);
  }
  useEffect(() => {
    allprojectsofclient();
    if (clientemail){
      socket.emit("register-user",clientemail);
    }
  }, [])
  return (
    <div className="flex flex-col gap-[1rem]">
      {ongoingproject.map((item, index) => (

        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-800">{item?.user?.Name}</h2>
          <p className="text-gray-600 mb-2">{item?.user?.Email || "N/A"}</p>

          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold mb-1">Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {item.user?.Skills.map((skill: any, idx: any) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-gray-700 font-semibold mb-1">Project Title :-  {item?.project_title || 'N/A'}</h3>
            <h3 className="text-gray-700 font-semibold mb-1">Timeline:-  {item?.timeline || 'N/A'}</h3>
          </div>

          <div className="flex flex-col gap-[2rem]">


            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 mt-[2rem]"
              onClick={() => startcommunication(index,item?.user?.Email)}
            >
              Start Communication
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 mt-[2rem]"
              onClick={()=>route.push('/makepayment')}
            >
              Make Payment To Freelancer
            </button>

            {
              acceptbuttonstate && activeindex == index && (
                <ChatBox></ChatBox>
              )
            }
          </div>

        </div>


      ))}

    </div>

  );
}