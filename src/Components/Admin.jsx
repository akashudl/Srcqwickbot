import React, { Component } from 'react'
import {db,auth} from "../Services/firebase";
import "../bootstrap.css";
export default class Admin extends Component {
    state ={
      userInfo:null,
      count:0,

    }
    componentDidMount() 
    {  
        db.collection('Userlogininfo').
        get().
        then(snapshot=>{
            console.log(snapshot);
          const user=[]
          snapshot.forEach( doc=>
            {
                const data =doc.data()
                user.push(data)
            
            })
            this.setState({userInfo:user})
            this.setState({count:this.state.count+1})
        }).catch(error=>console.log(error))


    
    }
    render() {
        return (
          <div className="container">
              <h1>Welcome Admin</h1>
              <h2 style={{color:"white"}}>List Of user Logged in</h2>
              {
                
                this.state.userInfo&&this.state.userInfo.map(userInfo=>{
                     return (
                         <div>
                           
                             <table className="table table-sm table-dark">
                                 <thead>
                                     <tr>
                                         <th>Name</th>
                                         <th>Email</th>
                                         <th>Date</th>
                                         <th>Time</th>
                                         </tr>
                                 </thead>
                                 <tbody>
                                 <tr>
  
                               <td>{userInfo.Name}</td> 
                               <td>{userInfo.Email}</td>
                               <td>{userInfo.date}</td>
                               <td>{userInfo.time}</td>
                                 </tr>
                                 </tbody>
                             </table>
                          
                 
                    </div>)
            
            
            
            
                }) 
              }
          </div>
        )
    }
}
