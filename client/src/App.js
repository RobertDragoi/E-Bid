import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuctionDetail from "./components/AuctionDetail/AuctionDetail";
import Auctions from "./components/Auctions/Auctions";
import Profile from "./components/Profile/Profile";
import LandingPage from "./components/LandingPage/LandingPage";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./state/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/auction/:id" component={AuctionDetail} />
            <PrivateRoute exact path="/auctions" component={Auctions} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
