import { Placement } from "./Placement";
import Hero from "../components/object-graphics/Hero";
import { DIRECTION_RIGHT, directionUpdateMap } from "../helpers/consts";

export class HeroPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = DIRECTION_RIGHT;
  }

  tick() {
    this.tickMovingPixelProgress();
  }

  tickMovingPixelProgress() {
    if (this.movingPixelsRemaining === 0) {
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    //Update my x/y!
    const { x, y } = directionUpdateMap[this.movingPixelDirection];
    this.x += x;
    this.y += y;
  }

  renderComponent() {
    return <Hero />;
  }
}
