import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class WaterPickupPlacement extends Placement {
  addsItemToInventoryOnCollide() {
    return this.type;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.WATER_PICKUP} />;
  }
}
