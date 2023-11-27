import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black text-white">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myArticle" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                            <FaHome></FaHome>
                            My Article</NavLink>
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