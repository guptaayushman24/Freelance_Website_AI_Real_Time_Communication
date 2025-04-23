'use client'
import { useRouter } from "next/navigation"
export default function Client_Register(){
    const router = useRouter();
    return(
        <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
            router.push('/clientregister');
        }}>Client Register</button>
    )
}