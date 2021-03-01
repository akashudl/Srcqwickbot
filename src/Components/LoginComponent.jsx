import React, { Component } from 'react'
import firebase ,{db,auth}  from "../Services/firebase.js";
import "./googlesign.css";
import AuthenticationService from "../Services/AuthenticationService";
export default class LoginComponent extends Component {
    state={
        user:null,
        dispalyname:"",
        username :"",
    }
    signinuser=()=>
    {
        const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
     const email=firebase.auth().currentUser.email;
            const check="@qwikcilver.com";
       this.setState({dispalyname:firebase.auth().currentUser.displayName})
       this.setState({username:firebase.auth().currentUser.email})
       const valid=email.substring(email.length-15,email.length);
        console.log(valid);
        if(check===valid)
        { AuthenticationService.registerSucessfullLogin(this.state.username);
        this.props.history.push(`/Welcome/${this.state.dispalyname}`);
    // This gives you a Google Access Token. You can use it to access the Google API.
        }
        else 
        {
          this.props.history.push("/auth");
        }

   const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    console.log(error)

  });

    }
    render() {
        return (
           <>
            <div className="Center">
          
            <button formAction="https://www.youtube.com/watch?v=1KhZKNZO8mQ" className="googleSignIn googleSignIn--white"onClick={this.signinuser}>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/G-on-clear.svg" alt="Google logo"/>
    <span className="googleSignIn__text">Sign in with Google</span>
  </button>

                 </div> 
           </>
        )
    }
}
