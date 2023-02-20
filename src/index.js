import React from 'react';
import {createRoot} from 'react-dom/client';
import Admin from './Pages/Admin';
import Chat from './Pages/Chat';
import Train from './Pages/Train';
import App from './App';
import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Train",
        element: <Train/>,
    },
    {
        path: "Chat",
        element: <Chat/>,
    },
    {
        path: "Admin",
        element: <Admin/>,
    },

 ]);
const root=createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
