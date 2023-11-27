import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import useAuth from '../../../hook/useAuth';

const Navbar = () => {
    const { user,logOut } =useAuth()
    //Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navlink = <div className="flex flex-col  md:flex-row lg:flex-row justify-center items-center">
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addArticles"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Add Articles
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/allArticles"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                All Articles
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/subscription"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Subscription
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myArticle"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                My Article
            </NavLink>
        </li> 
        <li>
            <NavLink
                to="/premiumArticle"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Premium Article
            </NavLink>
        </li>
        
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Register
            </NavLink>
        </li>
        
    </div>

    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='h-12' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
            {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
            <img className="h-6 w-6 rounded-full m-2" src={user?.photoURL} alt="" />
                <button onClick={handleLogOut} className="font-semibold text-sm">Logout</button>
            </> : <>
            
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#dc0003] font-semibold text-sm " : "font-semibold text-sm"
                }
            >
                Login
            </NavLink>
        
            </>
        }
            </div>
        </div>
    );
};

export default Navbar;