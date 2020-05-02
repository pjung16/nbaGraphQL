import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from '../Home/Home';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import Modal from '../Modal/Modal';

function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/player/:id" children={<PlayerProfile />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/player/:id" children={<Modal />} />}
    </>
  );
}

export default ModalSwitch;