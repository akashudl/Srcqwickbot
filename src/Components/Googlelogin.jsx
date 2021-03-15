import React, { Component } from 'react'
import GoogleLogin from "react-google-login";
import AuthenticationService from "../Services/AuthenticationService";
import "./googlesign.css";
export default class Googlelogin extends Component {
    state={
        user:null,
        dispalyname:"",
        username :"",
        photourl:""
    }
    responseGoogle = (response) => {
        const check="@qwikcilver.com";
        this.setState({dispalyname:response.profileObj.givenName})
        this.setState({username:response.profileObj.email})
        this.setState({photourl:response.profileObj.imageUrl})
        const valid=this.state.username.substring(this.state.username.length-15,this.state.username.length);
        console.log(valid);
        if(check===valid)
        {                            
          AuthenticationService.registerSucessfullLogin(this.state.username,this.state.photourl);
        //this.props.history.push(`/Welcome/${this.state.dispalyname}`);

          this.props.history.push(`/chatbot`)
    // This gives you a Google Access Token. You can use it to access the Google API.
        }
        else 
        {
          this.props.history.push("/auth");
        }
      };
    
    render() {
        return (
            <div className="Center">
                <GoogleLogin
                 clientId="245509110223-s5tr34nmrqccfdlbp1ceavjh55294169.apps.googleusercontent.com"
                onSuccess={this.responseGoogle}
                
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                />
            </div>
        )
    }
}
