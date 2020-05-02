import React from "react";
import {
  useHistory,
  // useParams
} from "react-router-dom";
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import './Modal.css'

function Modal() {
  let history = useHistory();
  // let { id } = useParams();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <PlayerProfile />
      </div>
    </div>
  );
}

export default Modal;