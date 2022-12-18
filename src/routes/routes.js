import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import Error from "../components/Error";
import About from "../pages/About";
import Calculator from "../pages/Calculator";
import Converter from "../pages/Converter";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

import Root from "../pages/Root";
import SimpleNotes from "../pages/SimpleNotes";


const router = createHashRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<Error404/>,
        children:[
            {
                path:"",
                element:<Home/>,
                loader:null,
            },
            {
                path:"calculator",
                element:<Calculator/>,
                loader:null,
            },
            {
                path:"converter",
                element:<Converter/>,
                loader:null,
            },
            {
                path:"simplenotes",
                element:<SimpleNotes/>,
                loader:null,
            },
            {
                path:"about",
                element:<About/>,
                loader:null,
            },
        ]
    }
])

export {router}