import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const auth = (Component) => {
  return (props) => {
    const { isAuth, data } = useSelector((state) => state.users);

    if (!isAuth) {
      return <Navigate to="/login" />;
    } else if (data.role !== "admin") {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default auth;
