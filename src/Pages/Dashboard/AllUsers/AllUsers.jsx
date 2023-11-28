import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })
    return (
        <div className="p-8">
            <SectionTitle heading='All Users'>
            </SectionTitle>
            <div>
                <h2 className="text-3xl py-4">Total Users: {users.length}</h2>
                
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead className="bg-black text-white">
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users,index) => <tr key={users._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={users.photo} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-sm bg-[#B91C1C] text-white">Make Admin</button>
                                </th>
                                <td>
                                    <button
                                        className="btn btn-ghost btn-sm bg-[#B91C1C]">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllUsers;