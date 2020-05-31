import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Sidebar from "react-sidebar";
var FA = require("react-fontawesome");

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">What's On Sale?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Sidebar
          sidebar={
            <div className="sidebar">
              <p>
                {" "}
                <b>
                  {" "}
                  <FA name="user" />
                  Account
                </b>
              </p>
              <p>
                <Nav.Link href="/signin">
                  {" "}
                  <FA name="sign-in" />
                  Sign In
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="/createaccount">
                  {" "}
                  <FA name="user-plus" />
                  Create Account
                </Nav.Link>
              </p>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          pullRight="false"
        >
          <button
            className="button"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <FA name="user" />
            Account
          </button>
        </Sidebar>
      </div>
    );
  }
}

export default Account;
