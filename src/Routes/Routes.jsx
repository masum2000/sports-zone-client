import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       }
      ]
    },

    {
     path: '*',
     element: <ErrorPage></ErrorPage>
    }
  ]);