import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'http://localhost:5001'
})

const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;