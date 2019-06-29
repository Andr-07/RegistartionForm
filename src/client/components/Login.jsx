import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Secret from "./Secret";

class Login extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    describe: ""
  };

  onChangeFunc = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logUser = async e => {
    e.preventDefault();
    console.log("click");
    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email
      })
    });
    let response = await res.json();
    console.log(response)
    this.setState ({
        name: response.name,
        describe:response.message
    })
  };

  success = () => {
      if (this.state.describe === "Succesful login") {
        this.props.updateData(this.state.name)
        return <Redirect to="/secret" />;
      }
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: "10%" }} className="ui centered card">
          <div
            style={{ margin: "4%" }}
            className="ui form"
            onChange={this.onChangeFunc}
          >
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
              className="ui red button"
              type="submit"
              onClick={this.logUser}
            >
              LOGIN
            </button>
            <h5>{this.state.describe}</h5>
            {this.success()}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
