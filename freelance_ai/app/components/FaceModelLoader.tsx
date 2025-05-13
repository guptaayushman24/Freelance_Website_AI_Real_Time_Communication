'use  client'
import { useEffect } from "react"
import * as faceapi from 'face-api.js'

export default  function FaceModelLoader(){
    useEffect(()=>{
        const loadModels = async()=>{
            try{
                await Promise.all([
                    // faceapi.nets.ssdMobilenetv1.loadFromUri('/model'),
                    faceapi.nets.faceLandmark68Net.loadFromUri('/model'),
                    faceapi.nets.faceRecognitionNet.loadFromUri('/model'),
                    faceapi.nets.tinyFaceDetector.loadFromUri('/model')
                ]);
                console.log("All face-api models loaded successfully.");    
            }
            catch(err){
                console.error("Error loading face-api models:",err);
            }
        }
         loadModels();
    },[])
    return null;
}