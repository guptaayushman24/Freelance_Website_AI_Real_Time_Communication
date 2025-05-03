import { getServerSession } from 'next-auth/next'
import { NEXT_AUTH } from '@/lib/auth'
import Client_Completed_Project from '../actions/Client_Completed_Project';
export default async function () {
    const session = await getServerSession(NEXT_AUTH);
    const clientid = session?.user.id;
    const data = await Client_Completed_Project(clientid);
    return (
        <div>
            <div className="p-6 space-y-4">
                {data?.map((project) => (
                    <div
                        key={project.completedprojectid}
                        className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    >
                        <h2 className="text-xl font-bold text-blue-600">{project.project_title || 'N/A'}</h2>
                        <div className="mt-3 flex justify-between text-sm text-gray-600">
                            <h2>💰 Budget: {project.budget || 'N/A'}</h2>
                            <div className="flex flex-col gap-[1rem]">
                                <h2>🕒 Timeline: {project.timeline || 'N/A'}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}