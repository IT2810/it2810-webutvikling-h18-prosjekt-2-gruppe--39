import React from 'react';
import './Card.css';

// fully random by @BetonMAN
const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

class Card extends React.Component {
  // Todo: Make and use Card Class for use in Cards

  render() {
    return (
      <div className="card">
        <h3>Kategori: {this.props.category}</h3>
        <div className="container">
          <h4>
            <b>{this.props.title}</b>
          </h4>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class Cards extends React.Component {
  /*
* Container for multiple cards
*/

  renderPoems(poems) {
    let cards = [];
    poems = shuffleArray(poems);
    poems.forEach((p, i) => {
      cards.push(
        <Card category={p.category} title={p.title} text={p.text} key={i} />
      );
    });
    return cards;
  }

  renderAudio(audios) {
    let audioArr = [];
    audios = shuffleArray(audios);
    audios.forEach((a, i) => {
      audioArr.push(<audio src={a} controls key={i} />);
    });
    return audioArr;
  }

  render() {
    return (
      <div>
        <div className="card-wrapper">{this.renderPoems(this.props.poems)}</div>
        <div>{this.renderAudio(this.props.audio)}</div>
      </div>
    );
  }
}

export default Cards;
