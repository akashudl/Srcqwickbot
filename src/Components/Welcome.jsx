import React, { Component } from 'react'
import "./Welcome.css";

export default class Welcome extends Component {
    render() {
          
        return (
            <>
            <div> 
                <h1  style={{textAlign:"center"},{color:"blue"}}>Welcome {this.props.match.params.dispalyname} </h1>
            </div>
      

            </>
        )
    }
}
