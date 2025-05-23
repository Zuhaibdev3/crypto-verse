import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import AuthGuard from "../guard/AuthGuard";

const Home = lazy(() => import("../pages/Home"))
const AfterGenerateImage = lazy(() => import("../pages/after-generate-image"))
const Profile = lazy(() => import("../pages/profile"))




const BuySellNft = lazy(() => import("../pages/buy-sell-nft"))
const MyNft = lazy(() => import("../pages/myNft"))
const Whitepaper = lazy(() => import("../pages/whitepaper"))
const Roadmap = lazy(() => import("../pages/roadmap"))



export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },


      //secure routes
      {
        element: <AuthGuard />,
        children: [
          {
            path: "/after-generate-image",
            element: <AfterGenerateImage />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/myNft",
            element: <MyNft />
          },
          {
            path: "/mintNft/:id",
            element: <BuySellNft />
          },
        ]
      },

      // New routes added after design update
      
      {
        path: "/whitepaper",
        element: <Whitepaper />
      },
      {
        path: "/roadmap",
        element: <Roadmap />
      },
    ]
  }

])











