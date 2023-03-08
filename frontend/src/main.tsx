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
import LoginEquipe from "./routes/auth/LoginEquipe";

//Rotas

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login-equipe" element={<LoginEquipe />} />
      <Route
        path="/cliente"
        element={
          <ProtectedRoute user={null}>
            <Cadastro />
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
