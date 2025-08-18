import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import JobDetails from "../components/pages/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobApply from "../components/pages/JobApply/JobApply";
import MyApplication from "../components/pages/MyApplication/MyApplication";
import AddAJob from "../components/pages/AddAJob/AddAJob";
import MyPostedJobs from "../components/pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: async ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: 'addJob',
        element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "myApplications",
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
