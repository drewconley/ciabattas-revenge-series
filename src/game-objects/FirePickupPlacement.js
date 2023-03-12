import { Placement } from "./Placement";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";

export class FirePickupPlacement extends Placement {
  addsItemToInventoryOnCollide() {
    return this.type;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.FIRE_PICKUP} />;
  }
}
