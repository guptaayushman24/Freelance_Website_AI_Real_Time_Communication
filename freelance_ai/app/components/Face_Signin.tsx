'use client'
import { useRouter } from "next/navigation";
export default function FaceSignin(){
    const router = useRouter();
    return(
      <div>
          <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
             router.push('/faceauthentication');
        }}>Signin With Face</button>
      </div>
    )
}