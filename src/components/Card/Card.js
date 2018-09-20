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
    let picture;
    console.log('før alle ting');

    this.props.cardInfo.forEach((a, i) => {
      let category;
      let title;
      let text;
      let audioSource;
      let audiokey;

      console.log(a);
      if (a && i === 0) {
        console.log('is poems');
        category = a.category;
        title = a.title;
        text = a.text;
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
      if (a && i === 1) {
        console.log('is audio');
        audioSource = a;
        audiokey = this.key;
        audio = <audio src={audioSource} controls key={audiokey} />;
      }
      if (a && i === 2) {
        // TO DO: add logic for pictures
      }

      // {statement ? (dette):(eller dette)}
    });
    console.log('kek');
    return (
      <div className="card">
        <div>{poem}</div>
        <div>{audio}</div>
      </div>
    );
  }
}

class Cards extends React.Component {
  /*
* Container for multiple cards
*/

  doEverything(poems, audio /*pictures*/) {
    let test = <div>kek</div>;
    let cards = [];
    poems = shuffleArray(poems);
    audio = shuffleArray(audio);
    /* pictures = shuffleArray(pictures); */
    let numberOfChards = Math.max(poems.lenght, audio.lenght);
    let preCards = [];
    poems.forEach((a, i) => {
      if (!preCards[i]) preCards[i] = [null, null, null];
      preCards[i][0] = a;
    });
    audio.forEach((a, i) => {
      if (!preCards[i]) preCards[i] = [null, null, null];
      preCards[i][1] = a;
    });
    /*pictures.forEach((a, i) => {
      preCards[i][2] = pictures[i];
    }); */

    preCards.forEach((a, i) => {
      test = <div>oh no...</div>;
      console.log('hei');
      cards.push(
        <Card cardInfo={a} key={i} />
        //<Card category={a[0].category} title={a[0].title} text={a[0].text} key={i} src={a[1]} />
      );
      console.log(cards);
    });
    return cards;
  }

  render() {
    return (
      <div>
        <div className="card-wrapper">
          {this.doEverything(this.props.poems, this.props.audio)}
        </div>
      </div>
    );
  }
}

export default Cards;
