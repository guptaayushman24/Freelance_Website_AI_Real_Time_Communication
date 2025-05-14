'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../zustand/Store/useStore"

export default function () {
  const route = useRouter();
  const { userid } = useStore();

  async function captureImage() {
    try{
      const video = document.getElementById('video') as HTMLVideoElement;
      navigator.mediaDevices.getUserMedia({
        video:{
          width:{ideal:1280},
          height:{ideal:720},
          facingMode:"user"
        },
        audio:false
      })
      .then((stream)=>{
        video.srcObject = stream
      })
    }
    catch(err){
      console.error("Error accessing the camera: ", err);
      alert("Could not access the camera. Please allow permissions and try again.");
    }
  }
    async function saveImage() {
      const video = document.getElementById('video') as HTMLVideoElement;
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const contex = canvas.getContext('2d') || null;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      if (contex){
        contex.drawImage(video,0,0,canvas.width,canvas.height);
      }

      console.log("Image is",contex);
      const data = canvas.toDataURL("image/jpeg");

      
     
       fetch('http://localhost:5000/storefaceindb',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        
         body:JSON.stringify({data:data,userid:userid})
      })
      .then(response=>response.json())
      .then(data=>{
        console.log("Success:",data)
        route.push('/');
      })
      .catch(error=>{
        console.error("Error:",error);
        alert("Some error has occured in registering the face")
      })
    }
    useEffect(()=>{
      captureImage()
    })
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
     

        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Register For Face Authentication</h2>

          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            className="rounded-lg border border-gray-300"
          ></video>

          <canvas
            id="canvas"
            width="320"
            height="240"
            className="hidden"
          ></canvas>

          
          <button
            onClick={saveImage}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Save Image
          </button>
        </div>
      </div>
    )
}