import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: data =[]}=useQuery({
        queryKey:['users'],
        queryFn:async () =>{
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })
    return (
        <div>
            <SectionTitle heading='All Users'>
            </SectionTitle>
            <div>
                <h2 className="text-3xl">Total Users: {data.length}</h2>
            </div>

        </div>
    );
};

export default AllUsers;