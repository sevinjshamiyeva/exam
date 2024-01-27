import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./rout/rout";

const router = createBrowserRouter(routers);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
