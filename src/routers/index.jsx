import React from "react";
import { RouterProvider } from "react-router-dom"; // Tambahkan RouterProvider
import { router } from "./routes/router"; // Pastikan path-nya benar

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
