import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/Register/Register";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
