import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/Home/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplicatin/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import PostJob from "../Pages/MyPostJob/PostJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";
import { param } from "motion/react-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "postJob",
        element: (
          <PrivateRoute>
            <PostJob></PostJob>
          </PrivateRoute>
        ),
      },
      {
        path: "viewApplication/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "*",
        element: (
          <h1 className="text-4xl font-bold text-red-500 text-center mt-20">
            Page Not Found 🎃 404
          </h1>
        ),
      },
    ],
  },
]);

export default router;
