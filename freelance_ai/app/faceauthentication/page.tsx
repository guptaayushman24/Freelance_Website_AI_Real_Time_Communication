'use client'
import * as faceapi from 'face-api.js'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {useRouter} from 'next/navigation'
import { signIn } from "next-auth/react"
import deleteimagesfromfolder from '../actions/Delete_Images_Folder';
export default function () {
  const [loading,Setloading] = useState<Boolean>(false);
  const route = useRouter();
  async function captureImage() {
    try {
      const video = document.getElementById('video') as HTMLVideoElement;
      navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        },
        audio: false
      })
        .then((stream) => {
          video.srcObject = stream
        })
    }
    catch (err) {
      console.error("Error accessing the camera: ", err);
      alert("Could not access the camera. Please allow permissions and try again.")
    }
  }

  async function authenticateUser() {
    Setloading(true);
    const video = document.getElementById('video') as HTMLVideoElement;
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const contex = canvas.getContext('2d') || null;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (contex) {
      contex.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    const data = canvas.toDataURL('image/jpeg');
    const response = await fetch('http://localhost:5000/storeimageinfolder', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data: data })
    })

      
       await fetch('http://localhost:5000/senduserid');
      const result = await response.json();

      if (result.user_id === -1 || result.user_id === null) {
        await deleteimagesfromfolder('D:/Freelance_Project/Face_Detection/DecodedImages');
        await deleteimagesfromfolder('D:/Freelance_Project/Face_Detection/Imageforauthentication')
        alert("User not found in the database")
        route.push('/')
        return null; // Stop further actions
      }
      else{
         // continue with signIn
         await deleteimagesfromfolder('D:/Freelance_Project/Face_Detection/DecodedImages');
         await deleteimagesfromfolder('D:/Freelance_Project/Face_Detection/Imageforauthentication')
      signIn('credentials', {
        userIdFromFaceAuth:result.user_id,
        callbackUrl: '/homepage'
      });
      }
  }



  useEffect(() => {
    captureImage()
  })
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">


      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Face Authentication</h2>

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



        {
          loading?(
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
             Authenticating User
            </button>
          ):(
             <button
          onClick={authenticateUser}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Authenticate User
        </button>
          
          )
        }
        
      </div>
    </div>

  )
}