import { Navigate } from "react-router-dom";

export default function (props: {
  usuario: string | null;
  unauthorizedRedirectTo: string;
  children: JSX.Element; //
}) {
  if (props.usuario === null) {
    return <Navigate to={props.unauthorizedRedirectTo} replace={true} />;
  }
  return props.children;
}
