import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import Dashboard from "../Layout/MainLayout/Dashboard";
import MyArticle from "../Pages/Dashboard/MyArticle/MyArticle";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myArticle',
                element: <MyArticle></MyArticle>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
        ]
    }

]);

export default router;