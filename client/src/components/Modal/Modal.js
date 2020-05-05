import React from "react";
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import './Modal.css'

function Modal() {

  return (
    <div className="modal-container">
      <div className="modal">
        <PlayerProfile />
      </div>
    </div>
  );
}

export default Modal;