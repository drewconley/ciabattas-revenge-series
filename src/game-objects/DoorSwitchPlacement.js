import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class DoorSwitchPlacement extends Placement {
  switchesDoorsOnCollide(body) {
    return body.interactsWithGround;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.PURPLE_BUTTON} />;
  }
}
