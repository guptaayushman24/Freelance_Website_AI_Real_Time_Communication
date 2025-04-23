'use client'
import {useState} from 'react'
import ClientRegister from '../actions/ClientRegister';
export default function(){
    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState<string>('');
    const [organization,setOrganization] = useState<string>('');
    const [loading,setLoading] = useState<Boolean>(false);
    async function insertdataintodb(){
        setLoading(true);
        try{
         const createnewuser = await ClientRegister(name,email,password,organization)
         if (createnewuser==1){
             alert("User exist please do the signin");
             setLoading(false);
             return;
         }
         alert("User Registered Successfully");
         setLoading(false);
        }
        catch(err){
          console.log(err);
          return err;
        }
     }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Signup Page for Client</h1>
    
    <div className="bg-white w-[22rem] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
            <input  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>            
            <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Organization" onChange={(e)=>setOrganization(e.target.value)}/>            
            <button onClick={insertdataintodb} className="bg-red-500 text-white px-4 py-3 rounded font-semibold hover:bg-red-600 transition duration-300">
                {
                    loading?'Registering the client....' : 'Register'
                }
            </button>
        </div>
    </div>
</div>
    )
}