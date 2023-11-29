import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })

    //Make Admin 
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: "Congratulations!",
                    text: `${user.name} is an Admin Now!`,
                    icon: "success"
                  });
            }
        })

    }
    const handleDeleteUser =user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                            users.map((user,index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th>
                                    { user.role==='admin' ?<button 
                                    
                                    className="btn w-28 btn-ghost btn-sm text-[#B91C1C] bg-black">Admin</button> :<button 
                                    onClick={() =>handleMakeAdmin(user)}
                                    className="btn w-28cz btn-ghost btn-sm bg-[#B91C1C] text-white">Make Admin</button>}
                                </th>
                                <td>
                                    <button
                                    onClick={() => handleDeleteUser(user)}
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