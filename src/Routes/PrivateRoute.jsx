import Lottie from "lottie-react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";
import loadingAnimation from '../assets/loading.json'


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    // if(loading){
    //     return <div><Lottie className="h-96 w-96 mx-auto" animationData={loadingAnimation}></Lottie></div>;
    // }

    // if (user) {
    //     return children;
    // }
    // return <Navigate to="/login" state={{from: location}} replace></Navigate>
    if (loading) {
        return <div><Lottie className="h-96 w-96 mx-auto" animationData={loadingAnimation}></Lottie></div>;
    }

    if (!loading && !user?.email) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;

    }


    return children;
};

export default PrivateRoute;