import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Root from "../layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../Pages/Dashboard/cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../Routes/AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<PrivetRoute><Menu></Menu></PrivetRoute>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>,
        },

         // Admin Routes
         {
           path:'/dashboard/addItems',
           element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
         },
         {
          path: 'allUsers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'/dashboard/manageItems',
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        }
      ]
    }
  ]);