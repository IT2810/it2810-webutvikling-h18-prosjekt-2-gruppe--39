import React from 'react';
import './Card.css';
import Modal from '../Modal/Modal';

// fully random by @BetonMAN
const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

class Card extends React.Component {
  // Todo: Make and use Card Class for use in Cards

  constructor(props) {
    super(props);

    this.onCardPress = this.onCardPress.bind(this);

    this.state = {
      expand: false
    };
  }

  onCardPress() {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    let poem, audio, image;

    let category, title, text, audioSource, audiokey, imageSvg;
    this.props.cardInfo.forEach((info, i) => {
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
        imageSvg = info;
        image = (
          <div
            className="svg-container"
            dangerouslySetInnerHTML={{ __html: imageSvg }}
          />
        );
      }
    });

    return (
      <div>
        {this.state.expand ? (
          <div>
            <Modal
              audio={audio}
              poem={poem}
              image={image}
              callback={this.onCardPress}
            />
          </div>
        ) : (
          <div className="card" onClick={this.onCardPress}>
            <div>{title}</div>
          </div>
        )}
      </div>
    );
  }
}

{
  /*<div>{poem}</div>
<div>{audio}</div>
<div>{image}</div>*/
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
