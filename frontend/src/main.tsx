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
import CadastroCliente from "./routes/auth/CadastroCliente";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginFuncionario from "./routes/auth/LoginFuncionario";

//Rotas

function getUsuario() {
  return sessionStorage.getItem("usuario");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="/cadastro" element={<CadastroCliente />} />
      <Route
        path="/login-funcionario"
        element={
          <LoginFuncionario usuario={sessionStorage.getItem("usuario")} />
        }
      />
      <Route
        path="/adm"
        element={
          <ProtectedRoute unauthorizedRedirectTo={"/"}>
            <>Olá Adm</>
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
