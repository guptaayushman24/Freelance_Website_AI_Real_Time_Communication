'use client'
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "../zustand/Store/useStore";
import { io } from 'socket.io-client'

export default function ChatBox() {

  const [showchat, Setshowchat] = useState(true);
  const [sendmessage, Setsendmessage] = useState('');
  const [recievemessage, Setrecievemessage] = useState([{}]);
  const [email, Setemail] = useState('');
  const { clientemail } = useStore();
  const { useremail } = useStore();
  const { whichuser } = useStore();
  const { data: session } = useSession();
  const socket = useMemo(() => io('http://localhost:8001'), []);
  function hidechatbox() {
    Setshowchat(false);
  }

  function sendmessagetoprople() {
    if (whichuser === 'Client') {
      console.log("User Email", useremail);
      socket.emit("startconversation", {
        message: sendmessage,
        email: useremail, // receiver's email
        sender: "client"
      });
    }
    if (whichuser === 'Job Seeker') {
      console.log("Client Email", clientemail);
      socket.emit("startconversation", {
        message: sendmessage,
        email: clientemail, // receiver's email
        sender: "job seeker"
      });
    }

    console.log("Client Email:", clientemail);
    console.log("User Email:", useremail);
    console.log("Which user is:", whichuser);


  }


  useEffect(() => {
    socket.on("startconversation", (data) => {
      Setrecievemessage((prev) => [...prev, {
        msg: data.message,
        type: "received",
        sender: data.sender
      }]);
    });
    return ()=>{
      socket.off("startconversation")
    }
  }, []);

  return (
    showchat ? (
      <div className="flex flex-col h-screen">

        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">

          {
            recievemessage.map((item, index) => (
              <div
                key={index}
                className={`p-2 m-1 rounded shadow w-fit ${item.sender === 'client' ? 'bg-green-200 ml-auto' : 'bg-white mr-auto'
                  }`}
              >
                {item.msg}
              </div>
            ))
          }
        </div>

        {/* Input area - fixed at bottom */}
        <div className="bg-lime-400 p-4">
          <div className="max-w-2xl mx-auto">
            <input
              onChange={(e) => Setsendmessage(e.target.value)}
              type="text"
              placeholder="Type message..."
              className="w-full px-3 py-2 rounded mb-2 outline-none"
            />
            <div className="flex flex-col gap-[2rem]">
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                onClick={() => sendmessagetoprople()}>

                Send Message
              </button>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition" onClick={hidechatbox}>
                Close Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}