import React from "react";
import "./styles/main.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Plans from "./components/pages/Plans/Plans";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/plans" component={Plans} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
