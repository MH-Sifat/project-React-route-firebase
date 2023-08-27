import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Orders from "../Components/Orders/Orders";
import Registation from "../Components/Registation/Registation";
import Login from "../Components/Login/Login";

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
                loader: async () =>{
                    return fetch("product.JSON")
                },
                element:<Orders></Orders>
            },
            {
                path:'/registation',
                element:<Registation></Registation>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            
        ]
    },

])


export default router;