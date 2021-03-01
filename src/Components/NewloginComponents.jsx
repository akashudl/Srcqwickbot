import React, { Component } from 'react'
import firebase ,{db,auth}  from "../Services/firebase.js";
import "../App.css";
import "./Colarib.css";
export default class NewLoginComponent extends Component {
    state={
        user:null,
    }
    signinuser=()=>
    {
        const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
        
    // This gives you a Google Access Token. You can use it to access the Google API.

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
           <div classNamess="main-w3layouts wrapper">
     <h1>Welcome To QwiKcilver Chatbot</h1>
		<h2>SignIn With Google</h2>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<button onClick={this.signinuser}>Sign In with Google</button>
			</div>
		</div>
	
		<div className="colorlibcopy-agile">
			<p>© 2018 Qwikcilver . All rights reserved | Design by Akash Pandit </p>
		</div>
	
		<ul className="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
           </>
        )
    }
}
