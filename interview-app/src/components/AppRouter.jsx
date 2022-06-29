import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../router/routes";

const AppRouter = () => {
  return (
     <Routes>
      {routes.map(route => 
        <Route path={route.path} element={route.component} exact={route.exact}/>
      )}
    </Routes>
  );
};

export default AppRouter;
