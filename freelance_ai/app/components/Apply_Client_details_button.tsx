'use client'
import { getCookie, setCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Apply_Project from '../actions/Apply_Project'
import AcceptProject from "../actions/Accept_Project";
import { Prisma } from "@/db/generated/prisma";
interface Props {
  user: string,
  clientid:number,
  jobtitle:string,
  budget :string,
  timeline : string,
  index:number,
  client_email:string
}

export default  function ApplyClinetDetailButton({ user,clientid,jobtitle,budget,timeline,index,client_email}: Props) {
  const [loading,Setloading] = useState(false);
  const {data:session} = useSession();
  async function applyforproject(){
    try{
      Setloading(true);
      const userid =  session?.user.id;
     console.log("The client id is",clientid);
     console.log("The user id is",userid);
      const jobapply = await Apply_Project (clientid,userid,jobtitle,budget,timeline,index,false);
      // const jobapply = await AcceptProject(clientid,userid,jobtitle,budget,timeline,false);
      if (jobapply==1){
        Setloading(false);
      } 
      else if (jobapply==-1){
        alert("Server goes does try after some time");
        return;
      }
    }
    catch(err){
      console.log("Something is wrong for applying the project");
    }
  }
  return (
    <div>
      {
        user === 'Job Seeker' ? (
          <div className="flex flex-row gap-[0.5rem]">
            {
              loading?(
                <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">Project is submitting to client</button>
              ):(
                <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded" onClick={()=>applyforproject()}>Apply</button>
              )
            }
            <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">See Client Details</button>
          </div>
        ) : user === 'Client' ? (
          <div className="flex flex-row gap-[0.5rem]">
            <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">See Client Details</button>

          </div>
        ) : null
      }
    </div>
  );
}