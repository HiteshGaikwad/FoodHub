import { useRouteError } from "react-router-dom";
const Error=()=>{
const error=useRouteError();
return(
  <div className="error-container">
    <h2>{error?.error?.message}</h2>
    <h3>{error?.statusText}{": "}{error?.status}</h3>
    </div>
)
}
export default Error;