'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import CheckUserUniqueId from "../actions/CheckUserUniqueId";
import { P2Pvalidation } from '../zod/validation'
import PaymentToFreelancer from "../actions/PaymenttoFreelancer";
import { useRouter } from "next/navigation";
export default function () {
    const [clientuniqueid, Setclientuniqueid] = useState('');
    const [freelanceruniqueid, Setfreelanceruniqueid] = useState('');
    const [amount, Setamount] = useState('');
    const { data: session } = useSession();
    const email = session?.user?.email
    const route = useRouter();
    async function paymentToFreelancer(clientuniqueid: string, freelaneruniqueid: string, amount: string) {
        try {
            const { success } = P2Pvalidation.safeParse({
                clientuniqueid: clientuniqueid,
                freelanceruniqueid: freelaneruniqueid,
                amount: amount
            })

            if (!success) {
                alert("Please enter all the fields");
                return;
            }
            if (clientuniqueid==freelanceruniqueid){
                alert("Both the unique id's are same");
                return;
            }
            const data = await PaymentToFreelancer(clientuniqueid, freelaneruniqueid, amount);
            if (data == 1) {
                alert("Transaction is done from the client to freelancer");
                route.push('/homepage');
                return;
            }
        }
        catch (err: any) {
            console.error("Transaction failed:", err);
            alert(err.message || "An error occurred during the transaction")
        }
    }





    async function showClientuniqueid(email: string) {
        const data = await CheckUserUniqueId(email);
        if (data == null) {
            alert("Something goes wrong !!!!");
            return;
        }
        alert(`Unique id of the clinet ${data.uniqueid}`);
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Make Payment</h1>

            <div className="bg-white w-[22rem] p-6 rounded-lg shadow-lg">
                <div className="flex flex-col gap-4">
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter your unique id"
                        onChange={(e) => Setclientuniqueid(e.target.value)} />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter freelaner unique id"
                        onChange={(e) => Setfreelanceruniqueid(e.target.value)} />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter Amount"
                        onChange={(e) => Setamount(e.target.value)} />
                    <button className="bg-red-500 text-white px-4 py-3 rounded font-semibold hover:bg-red-600 transition duration-300"
                        onClick={() => showClientuniqueid(session?.user?.email || '')}> Show My Unique Id
                    </button>
                    <button className="bg-red-500 text-white px-4 py-3 rounded font-semibold hover:bg-red-600 transition duration-300"
                        onClick={() => paymentToFreelancer(clientuniqueid, freelanceruniqueid, amount)}> Pay
                    </button>
                </div>
            </div>
        </div>
    )
}