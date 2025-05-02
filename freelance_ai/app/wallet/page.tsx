'use client'
import { useState } from "react"
import { walletvalidation } from "../zod/validation";
import CreateWallet from "../actions/Wallet";
import { useRouter } from "next/navigation";
import { useStore } from '../zustand/Store/useStore';
import axios from 'axios'
export default function () {
  const route = useRouter();
  const [accountnumber, Setaccountnumber] = useState('');
  // const [amount, Setamount] = useState('');
  const [uniqueid, Setuniqueid] = useState('');
  const { name } = useStore();
  const { email } = useStore();
  const { role } = useStore();
  async function createWallet(accountnumber: string, amount: string) {
    console.log("Name", name);
    console.log("Email", email);
    console.log("Role", role);
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
    if (data == -1) {
      alert("Something went wrong try after some time");
      return -1;
    }
    else{
      route.push('/api/auth/signin');
    }
  }
  function generateUniqueid(email: string, accountnumber: string) {
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
    console.log(uniqueid);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-4 w-[40%] bg-amber-50 p-4 text-center">
        Create wallet for transaction
      </div>

      <div className="flex flex-col gap-4 mt-6 w-[40%]">

        <input className="p-2 border" placeholder="Enter Account Number" onChange={(e) => Setaccountnumber(e.target.value)} />

        {/* <input className="p-2 border" placeholder="Enter Amount" onChange={(e) => Setamount(e.target.value)} /> */}

        <button className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => generateUniqueid(email, accountnumber)}>
          Generate Unique ID
        </button>

        <button className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => createWallet(accountnumber, "0")}>
          Create Wallet
        </button>
      </div>
    </div>

  )
}