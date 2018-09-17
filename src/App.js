import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Card/Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleDataLoad = this.handleDataLoad.bind(this);

    this.state = {
      isMenuOpen: true,
      items: []
    };
  }

  render() {
    return (
      <div
        className={
          this.state.isMenuOpen
            ? 'container-menu-open'
            : 'container-menu-closed'
        }
      >
        {this.state.isMenuOpen ? (
          <div className="sidebar-wrapper">
            <Sidebar
              callback={this.handleMenuToggle}
              loadData={this.handleDataLoad}
            />
          </div>
        ) : (
          <span className="hamburger" onClick={() => this.handleMenuToggle()}>
            &#9776;
          </span>
        )}
        <div className="card-wrapper">
          <Cards className="cards" content={this.state.items} />
        </div>
      </div>
    );
  }

  handleDataLoad(data) {
    this.setState({ items: data });
  }

  handleMenuToggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default App;
