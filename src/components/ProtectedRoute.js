import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? render(props) : <Redirect to="/" />)}
    />
  );
};

export default ProtectedRoute;
