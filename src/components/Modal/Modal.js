import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    window.onkeydown = evt => {
      evt = evt || window.event;
      let isEscape = false;
      if ('key' in evt) {
        isEscape = evt.key === 'Escape' || evt.key === 'Esc';
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) this.props.callback();
    };

    return (
      <div className="modal">
        <div className="modal-content">
          <span onClick={this.props.callback}>
            <div className="center">{this.props.poem}</div>
            <div className="center">{this.props.image}</div>
          </span>
          <span>
            <div className="center">{this.props.audio}</div>
          </span>
        </div>
      </div>
    );
  }
}

export default Modal;
