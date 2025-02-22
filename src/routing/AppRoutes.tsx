/* eslint-disable no-undef */
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import App from "../App";
import { ErrorsPage } from "../pages/ErrorPage";
import { RootState } from "../setup/redux/RootReducer";
import { Logout, AuthPage } from "../auth";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { REACT_APP_PUBLIC_URL } = process.env;

const AppRoutes = () => {
  const isAuthorized =
    useSelector<RootState>(({ auth }) => auth.user, shallowEqual);
  return (
    <BrowserRouter basename={REACT_APP_PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {!isAuthorized ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
