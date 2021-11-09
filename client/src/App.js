import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Auctions from "./components/Auctions/Auctions";
import { Provider } from "react-redux";
import store from "./state/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/auctions">
            <Auctions />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
