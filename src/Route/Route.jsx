import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Order from "../Components/Order/Order";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'./.#about',
                element:<Home></Home>
            }
        ]
    },

])


export default router;