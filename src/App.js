import Navbar from "./GlobalComponents/Navbar/Navbar";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Routes/Home/Home";
import AboutUs from "./Routes/About-us/AboutUS";
import BuyingPage from "./Routes/Buying/Buying";
import PropertyPage from "./Routes/PropertyPage/PropertyPage";
import SellingPage from "./Routes/Selling/Selling";
import ContactUs from "./Routes/ContactUs/ContactUs";
import Login from "./Routes/Login/Login";
import ManagementPortal from "./Routes/ManagementPortal/ManagementPortal";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/nav" component={Navbar} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/buying" component={BuyingPage} />
      <Route path="/selling" component={SellingPage} />
      <Route path="/view-property" component={PropertyPage} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/login" component={Login} />
      <Route path="/managementPortal" component={ManagementPortal} />
    </Switch>
  );
}

export default App;
