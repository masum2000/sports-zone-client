import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ClassesCard from "../Pages/Classes/ClassesCard";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";


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
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'signUp',
        element: <SignUp></SignUp>
       },
       {
        path: 'classes',
        element: <Classes></Classes>
       },
       {
        path: 'instructors',
        element: <Instructors></Instructors>
       }
      ]
    },

    {
     path: '*',
     element: <ErrorPage></ErrorPage>
    }
  ]);