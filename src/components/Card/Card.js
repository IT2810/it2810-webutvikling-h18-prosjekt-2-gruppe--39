import React from 'react';
import './Card.css';

class Card extends React.Component {
  // Todo: Make and use Card Class for use in Cards
  constructor(props) {
    super(props);
  }

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

  constructor(props) {
    super(props);
  }

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
    this.props.content.forEach(c => console.log(c));
    return <div>{this.renderPoems(this.props.content)}</div>;
  }
}

export default Cards;
