'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
export default function (){ 
    const [accountnumber,Setaccountnumber] = useState('');
    const [amount,Setamount] = useState('');
    const route = useRouter();
    async function AddMoneytowallet (accountnumber:string,amount:string){
        try{
            const transaction = await axios.post('http://localhost:5001/addmoneytobank',{
               accountnumber:accountnumber,
               amount:amount
            })
            if (transaction){
                alert("Money is added successfully in bank");
                route.push('/homepage');
                
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mt-4 w-[40%] bg-amber-50 p-4 text-center">
         Add money to Bank from Wallet
        </div>
  
        <div className="flex flex-col gap-4 mt-6 w-[40%]">
  
          <input className="p-2 border" placeholder="Enter Account Number" onChange={(e) => Setaccountnumber(e.target.value)} />
  
          <input className="p-2 border" placeholder="Enter Amount" onChange={(e) => Setamount(e.target.value)} />
  

  
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={()=>AddMoneytowallet(accountnumber,amount)}>
            
           Add Money to Bank
          </button>
        </div>
      </div>
    )
}