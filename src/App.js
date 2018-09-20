import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Card/Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handlePoemLoad = this.handlePoemLoad.bind(this);
    this.handleAudioLoad = this.handleAudioLoad.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);

    this.state = {
      isMenuOpen: true,
      items: [],
      audio: [],
      images: []
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
              loadPoems={this.handlePoemLoad}
              loadAudio={this.handleAudioLoad}
              loadImages={this.handleImageLoad}
            />
          </div>
        ) : (
          <span className="hamburger" onClick={() => this.handleMenuToggle()}>
            &#9776;
          </span>
        )}
        <div className="card-wrapper">
          <Cards
            className="cards"
            poems={this.state.items}
            audio={this.state.audio}
            images={this.state.images}
          />
        </div>
      </div>
    );
  }

  handleImageLoad(data) {
    this.setState({ images: data });
  }

  handlePoemLoad(data) {
    this.setState({ items: data });
  }

  handleAudioLoad(data) {
    this.setState({ audio: data });
  }

  handleMenuToggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default App;
