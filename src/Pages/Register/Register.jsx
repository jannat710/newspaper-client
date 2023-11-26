import { Helmet } from "react-helmet-async";
import Google from '../../assets/icon/google.png'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
console.log(data)
    }
    return (
        <div>
            <Helmet>
                <title>NewsFlash | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="flex-col max-w-2xl md:flex-row-reverse">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="py-8 text-2xl font-bold pr-24">Sign Up to NewsFlash</h1>
                            <div className="form-control">
                                <button className="btn rounded-3xl bg-black text-white">
                                    <img className="h-8" src={Google} alt="" />
                                    Sign in with Google
                                </button>

                                <p className="text-center text-sm pt-5 divider text-[#6e6d7a]">or sign up with email</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-3xl bg-black text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center pb-5'><small className="text-sm text-[#6e6d7a]">Already have an account? <Link className="underline font-bold" to="/login">Login</Link> </small></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;