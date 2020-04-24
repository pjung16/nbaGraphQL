import React from "react";
import {
  useHistory,
  // useParams
} from "react-router-dom";
import PlayerProfile from '../PlayerProfile/PlayerProfile';

function Modal() {
  let history = useHistory();
  // let { id } = useParams();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          top: 25,
          left: "10%",
          right: "10%",
          border: "2px solid #444"
        }}
      >
        <PlayerProfile />
      </div>
    </div>
  );
}

export default Modal;