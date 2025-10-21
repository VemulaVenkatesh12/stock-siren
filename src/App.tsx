import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import RouteComponent from "./widgets/RouteComponent";
import { routesConfig } from "./utils/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map(({ path, component, layout, isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              <RouteComponent 
                component={component} 
                layout={layout} 
                isProtected={isProtected} 
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
