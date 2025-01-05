import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Details from "../pages/ProjectDetails/Details";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project/:projectName',
                element: <Details></Details>,
                loader: ()=>fetch('/Projects.json')
            }
        ]
    }
])
export default routes;