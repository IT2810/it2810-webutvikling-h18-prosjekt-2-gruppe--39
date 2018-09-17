import React from 'react';
import './Sidebar.css';

function Checkbox(props) {
  return (
    <label>
      {props.category}
      <input onClick={props.onClick} type="checkbox" />
    </label>
  );
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: {
        classic: false,
        funny: false,
        theworst: false,
        erotic: false
      },
      sound: {
        kategori_1: false,
        kategori_2: false,
        kategori_3: false
      },
      image: {
        kategori_1: false,
        kategori_2: false,
        kategori_3: false
      }
    };
  }

  renderCheckboxes(type, categories) {
    let checkboxes = [];
    categories.forEach((c, i) => {
      checkboxes.push(
        <li key={i}>
          <Checkbox
            category={categories[i]}
            onClick={() => this.handleCheckboxClick(type, categories[i])}
          />
        </li>
      );
    });
    return checkboxes;
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
            {this.renderCheckboxes('poems', [
              'classic',
              'funny',
              'theworst',
              'erotic'
            ])}
          </ul>
          <ul className="sidebar-element">
            Lyd
            {this.renderCheckboxes('sound', ['c1', 'c2', 'c3', 'c4'])}
          </ul>
          <ul className="sidebar-element">
            Bilde
            {this.renderCheckboxes('image', ['c1', 'c2', 'c3', 'c4'])}
          </ul>
        </div>
      </div>
    );
  }

  handleCheckboxClick(type, kat) {
    const newState = this.state;
    newState[type][kat] = !this.state[type][kat];
    this.setState(newState);
    switch (type) {
      case 'poems':
        this.fetchPoems();
        break;
      case 'image':
        this.fetchPhotos();
        break;
      case 'sound':
        this.fetchSound();
        break;
      default:
        console.log('Nothing here');
    }
  }

  fetchPhotos() {
    // TODO: fetch photos
  }

  fetchSound() {
    // TODO: fetch sound
    new Audio('media/Sound/blues/track_0.mp3').play();
  }

  fetchPoems() {
    const keys = [];
    for (let key in this.state.poems) {
      if (this.state.poems[key] === true) {
        keys.push(key);
      }
    }
    fetch('media/Poems.json')
      .then(res => res.json())
      .then(
        res => {
          let newRes = [];
          for (const key in res) {
            if (keys.indexOf(res[key]['category']) > -1) {
              newRes.push(res[key]);
            }
          }
          this.props.loadData(newRes); // Calls props function from App.js
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
