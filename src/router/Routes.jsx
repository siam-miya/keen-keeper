import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/timeline",
            element: <Timeline/>
        },
        {
            path: "stats",
            element: <Stats/>
        }
    ],
    errorElement: <ErrorPage/>
  },
]);
