import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Forms extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        console.log('submit clicked')
    }
    render() { 
        return ( 
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control"/>
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