import React from 'react';
import './Card.css';

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
    poems.forEach((p, i) => {
      cards.push(
        <Card category={p.category} title={p.title} text={p.text} key={i} />
      );
    });
    return cards;
  }

  render() {
    return (
      <div className="card-wrapper">{this.renderPoems(this.props.content)}</div>
    );
  }
}

export default Cards;
