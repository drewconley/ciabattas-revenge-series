import { TILES } from "../helpers/tiles";
import Body from "../components/object-graphics/Body";
import { DIRECTION_LEFT, DIRECTION_RIGHT } from "../helpers/consts";
import { BodyPlacement } from "./BodyPlacement";

export class GroundEnemyPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 28;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
  }

  tickAttemptAiMove() {
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
  }

  internalMoveRequested(direction) {
    //Attempt to start moving
    if (this.movingPixelsRemaining > 0) {
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection();
      return;
    }

    //Start the move
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  switchDirection() {
    this.movingPixelDirection =
      this.movingPixelDirection === DIRECTION_LEFT
        ? DIRECTION_RIGHT
        : DIRECTION_LEFT;
  }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? TILES.ENEMY_LEFT
        : TILES.ENEMY_RIGHT;
    return (
      <Body
        frameCoord={frameCoord}
        yTranslate={this.getYTranslate()}
        showShadow={true}
      />
    );
  }
}
