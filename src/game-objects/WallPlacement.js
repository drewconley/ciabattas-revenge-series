import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { THEME_TILES_MAP } from "../helpers/consts";

export class WallPlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    const wallTileCoord = THEME_TILES_MAP[this.level.theme].WALL;
    return <Sprite frameCoord={wallTileCoord} />;
  }
}
