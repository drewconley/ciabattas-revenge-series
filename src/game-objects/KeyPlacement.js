import { Placement } from "./Placement";
import { LOCK_KEY_COLORS } from "../helpers/consts";
import ElevatedSprite from "../components/object-graphics/ElevatedSprite";
import { TILES } from "../helpers/tiles";

export class KeyPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
  }

  addsItemToInventoryOnCollide() {
    return `KEY_${this.color}`;
  }

  renderComponent() {
    const frameCoord =
      this.color === LOCK_KEY_COLORS.BLUE ? TILES.BLUE_KEY : TILES.GREEN_KEY;
    return <ElevatedSprite frameCoord={frameCoord} />;
  }
}
