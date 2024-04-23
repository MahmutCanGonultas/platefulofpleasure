import errorImage from "../images/errorImage.jpg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="relative">
        <img src={errorImage} alt="" className="w-full h-screen object-top" />
        <div className="absolute left-0 top-0">
          <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  }
  return <h1>Error</h1>;
};

export default Error;
