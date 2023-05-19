import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";

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
        path: "allToys",
        element: <AllToys></AllToys>
      },
      {
        path: "toy/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      }
    ]
  },
  {
    path: "*",
    element: <h1 className="min-h-screen text-center my-20 font-bold">404 Not Found</h1>
  }
]);

export default router;