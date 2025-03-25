import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../../routes";

import "styles/common.css";

export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {routes.map(({ path, component }) => {
            const Component = lazy(() =>
              import(`../../pages/${component}`).then((module) => ({
                default: module[component],
              }))
            );
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
