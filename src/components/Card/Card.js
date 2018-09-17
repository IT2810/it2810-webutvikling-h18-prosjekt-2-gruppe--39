import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        Kategori
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div />;
  }
}

export default Cards;
