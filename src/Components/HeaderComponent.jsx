import React, { Component } from 'react'
import "../bootstrap.css"
import {Link} from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService"
export default class HeaderComponent extends Component {
    render() {
       //const isUserloggedIN=Authenticationservice.isUserloggedin();
        return (
            <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       <div className="navbar-brand"><a href="https://www.qwikcilver.com/">Qwikcilver.com</a></div>
       <ul className="navbar-nav">
          <li className="nav-link"><Link to="/Welcome/To Qwikcilver">Home</Link></li>
          <li className="nav-link"><Link to="/Chatbot">Chatbot</Link></li>
         </ul>
         <ul className="navbar-nav navbar-collapse justify-content-end">
          <li className="nav-link"><Link to="/login">Login</Link></li>
          <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout} >Logout</Link></li>
         </ul >
        </nav>
      </header>
        )
    }
}
