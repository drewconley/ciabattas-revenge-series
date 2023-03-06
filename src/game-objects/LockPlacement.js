import { Placement } from "./Placement";
import { LOCK_KEY_COLORS } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";

export class LockPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
    this.collectInFrames = 0;
  }

  isSolidForBody(_body) {
    return true;
  }

  tick() {
    if (this.collectInFrames > 0) {
      this.collectInFrames -= 1;
      if (this.collectInFrames === 0) {
        this.level.deletePlacement(this);
      }
    }
  }

  canBeUnlocked() {
    const requiredKey = `KEY_${this.color}`;
    return this.level.inventory.has(requiredKey);
  }

  unlock() {
    if (this.collectInFrames > 0) {
      return;
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    let frameCoord =
      this.color === LOCK_KEY_COLORS.BLUE ? TILES.BLUE_LOCK : TILES.GREEN_LOCK;
    if (this.collectInFrames > 0) {
      frameCoord = TILES.UNLOCKED_LOCK;
    }
    return <Sprite frameCoord={frameCoord} />;
  }
}
