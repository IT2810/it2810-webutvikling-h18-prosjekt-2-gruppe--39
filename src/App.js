import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";

const openStyle = {
  gridTemplateColumns: "250px auto 25px"
};
const closedStyle = {
  gridTemplateColumns: "25px auto 25px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.isMenuOpen ? (
          <div className="sidebar-wrapper" style={openStyle}>
            <Sidebar callback={this.handleMenuToggle} />
          </div>
        ) : (
          <span
            className="hamburger"
            onClick={() => this.handleMenuToggle()}
            style={closedStyle}
          >
            &#9776;
          </span>
        )}
        <div className="card-wrapper">
          <Card className="card" />
          <Card className="card" />
          <Card className="card" />
          <Card className="card" />
          <Card className="card" />
        </div>
      </div>
    );
  }

  handleMenuToggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default App;
