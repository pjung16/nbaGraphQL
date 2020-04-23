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

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/player/:id" children={<PlayerProfile />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/player/:id" children={<Modal />} />}
    </div>
  );
}

export default ModalSwitch;