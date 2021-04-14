import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Forms extends Component {
    username=React.createRef();
    handleSubmit=e=>{
        e.preventDefault();
        const username=this.username.current.value;
        console.log('submit clicked')
        console.log(`username is ${username}`);
    }
    render() { 
        return ( 
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={this.username} id="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div> 
        );
    }
}
 
export default Forms;