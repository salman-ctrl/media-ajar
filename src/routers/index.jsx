import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../Component/LandingPage';
import Home from '../Component/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/home",
        element: <Home />
    }
]);
