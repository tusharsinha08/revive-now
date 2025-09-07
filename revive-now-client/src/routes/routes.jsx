import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    },
]);