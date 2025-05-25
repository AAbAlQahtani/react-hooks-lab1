import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import State from "../pages/State";

function Layout() {
    return (

        <>
            <Outlet />

        </>


    );


}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <State /> },
            
        ],
    },
]);


export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
