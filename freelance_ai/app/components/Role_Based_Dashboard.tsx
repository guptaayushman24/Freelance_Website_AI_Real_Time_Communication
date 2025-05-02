'use client'
import { useSession } from "next-auth/react"
import {useRouter} from 'next/navigation'
import ClientProject from "../actions/Client_Projects";
import { useEffect } from "react";
import { useState } from "react";
import CheckUserUniqueId from "../actions/CheckUserUniqueId";
export default function RoleBasedDashboard(){
    const {data:session} = useSession();
    const route = useRouter();
    async function checkUniqueid(email:string){
        const data = await CheckUserUniqueId (email);
        if (data!=null){
            alert(`Freelancer unique id is ${data.uniqueid}`);
            return;
        }
        alert("Something goes wrong !!!!");
        return;
    }
    return(
        <div className="flex flex-col">
        <div className="flex flex-col h-[10rem] bg-red-500">
            <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                {
                    session?.user.whichuser === 'Client'  ? (
                        <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem] mr-[1rem]">
                             <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/pendingrequest')}>Pending Request</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/ongoingproject')}>Client Ongoing Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded">Client Completed Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
                                route.push('/postjob')
                            }}>Post Job</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/addmoneytowallet')}>Add Money To Wallet</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/addmoneytobank')}>Add Money To Bank</button>

                            <div className="bg-white text-red-500 px-4 py-2 rounded">Client Name:- {session.user.name}</div>
                        </div>
                    ) : session?.user.whichuser === 'Job Seeker' ? (
                        <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                            <button className="bg-white text-red-500 px-4 py-2 rounded">User Completed Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/userongoingproject')}>User Ongoing Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/addmoneytowallet')}>Add Money To Wallet</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/addmoneytobank')}>Add Money To Bank</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>checkUniqueid(session.user?.email)}>Check Unniqueid</button>
                            <div className="bg-white text-red-500 px-4 py-2 rounded">User Name:- {session.user.name}</div>
                        </div>
                    ) : null
                }
            </div>
           
        </div>
    </div>
    )
}