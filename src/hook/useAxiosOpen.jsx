import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'https://newspaper-server-three.vercel.app'
})

const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;