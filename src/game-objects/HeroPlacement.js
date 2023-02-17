import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class HeroPlacement extends Placement {
  renderComponent() {
    return <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />;
  }
}
