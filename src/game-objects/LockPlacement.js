import { Placement } from "./Placement";
import { LOCK_KEY_COLORS } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";

export class LockPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
  }

  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    let frameCoord =
      this.color === LOCK_KEY_COLORS.BLUE ? TILES.BLUE_LOCK : TILES.GREEN_LOCK;
    // if (this.collectInFrames > 0) {
    //   frameCoord = TILES.UNLOCKED_LOCK;
    // }
    return <Sprite frameCoord={frameCoord} />;
  }
}
