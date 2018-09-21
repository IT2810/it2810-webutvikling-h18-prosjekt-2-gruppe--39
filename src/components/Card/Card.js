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
    let poem;
    let audio;
    let image;

    this.props.cardInfo.forEach((info, i) => {
      let category;
      let title;
      let text;
      let audioSource;
      let audiokey;
      let imageSvg;

      if (info && i === 0) {
        category = info.category;
        title = info.title;
        text = info.text;
        poem = (
          <div>
            <h3>{category}</h3>{' '}
            <div className="container">
              <h4>
                {' '}
                <b>{title}</b>{' '}
              </h4>
              <p>{text}</p>
            </div>
          </div>
        );
      }
      if (info && i === 1) {
        audioSource = info;
        audiokey = this.key;
        audio = <audio src={audioSource} controls key={audiokey} />;
      }
      if (info && i === 2) {
        console.log(info);
        imageSvg = info;
        image = <div dangerouslySetInnerHTML={{ __html: imageSvg }}> </div>;
      }
    });

    return (
      <div className="card">
        <div>{poem}</div>
        <div>{audio}</div>
        <div>{image}</div>
      </div>
    );
  }
}

class Cards extends React.Component {
  /*
* Container for multiple cards
*/

  generateCards(poems, audio, images) {
    let cards = [];
    poems = shuffleArray(poems);
    audio = shuffleArray(audio);
    images = shuffleArray(images);

    let preCards = [];
    poems.forEach((poem, i) => {
      if (!preCards[i]) preCards[i] = [null, null, null];
      preCards[i][0] = poem;
    });
    audio.forEach((sound, i) => {
      if (!preCards[i]) preCards[i] = [null, null, null];
      preCards[i][1] = sound;
    });
    images.forEach((image, i) => {
      if (!preCards[i]) preCards[i] = [null, null, null];
      preCards[i][2] = image;
    });

    preCards.forEach((card, i) => {
      cards.push(<Card cardInfo={card} key={i} />);
    });
    return cards;
  }

  render() {
    return (
      <div>
        <div className="card-wrapper">
          {this.generateCards(
            this.props.poems,
            this.props.audio,
            this.props.images
          )}
        </div>
      </div>
    );
  }
}

export default Cards;
