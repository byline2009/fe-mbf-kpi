/* eslint-disable react/prop-types */
"use client";
import { FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TopBarProgress from "react-topbar-progress-indicator";
import MasterLayout from "../components/core/MasterLayout";
import { ErrorBoundary } from "react-error-boundary";
interface IProps {
  children: React.ReactNode;
}
export default function ComingSoonPage() {
  return <h1>Coming soon</h1>;
}

const routesAsideMenu = [
  {
    url: "/fe-demo/report",
  },
];

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard-business" />} />
        {/* Pages */}
        <Route
          path="dashboard-business"
          element={
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <SuspensedView>
                <DashboardPage />
              </SuspensedView>
            </ErrorBoundary>
          }
        />

        {routesAsideMenu.map((route) => {
          return (
            <Route
              key={route.url}
              path={`${route.url}/*`}
              element={<ComingSoonPage />}
            />
          );
        })}

        {/* Page Not Found  */}
        {/* <Route path="*" element={<Navigate to="/error/404" />} /> */}
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<IProps> = ({ children }) => {
  TopBarProgress.config({
    barColors: {
      0: "#1a53ff",
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
