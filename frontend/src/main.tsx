import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./routes/auth/Login";
import Cadastro from "./routes/auth/Cadastro";
import ProtectedRoute from "./utils/ProtectedRoute";

//Rotas

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route
        path="/cliente"
        element={
          <ProtectedRoute>
            <>Cliente Liberado</>
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
