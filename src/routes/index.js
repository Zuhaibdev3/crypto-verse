import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const Home = lazy(() => import("../pages/Home"))
const AfterGenerateImage = lazy(() => import("../pages/after-generate-image"))
const Profile = lazy(() => import("../pages/profile"))

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/after-generate-image",
        element: <AfterGenerateImage />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ]
  }

])