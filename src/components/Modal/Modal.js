import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={this.props.callback}>
        <div className="modal-content">
          <div className="center">{this.props.poem}</div>
          <div className="center">{this.props.audio}</div>
          <div className="center">{this.props.image}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
