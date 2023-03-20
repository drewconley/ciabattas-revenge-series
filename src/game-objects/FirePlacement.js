import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import {
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_FIRE_PICKUP,
  BODY_SKINS,
  PLACEMENT_TYPE_CIABATTA,
} from "../helpers/consts";

export class FirePlacement extends Placement {
  damagesBodyOnCollide(body) {
    const { inventory } = this.level;
    if (
      body.type === PLACEMENT_TYPE_HERO &&
      !inventory.has(PLACEMENT_TYPE_FIRE_PICKUP)
    ) {
      return this.type;
    }

    if (body.type === PLACEMENT_TYPE_CIABATTA) {
      return this.type;
    }

    return null;
  }

  changesHeroSkinOnCollide() {
    return BODY_SKINS.FIRE;
  }

  renderComponent() {
    const fireFrame = this.level.animatedFrames.fireFrame;
    return <Sprite frameCoord={fireFrame} />;
  }
}
