import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Reg from "../Reg";
import Login from "../Login";
import Secret from "../Secret";


class App extends React.Component {
  state = {
    name: ''
  };

  updateData = (value) => {
    this.setState({ name: value })
 }


  render() {
    return (
      <Router>
        <div className="ui secondary  menu">
              <Link className="item" to="/">Sign Up</Link>
              <Link className="item" to="/login">Login</Link>
              </div>
          <hr />
          <Switch>
            <Route exact path="/" render={() => <Reg />} />
            <Route exact path="/login" render={() => <Login updateData={this.updateData}/>} />
            <Route exact path="/secret" render={() => <Secret name={this.state.name} />} />
          </Switch>
      
      </Router>
    );
  }
}

export default App;
