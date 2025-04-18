import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../home/HomePage";
import UserDetailsPage from "../userDetail/UserDetailsPage";
import { Navigate } from "react-router";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/users" replace />,
    },
    {
      path: "users",
      Component: HomePage,
  
    },
    {
      path: "users/:id",
      Component: UserDetailsPage,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
