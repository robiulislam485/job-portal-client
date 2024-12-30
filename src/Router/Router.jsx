import { createBrowserRouter } from "react-router-dom";
import MainLAyout from "../Layout/MainLAyout";

import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home/Home";
import JobDetail from "../Pages/JobDetail";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications";
import Addjob from "../Pages/Addjob";
import MyPostedJob from "../Pages/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication";
import AllJob from "../Pages/AllJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLAyout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'allJobs',
                element: <AllJob/>
            },
            {
                path: 'jobs/:id',
                element: <PrivateRoute><JobDetail/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply/></PrivateRoute>,
            },
            {
                path: 'addJob',
                element: <PrivateRoute><Addjob/></PrivateRoute>,
            },
            {
                path: 'myPostedJob',
                element: <PrivateRoute><MyPostedJob/></PrivateRoute>,
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplications/></PrivateRoute>,
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute><ViewApplication/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'signIn',
                element: <SignIn/>
            },
        ]
    },
]);

export default router;