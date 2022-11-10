import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import EditReview from "../Pages/EditReview/EditReview";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview/MyReview";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
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
                element:<Services></Services>,
                loader:()=>{
                    return fetch('http://localhost:5000/services');
                }
            },
            {
                path: "/services/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:async({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`);
                }
            },
            {
                path: "/review/:id",
                element:<PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader:async({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`);
                }
            },
            {
                path: "/my-review",
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },
            {
                path: "/add-service",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path: "/edit-review/:id",
                element:<PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader:async({params})=>{
                    return fetch(`http://localhost:5000/orders/${params.id}`);
                }
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