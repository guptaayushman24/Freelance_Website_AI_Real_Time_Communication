'use client'
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
export default function JobSeekerRegister() {
    const router = useRouter();
    return (
        <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
          router.push('/signup');
        }}>Job Seeker Register</button>
    )

}