import { NavLink } from "react-router-dom";
export default () => (
  <main className="vh-100 d-flex align-items-center animate__animated animate__fadeIn">
    <div className="container">
      <form id="form-login" className="">
        <div className="text-center mb-3">
          <img src="login-equipe-header.png" className="img-fluid rounded-3" />
        </div>
        <h1 className="text-center fm-ubuntu">
          Bem vindo membro da equipe Uai Sô!
        </h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-body"
            placeholder="CPF"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control bg-body"
            placeholder="chave de acesso"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Entrar
          </button>
          <div className="form-text text-center">
            <NavLink
              to={"/"}
              className="text-decoration-none"
            >
              ínicio
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  </main>
);
