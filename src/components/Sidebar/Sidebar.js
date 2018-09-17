import React from 'react';
import './Sidebar.css';

function Checkbox(props) {
  return (
    <label>
      {props.category}
      <input onClick={props.onClick} type="radio" name={props.name} />
    </label>
  );
}

class Sidebar extends React.Component {
  renderCheckboxes(type, categories) {
    let checkboxes = [];
    categories.forEach((c, i) => {
      checkboxes.push(
        <li key={i}>
          <Checkbox
            name={type}
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
              'Classic',
              'Funny',
              'Theworst',
              'Erotic'
            ])}
          </ul>

          <ul className="sidebar-element">
            Lyd
            {this.renderCheckboxes('sound', [
              'Blues',
              'Classic',
              'Noice',
              'Memes'
            ])}
          </ul>
          <ul className="sidebar-element">
            Bilde
            {this.renderCheckboxes('image', [
              'Flags',
              'Horror',
              'Memes',
              'StarWars'
            ])}
          </ul>
        </div>
      </div>
    );
  }

  handleCheckboxClick(type, kat) {
    switch (type) {
      case 'poems':
        this.fetchPoems(kat);
        break;
      case 'image':
        this.fetchPhotos();
        break;
      case 'sound':
        this.fetchSound(kat);
        break;
      default:
        console.log('Nothing here');
    }
  }

  fetchPhotos() {
    // TODO: fetch photos
  }

  fetchSound(kat) {
    let audioURLs = [];
    for (let i = 0; i < 4; i++) {
      audioURLs.push(`media/Sound/${kat.toLowerCase()}/track_${i}.mp3`);
    }
    try {
      this.props.loadAudio(audioURLs);
    } catch (e) {
      console.error(e);
    }
  }

  fetchPoems(kat) {
    fetch('media/Poems.json')
      .then(res => res.json())
      .then(
        res => {
          let newRes = [];
          for (const key in res) {
            if (res[key]['category'] === kat) {
              newRes.push(res[key]);
            }
          }
          this.props.loadPoems(newRes); // Calls props function from App.js
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
