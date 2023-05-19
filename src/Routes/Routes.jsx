import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "alltoys",
            element: <AllToys></AllToys>
        },
        {
            path: "toy/:id",
            element: <ToyDetails></ToyDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
    {
        path: "*",
        element: <h1 className="min-h-screen text-center my-20 font-bold">404 Not Found</h1>
    }
  ]);

  export default router;