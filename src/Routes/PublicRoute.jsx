import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addArticles',
                element: <AddArticles></AddArticles>
            },
            {
                path: '/allArticles',
                element: <AllArticles></AllArticles>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }

]);

export default router;