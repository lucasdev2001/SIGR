import { Navigate } from "react-router-dom";

export default function (props: {
  user: string | null; // usuário da rota, ex: professor: Carlos
  AuthComponent: JSX.Element; //Auth da rota, ex: página login professores
  children: JSX.Element; //
}) {
  if (!props.user) {
    return <Navigate to="/" replace={true} />
  }
  return props.children;
}
