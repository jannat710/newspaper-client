import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Google from '../../assets/icon/google.png'


const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Helmet>
                <title>NewsFlash | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="flex-col max-w-2xl md:flex-row-reverse">
                    <div className="">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="py-8 text-2xl font-bold pr-24">Sign in to NewsFlash</h1>
                            <div className="form-control">
                                <button className="btn rounded-3xl bg-black text-white">
                                    <img className="h-8" src={Google} alt="" />
                                    Sign in with Google
                                </button>

                                <p className="text-center text-sm pt-5 divider text-[#6e6d7a]">or sign with email</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-3xl bg-black text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-5'><small className="text-sm text-[#6e6d7a]">Do not have an account? <Link className="underline font-bold" to="/register">Register</Link> </small></p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;