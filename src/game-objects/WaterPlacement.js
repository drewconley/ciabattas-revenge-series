import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import {
  BODY_SKINS,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "../helpers/consts";

export class WaterPlacement extends Placement {
  changesHeroSkinOnCollide() {
    return BODY_SKINS.WATER;
  }

  isSolidForBody(body) {
    return body.turnsAroundAtWater ?? false;
  }

  damagesBodyOnCollide(body) {
    const { inventory } = this.level;
    return (
      body.type === PLACEMENT_TYPE_HERO &&
      !inventory.has(PLACEMENT_TYPE_WATER_PICKUP)
    );
  }

  renderComponent() {
    const waterFrame = this.level.animatedFrames.waterFrame;
    return <Sprite frameCoord={waterFrame} />;
  }
}
