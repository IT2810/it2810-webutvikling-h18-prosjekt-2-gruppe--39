import React from "react";
import Card from "../Card/Card";
import "./Sidebar.css";

const types = {
  dikt: ["klassikere", "funny", "theworst", "erotic"],
  lyd: ["k1", "k2", "k3", "k4"],
  bilde: ["k1", "k2", "k3", "k4"]
};

function Checkbox(props) {
  return (
    <label>
      {props.kategori}
      <input onClick={props.onClick} type="checkbox" />
    </label>
  );
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dikt: {
        klassikere: false,
        funny: false,
        theworst: false,
        erotic: false
      },
      lyd: {
        kategori_1: false,
        kategori_2: false,
        kategori_3: false
      },
      bilde: {
        kategori_1: false,
        kategori_2: false,
        kategori_3: false
      },
      isMenuOpen: false,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div>
        <div className="sidebar" id="sidebar">
          <a className="btn-close" onClick={this.props.callback}>
            X
          </a>
          <ul className="sidebar-element">
            Dikt
            <li>
              <Checkbox
                kategori="Kategori 1"
                onClick={() => this.handleCheckboxClick("dikt", "klassikere")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 2"
                onClick={() => this.handleCheckboxClick("dikt", "funny")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 3"
                onClick={() => this.handleCheckboxClick("dikt", "theworst")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 4"
                onClick={() => this.handleCheckboxClick("dikt", "erotic")}
              />
            </li>
          </ul>
          <ul className="sidebar-element">
            Lyd
            <li>
              <Checkbox
                kategori="Kategori 1"
                onClick={() => this.handleCheckboxClick("lyd", "kategori_1")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 2"
                onClick={() => this.handleCheckboxClick("lyd", "kategori_2")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 3"
                onClick={() => this.handleCheckboxClick("lyd", "kategori_3")}
              />
            </li>
          </ul>
          <ul className="sidebar-element">
            Bilde
            <li>
              <Checkbox
                kategori="Kategori 1"
                onClick={() => this.handleCheckboxClick("bilde", "kategori_1")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 2"
                onClick={() => this.handleCheckboxClick("bilde", "kategori_2")}
              />
            </li>
            <li>
              <Checkbox
                kategori="Kategori 3"
                onClick={() => this.handleCheckboxClick("bilde", "kategori_3")}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderPoems() {
    let index = 1;
    for (let key in this.state.items) {
      for (let i = 0; i < Object.keys(this.state.items[key]).length; i++) {
        //console.log(this.state.items[key][i]);
      }
    }
  }

  handleCheckboxClick(type, kat) {
    const newState = this.state;
    newState[type][kat] = !this.state[type][kat];
    this.setState(newState);
    switch (type) {
      case "dikt":
        this.fetchPoems();
        break;
      case "bilde":
        this.fetchPhotos();
        break;
      case "lyd":
        this.fetchSound();
        break;
      default:
        console.log("Nothing here");
    }
  }

  openSidebar() {
    this.setState({ isMenuOpen: true });
    // document.getElementById('sidebar').style.width = '250px';
  }

  closeSidebar() {
    this.setState({ isMenuOpen: false });
    // document.getElementById('sidebar').style.width = '0px';
  }

  fetchPhotos() {} // TODO: fetch photos

  fetchSound() {} // TODO: fetch sound

  fetchPoems() {
    const keys = [];
    for (let key in this.state.dikt) {
      if (this.state.dikt[key] === true) {
        keys.push(key);
      }
    }
    fetch("media/Poems.json")
      .then(res => res.json())
      .then(
        res => {
          let newRes = {};
          keys.forEach(k => (newRes[k] = res[k]));
          this.setState(
            {
              items: newRes,
              isLoaded: true
            },
            () => this.renderPoems()
          );
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
}

export default Sidebar;
