import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Orders from "../Components/Orders/Orders";
import Registation from "../Components/Registation/Registation";
import Login from "../Components/Login/Login";
import Checkout from "../Components/Checkout/Checkout";
import Cart from "../Components/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/order',
                element: <Orders></Orders>,
                loader: async () => {
                    return fetch("https://project1-amber.vercel.app/services")
                }
            },
            {
                path: '/orders',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/checkout/:productId',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://project1-amber.vercel.app/services/${params.productId}`)
            },
            {
                path: '/registation',
                element: <Registation></Registation>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    },

])


export default router;