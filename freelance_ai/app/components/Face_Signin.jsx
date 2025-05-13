'use client'
import { useRouter,useState } from "next/navigation";
export default function FaceSignin(){
    const router = useRouter();
    // async function fetchallimages(){
    //   alert("Hello")
    //   const data = axios.get('http://localhost:4001/getallimagestring')
    //   console.log("Data is",data.imagestring)
    //   if (data){
    //     Setimagestring(data.imagestring);
    //   }

    //   if (imagestring.length>0){
    //     for (let i=0;i<imagestring.length;i++){

    //     }
    //   }
    //   else{
    //     alert("Image string array is empty")
    //   }
      
    // }
    return(
      <div>
          <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
             router.push('/faceauthentication');
            // fetchallimages()
        }}>Signin With Face</button>
      </div>
    )
}