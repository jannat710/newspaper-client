import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from '../../assets/error.json'


const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Lottie className='h-1/3 w-1/3 mx-auto' animationData={error}></Lottie>
            <h1 className='text-center font-bold'>404-PAGE NOT FOUND</h1>
            <p className='py-5 text-center'>The page you are looking for might have been removed <br></br>had its name changed or is temporary unavailable</p>
            <button className='btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white flex justify-center items-center mx-auto'><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;