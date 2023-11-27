import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Google from '../../assets/icon/google.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn } = useAuth();
    //typewriter
    const [text] = useTypewriter({
        words: ['NewsFlash'],
        loop: 1,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
    }
    return (
        <div>
            <Helmet>
                <title>NewsFlash | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="flex-col max-w-2xl md:flex-row-reverse">
                    <div className="">
                        <div className="w-96 px-8">
                        <h1 className="py-8 text-2xl font-bold">Sign in to  
                                <span className="font-bold text-[#dc0003]"> {text}</span><Cursor/>
                                </h1>
                            <div className="form-control">
                                <button className="btn rounded-3xl bg-black text-white">
                                    <img className="h-8" src={Google} alt="" />
                                    Sign in with Google
                                </button>

                                <p className="text-center text-sm pt-5 divider text-[#6e6d7a]">or sign in with email</p>
                            </div>
                        </div>
                        <form onSubmit={handleLogin} className="card-body w-96">
                            
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