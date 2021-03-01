import React, {Component} from 'react';
import './App.css';
import  LoginComponent from "./Components/LoginComponent";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import  Welcome from "./Components/Welcome";
import ChatbotComponet from "./Components/ChatbotComponet";
import ErrorComponent from "./Components/ErrorComponent";
import AuthorizedLogin from "./Components/AuthorizedLoging";
import HeaderComponent from "./Components/HeaderComponent";
import "./bootstrap.css";
import Authenticatedroute from "./Components/Authenticatedroute";
import LogoutComponent from "./Components/Logoutcomponet";
import Footer from "./Components/Footer";


class App extends Component
{ 
  render()
  {
  return (
    <div className="App">
      <Router>
      <> 
        <HeaderComponent/>
      <Switch>
        <Route path="/" exact component={LoginComponent}/>
        <Route path="/Login" component={LoginComponent}/>
        <Authenticatedroute path="/Welcome/:dispalyname" component={Welcome}/>
        <Authenticatedroute path="/Chatbot" component={ChatbotComponet}/>
        <Authenticatedroute path="/logout" component={LogoutComponent}/>
        <Route path="/auth" component={AuthorizedLogin}/>
        <Route  component={ErrorComponent}/>
        
        </Switch>
        <Footer/>
        </>
        </Router>     
    </div>
  );
  }
}

export default App;
