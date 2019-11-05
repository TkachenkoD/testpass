import React, { Component } from "react";
import {Redirect} from 'react-router-dom'



export default class MainOne extends Component {
    constructor(props){

        super(props);
    
        this.state={
          email:'',
        //   password:'',
        //   name:'',
          loggedIn:false,
        };

        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
    
    }

  
    handleChange(event){
        let name=event.target.name;
        let value=event.target.value;
         let data={};
         data[name]=value;
        console.log(name);
         console.log(value);
         this.setState(data);      
    }

    submit(e){
        // this.setState({loggedIn:true})
        e.preventDefault();

        // window.axios.post('https://testpass.local/oauth/token',{email:this.state.email}) //????
        window.axios.post('https://localhost/testpass.local/oauth/token/',{email:this.state.email}) //????

        .then(response=>{
            console.log(response);
     
            this.setState({loggedIn:true});

         })
         .catch(() => console.log("Can’t reach that server  and get bla-bla response. Blocked by browser?"));
    }

  render() {

    if(this.state.loggedIn){
        return <Redirect to='/details' />
      }
  
    return (
      <React.Fragment>
        <div className="wtf">
          <h4>
          mainOne
          </h4>
          <form onSubmit={this.submit}>
          <input type="text" name='email' value={this.state.email} placeholder="email" onChange={this.handleChange}></input>
          {/* <input type="text" name='password' value={this.state.password} onChange={this.handleChange} placeholder="password" ></input> */}
          {/* <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder="name" ></input> */}
          <button type="submit">Log in...</button>
          </form>
        
        </div>
      </React.Fragment>
    );
  }
}