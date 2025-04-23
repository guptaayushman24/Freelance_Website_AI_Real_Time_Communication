'use client'
import { useState } from "react"
import Signup from "../actions/Signup"
import { useStore } from "../zustand/Store/useStore";
import { useRouter } from "next/navigation";
export default function(){
    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState<string>('');
    const [expeience,setExperience] = useState<number>(0)
    const [rating,setRating] = useState<number>(0);
    const [skills,setSkills] = useState<Array<string>>([]);
    const [loading,setLoading] = useState<Boolean>(false);
    // Using state variable from the zustand
    const {setuserid} = useStore();
    const router = useRouter();
    async function insertdataintodb(){
       setLoading(true);
       try{
        const createnewuser = await Signup(name,email,password,expeience,rating,skills);
        if (createnewuser==-1){
            alert("Try after some time some error occured");
            return;
        }
        if (createnewuser==1){
            alert("User exist please do the signin");
            setLoading(false);
            return;
        }
        // Here we can store the user_id globally can use that user_id in the profile creation of the user
        if (createnewuser){
            setuserid(createnewuser);
        }
        alert("User Registered Successfully");
        setLoading(false);
       }
       catch(err){
         console.log(err);
         return err;
       }
       router.push('/userprofile');
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Signup Page for Job Seeker</h1>
    
    <div className="bg-white w-[22rem] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
            <input  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Experience" type="number" onChange={(e)=>setExperience(parseInt(e.target.value))}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Rating" type="number" onChange={(e)=>setRating(parseInt(e.target.value))}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Skills"onChange={(e)=>setSkills(e.target.value.split(" "))} />
            
            <button onClick={insertdataintodb} className="bg-red-500 text-white px-4 py-3 rounded font-semibold hover:bg-red-600 transition duration-300">
                {
                    loading?'Registering the user....' : 'Register'
                }
            </button>
        </div>
    </div>
</div>

    )
}