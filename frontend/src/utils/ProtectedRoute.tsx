import { Navigate } from "react-router-dom";

export default function (props: {
  unauthorizedRedirectTo: string;
  children: JSX.Element;
}) {
  if(!localStorage.getItem('usuario')){
    return <Navigate to={props.unauthorizedRedirectTo}/>
  }  
  return props.children;
}
