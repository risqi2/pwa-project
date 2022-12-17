import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import About from "../pages/About";
import Calculator from "../pages/Calculator";
import Degree from "../pages/Degree";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Length from "../pages/Length";
import Money from "../pages/Money";
import Root from "../pages/Root";
import SimpleNotes from "../pages/SimpleNotes";
import Weight from "../pages/Weight";

const router = createBrowserRouter([
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
                path:"money",
                element:<Money/>,
                loader:null,
            },
            {
                path:"degree",
                element:<Degree/>,
                loader:null,
            },
            {
                path:"weight",
                element:<Weight/>,
                loader:null,
            },
            {
                path:"length",
                element:<Length/>,
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