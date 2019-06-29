import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './Reg.css';


class Reg extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
    redirect: false,
    errorMessage: ''
  };


  onChangeFunc = e => {
    this.setState({
      [e.target.name]: e.target.value });
  };
  
  regUser = async e => {
    e.preventDefault();
    if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) == null) {
      this.setState({
        errorMessage: "Incorrect email"
      })
      }
     else if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Not strong password"
      })
     } else {
    let res = await fetch("/api/regUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
      })
    });
    this.setState({ 
      redirect: true,
    });
  };
}

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    } 
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div style={{ marginTop: "10%" }} className="ui centered card">
          <div
            style={{ margin: "4%" }}
            className="ui form"
            onChange={this.onChangeFunc}
          >
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="userName"
                placeholder="First Name"
                value={this.state.userName}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
            </div>
            <button
              className="ui blue button"
              type="submit"
              onClick={this.regUser}
            >
              REGISTER
            </button>
            <h5>{this.state.errorMessage}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Reg;
