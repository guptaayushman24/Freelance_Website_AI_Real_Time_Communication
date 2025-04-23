'use client'
import { signIn } from "next-auth/react"
export default function Clinet_Signin(){
    return(
        <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
            signIn('Credentials',{
                callbackUrl:'/homepage'
            })
        }}>Client Signin</button>
    )
}