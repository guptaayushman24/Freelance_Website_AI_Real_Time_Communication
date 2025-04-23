'use client'
import { useStore } from "../zustand/Store/useStore"
import { useState } from "react"
import {useRouter} from 'next/navigation'
import createUserProfile from '../actions/UserProfile'
export default function () {
    const router = useRouter();
    const { userid } = useStore();
    const [profile, setProfile] = useState<string>('');
    const [project, Setproject] = useState<Array<string>>([]);
    const [loading, Setloading] = useState<boolean>(false);
    async function createProfile() {
        Setloading(true);
        try {
            const userprofile = await createUserProfile(userid, profile, project);
            if (userprofile == -1) {
                alert("Something wrong with the server try again after sometime");
                return;
            }
            Setloading(false);
            alert("User profile created");
            router.push('/homepage')
            
        }
        catch (err) {
            console.log("Something is wrong with the server");
        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[30rem]">
                <h2 className="text-2xl font-semibold text-center mb-4">Create Your Profile</h2>

                <div className="flex flex-col items-center gap-4">
                    <textarea
                        rows={4}
                        cols={30}
                        placeholder="Write something about yourself, your skills, and your expertise..."
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setProfile(e.target.value)}
                    ></textarea>

                    <div className="w-full">
                        <label className="block text-gray-700 font-medium mb-1">Add Your Project Link</label>
                        <input
                            type="text"
                            placeholder="Enter your project link"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => Setproject(e.target.value.split(" "))}
                        />
                    </div>

                    <button onClick={() => createProfile()} className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
                        {
                            loading?'Saving the User Profile' : 'Create Profile'
                        }
                    </button>
                </div>
            </div>
        </div>


    )
}
