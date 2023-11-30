import { FaEnvelope, FaFileContract, FaHome, FaPhone, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black text-white">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                }>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                }>
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allArticles" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                }>
                                    <FaUsers></FaUsers>
                                    All Articles</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addPublishers" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                }>
                                    <FaHome></FaHome>
                                    Add Publishers</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                    }>
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myArticle" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                    }>
                                        <FaHome></FaHome>
                                        My Article</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myProfile" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                                    }>
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav link */}
                    <div className="border-t border-white"></div>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                        }>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                        }>
                            <FaEnvelope></FaEnvelope>
                            About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#dc0003]" : "font-medium"
                        }>
                            <FaPhone></FaPhone>
                            Contact</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;