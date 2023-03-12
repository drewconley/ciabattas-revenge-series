import { TILES } from "../helpers/tiles";
import { PlacementTypeAnimationFrames } from "./PlacementTypeAnimationFrames";

const WATER_SEQUENCE = [TILES.WATER1, TILES.WATER2];
const WATER_ANIMATION_SPEED = 30;

const FIRE_SEQUENCE = [TILES.FIRE1, TILES.FIRE2, TILES.FIRE3];
const FIRE_ANIMATION_SPEED = 30;

export class LevelAnimatedFrames {
  constructor() {
    this.waterFrames = new PlacementTypeAnimationFrames(
      WATER_SEQUENCE,
      WATER_ANIMATION_SPEED
    );
    this.fireFrames = new PlacementTypeAnimationFrames(
      FIRE_SEQUENCE,
      FIRE_ANIMATION_SPEED
    );
  }

  // Public method for progressing in animation
  tick() {
    this.waterFrames.tick();
    this.fireFrames.tick();
  }

  // Public getters for knowing which frame is current
  get waterFrame() {
    return this.waterFrames.activeFrame;
  }

  get fireFrame() {
    return this.fireFrames.activeFrame;
  }
}
