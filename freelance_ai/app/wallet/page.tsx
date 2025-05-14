'use client'
import { useState } from "react"
import { walletvalidation } from "../zod/validation";
import CreateWallet from "../actions/Wallet";
import checkclientisinuser from '../actions/Client_in_User';
import { useRouter } from "next/navigation";
import { useStore } from '../zustand/Store/useStore';
export default function () {
  const route = useRouter();
  const [accountnumber, Setaccountnumber] = useState('');
  const [uniqueid, Setuniqueid] = useState('');
  const [loading, Setloading] = useState<Boolean>(true);
  const [loadingwallet,Setloadingwallet] = useState<Boolean>(true)
  const { name } = useStore();
  const { email } = useStore();
  const { role } = useStore();
  const { clientid } = useStore();
  async function createWallet(accountnumber: string, amount: string) {
    const { success } = walletvalidation.safeParse({
      name: name,
      email: email,
      role: role,
      amount: amount,
      accountnumber: accountnumber,
      uniqueid: uniqueid
    })
    if (uniqueid == '') {
      alert("Please click on generate unique id");
    }
    if (success == false) {
      alert("Please fill the details correctly");
      return;
    }
    const data = await CreateWallet(name, email, role, amount, accountnumber, uniqueid);
    try{
      Setloadingwallet(true);
      if (data == -1) {
      alert("Something went wrong try after some time");
      return -1;
    }
    else {
      if (!clientid){
        route.push('/registerface')
        Setloadingwallet(false);
        return;
      }
      const check = await checkclientisinuser(clientid);
      if (check==-1){
        route.push('/');
        Setloadingwallet(false);
        return;
      }
      
      
    }
    }
    catch(err){
      console.error(err);
    }
  }
  function generateUniqueid(email: string, accountnumber: string) {
    try {
      Setloading(false);
      let id = '';
      for (let i = 0; i < email.length; i++) {
        if (email.charAt(i) != '@') {
          id = id + email.charAt(i);
        }
        else if (email.charAt(i) == '@') {
          id = id + "!";
          break;
        }
      }
      for (let i = accountnumber.length - 1; i >= accountnumber.length - 4; i--) {
        id = id + accountnumber.charAt(i);
      }
      id = id + role.charAt(0);


      Setuniqueid(id);
        setTimeout(() => {
      Setloading(true);
  }, 500); 
    }
    catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-4 w-[40%] bg-amber-50 p-4 text-center">
        Create wallet for transaction
      </div>

      <div className="flex flex-col gap-4 mt-6 w-[40%]">

        <input className="p-2 border" placeholder="Enter Account Number" onChange={(e) => Setaccountnumber(e.target.value)} />

        {
          loading ? (
            <button className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => generateUniqueid(email, accountnumber)}>
              Generate Unique ID
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"

            >
              Generating Unique ID
            </button>
          )
        }
        {
          loadingwallet ?(
             <button className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => createWallet(accountnumber, "0")}>
          Create Wallet
        </button>
          ):(
              <button className="bg-green-500 text-white px-4 py-2 rounded"
          >
           Creating Wallet
        </button>
          )
        }
      </div>
    </div>

  )
}