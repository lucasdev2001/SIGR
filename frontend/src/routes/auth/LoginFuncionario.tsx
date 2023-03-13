import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import * as md5 from "md5";
import axios from "axios";
export default () => {
  //constantes
  const [cpf, setCPF] = useState("");
  const [chaveAcesso, setChaveAcesso] = useState("");
  const [usuario, setUsuario] = useState<{
    nome: String;
    cpf: String;
    isAdm: boolean;
  } | null>(null);

  //useEffects

  useEffect(() => {
    if (sessionStorage.getItem("usuario") !== null)
      setUsuario(JSON.parse(sessionStorage.getItem("usuario")!));
  }, []);
  //handlers
  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const findFuncionario = await axios.post(
        import.meta.env.VITE_API_URL + "auth/funcionario-login",
        {
          cpf: cpf,
          chaveAcesso: chaveAcesso,
        }
      );
      sessionStorage.setItem(
        "usuario",
        JSON.stringify(findFuncionario.data.data)
      );
      setUsuario(findFuncionario.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //componentes
  const FormLoginFuncionario = () => (
    <form id="form-login-funcionario" onSubmit={handleLogin}>
      <div className="text-center mb-3">
        <img
          src="login-equipe-header.png"
          className="img-fluid rounded-3 animate__animated animate__flipInY"
        />
      </div>
      <h1 className="text-center fm-ubuntu">Bem vindo funcionário Uai Sô!</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-body"
          placeholder="CPF"
          onChange={(e) => setCPF(e.target.value)}
          value={cpf}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control bg-body"
          placeholder="chave de acesso"
          onChange={(e) => setChaveAcesso(e.target.value)}
          required
        />
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="submit">
          Entrar
        </button>
        <div className="form-text text-center">
          <NavLink to={"/"} className="text-decoration-none">
            ínicio
          </NavLink>
        </div>
      </div>
    </form>
  );

  return (
    <main className="vh-100 d-flex align-items-center animate__animated animate__fadeIn">
      <div className="container">
        {usuario && (
          <Navigate
            to={usuario.isAdm ? "/adm" : "/funcionario"}
            replace={true}
          />
        )}
        {<FormLoginFuncionario />}
      </div>
    </main>
  );
};
