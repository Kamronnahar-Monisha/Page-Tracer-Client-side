import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element:<PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>,
    },
]);