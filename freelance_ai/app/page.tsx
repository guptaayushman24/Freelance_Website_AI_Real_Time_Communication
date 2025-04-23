import Image from "next/image";
import SigninComponent from "./components/Job_Seeker_Register";
import Client_Register from "./components/Client_Register";
import Clinet_Signin from "./components/Client_Signin";
import JobSeekerRegister from "./components/Job_Seeker_Register";
import JobSeekerLogin from "./components/Job_Seeker_Login";
export default function Home() {
    return (
        <div className="flex-col">
            <div className="flex flex-row w-screen h-[150px] bg-red-500 justify-between items-center px-4">
                <div className="text-white text-lg font-bold">Find your first IT freelance Work</div>
                <div className="flex gap-4">
                    <Client_Register></Client_Register>
                    <Clinet_Signin></Clinet_Signin>
                    <JobSeekerRegister></JobSeekerRegister>
                    <JobSeekerLogin></JobSeekerLogin>
                </div>
            </div>
        </div>
    )
}
