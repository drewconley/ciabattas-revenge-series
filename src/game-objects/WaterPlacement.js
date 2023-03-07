import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { PLACEMENT_TYPE_HERO } from "../helpers/consts";

export class WaterPlacement extends Placement {
  damagesBodyOnCollide(body) {
    return body.type === PLACEMENT_TYPE_HERO;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.WATER1} />;
  }
}
