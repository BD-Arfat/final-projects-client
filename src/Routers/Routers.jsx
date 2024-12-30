import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
  },
]);

export default Routers;
