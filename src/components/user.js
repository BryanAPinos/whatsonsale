import React from "react";
import firebase from "../firestore";
import { Redirect, Link } from "react-router-dom";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection("users").add({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  render() {
    return (
      <form onSubmit={this.addUser} className="createAccount">
        <p>Create an account for notifications on new sales.</p>
        <p>
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={this.updateInput}
            value={this.state.firstname}
          />
        </p>
        <p>
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastname}
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={this.updateInput}
            value={this.state.email}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={this.updateInput}
            value={this.state.password}
          />
        </p>
        <p>
          {this.renderRedirect()}

          <button type="submit">Create Account</button>
        </p>
        <p>
          Already have an account?
          <Link to="signin"> Sign In</Link>
        </p>
        <p>
          <Link to="home">Go Back</Link>
        </p>
      </form>
    );
  }
}

export default User;
