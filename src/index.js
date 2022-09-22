import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home/Home";
import Prorducts from "./Routes/Products/Prorducts";
import AddProduct from "./Routes/Products/AddProduct";
import SignIn from "./Routes/Auth/SignIn";

const root = ReactDOM.createRoot(document.getElementById("root"));

const token = localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "/",
    element: token ? <Home /> : <h1>Not Auth</h1>,
  },
  {
    path: "/products",
    element: token ? <Prorducts /> : <h1>Not Auth</h1>,
  },
  {
    path: "/add-product",
    element: token ? <AddProduct /> : <h1>Not Auth</h1>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
