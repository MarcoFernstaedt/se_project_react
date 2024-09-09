import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return children;
};

export default ProtectedRoute;
