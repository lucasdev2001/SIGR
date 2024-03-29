import { NavLink } from "react-router-dom";

export default () => (
  <main className="vh-100 d-flex align-items-center">
    <div className="container">
      <form id="form-cadastro" className="animate__animated animate__fadeIn">
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
            placeholder="Email"
          />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-body"
            placeholder="Nome"
          />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control bg-body"
            placeholder="Senha"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control bg-body"
            placeholder="Confirmar senha"
          />
        </div>
        <div className="d-grid gap-2 mb-3">
          <button className="btn btn-primary" type="button">
            cadastrar
          </button>
          <button className="btn btn-outline-light" type="button">
            <i className="bi bi-google" />
          </button>
        </div>
        <div className="form-text">
          <NavLink to={"/"} className="text-decoration-none">Já possuí uma conta ?</NavLink>
        </div>
      </form>
    </div>
  </main>
);
