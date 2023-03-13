import { Placement } from "./Placement";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";
import { BODY_SKINS, PLACEMENT_TYPE_HERO } from "../helpers/consts";

export class ThiefPlacement extends Placement {
  stealsInventoryOnCollide(body) {
    return body.type === PLACEMENT_TYPE_HERO;
  }

  changesHeroSkinOnCollide() {
    return BODY_SKINS.SCARED;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.THIEF} />;
  }
}
