import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFount from './components/NotFound/NotFount';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Header from "./components/Shared/Header/Header";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import AddService from "./components/AddService/AddService";
import ManageService from "./components/ManageService/ManageService";
import MyOrder from "./components/MyOrder/MyOrder";
import Contact from "./components/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:_id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          {/* <Route exact path="/contact">
            <Contact></Contact>
          </Route> */}
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
