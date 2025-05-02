'use client'
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react";
import ClientProject from "../actions/Client_Projects";
import { useStore } from '../zustand/Store/useStore'
import AcceptProject from '../actions/Accept_Project'
import RejectProject from '../actions/Reject_Project'
export default function () {
  const { data: session } = useSession();
  const [freelancerdetail, Setfreelancerdetail] = useState([{}]);
  const [acceptbuttonstate, Setacceptbuttonstate] = useState<boolean>(false);
  const [activeindex, Setactiveindex] = useState<number>(-1);
  const { setprojectidtodelete } = useStore();
  const clientid = session?.user?.id;

  async function allprojectsofclient() {
    if (!clientid) {
      Setfreelancerdetail([]);
      return;
    }
    const projects = await ClientProject(clientid);
    Setfreelancerdetail(projects || [{}]);
  }
  async function rejectrequest(index: number) {
    Setfreelancerdetail(prev => prev.filter((_, i) => i !== index));
    await RejectProject(freelancerdetail[index]?.userid, freelancerdetail[index]?.jobtitle);
    Setacceptbuttonstate(false);
    Setactiveindex(index);
  }
  async function acceptproject(index: number) {
    const result = await AcceptProject(clientid, freelancerdetail[index]?.userid, freelancerdetail[index]?.jobtitle, freelancerdetail[index]?.budget, freelancerdetail[index]?.timeline);
    Setfreelancerdetail(prev => prev.filter((_, i) => i !== index));
    setprojectidtodelete(result?.id || -1);
    await RejectProject(freelancerdetail[index]?.userid, freelancerdetail[index]?.jobtitle);
    Setacceptbuttonstate(true);
    Setactiveindex(index);

  }
  useEffect(() => {
    allprojectsofclient();
    console.log("Projects are", freelancerdetail);
    console.log(clientid);

    console.log("Client id", clientid);
    console.log()

  }, [])
  return (
    <div className="flex flex-col gap-[1rem]">
      {freelancerdetail.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-800">{item?.user?.Name}</h2>
          <p className="text-gray-600 mb-2">{item?.user?.Email || "N/A"}</p>

          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold mb-1">Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {item.user?.Skills.map((skill: any, idx: any) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-gray-700 font-semibold mb-1">
              Project Title :- {item?.jobtitle || "N/A"}
            </h3>
          </div>

          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold mb-1">Projects:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {item.profile?.ProjectLink.map((link: any, idx: any) => (
                <li key={idx}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            <strong>About:</strong> {item.profile?.About}
          </p>
          <div className="flex flex-row gap-[2rem]">


            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 mt-[2rem]"
              onClick={() => acceptproject(index)}
            >
              Accept
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200 mt-[2rem]"
              onClick={() => rejectrequest(index)}
            >
              Reject
            </button>


          </div>
        </div>
      ))}
    </div>
  );
}
