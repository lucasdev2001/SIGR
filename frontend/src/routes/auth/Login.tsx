import { NavLink } from "react-router-dom";

export default () => {
  return (
    <main className="vh-100 d-flex align-items-center">
      <div className="container">
        <form id="form-login" className="animate__animated animate__fadeIn">
          <div className="text-center">
            <img
              src="logo-header-no-background.svg"
              className=" img-fluid p-3"
              alt="logotipo"
            />
          </div>
          <h1 className="text-center fm-ubuntu">
            Uai Sô Restaurante e Petiscaria
          </h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-body"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-body"
              placeholder="senha"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Entrar
            </button>
            <button className="btn btn-outline-light" type="button">
              <i className="bi bi-google" />
            </button>
            <div className="form-text text-center">
              <NavLink
                to={"/cadastro"}
                className="text-decoration-none"
                replace={true}
              >
                Ainda não tem uma conta ?
              </NavLink>
              <br />
              ou
              <br />
              <NavLink
                to={"/login-funcionario"}
                className="text-decoration-none"
                id="autenticar-equipe"
                replace={true}
              >
                Faz parte da equipe <u>Uai Sô</u> ?
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
