import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
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

export default Card;
