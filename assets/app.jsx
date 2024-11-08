// import './bootstrap.js';

import './styles/app.css';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./src/routes/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// )
