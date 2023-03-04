import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
} from "../helpers/consts";
import { placementFactory } from "./PlacementFactory";
import { GameLoop } from "./GameLoop";
import { DirectionControls } from "./DirectionControls";

export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;
    this.directionControls = new DirectionControls();

    //Start the level!
    this.start();
  }

  start() {
    this.isCompleted = false;
    this.theme = LEVEL_THEMES.BLUE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [
      { x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
      { x: 6, y: 4, type: PLACEMENT_TYPE_GOAL },
      { x: 4, y: 4, type: PLACEMENT_TYPE_WALL },
      { x: 5, y: 2, type: PLACEMENT_TYPE_WALL },
      { x: 6, y: 6, type: PLACEMENT_TYPE_WALL },
      { x: 3, y: 3, type: PLACEMENT_TYPE_FLOUR },
      { x: 4, y: 3, type: PLACEMENT_TYPE_FLOUR },
      { x: 5, y: 3, type: PLACEMENT_TYPE_FLOUR },
    ].map((config) => {
      return placementFactory.createPlacement(config, this);
    });

    // Cache a reference to the hero
    this.heroRef = this.placements.find((p) => p.type === PLACEMENT_TYPE_HERO);

    this.startGameLoop();
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this));
  }

  deletePlacement(placementToRemove) {
    this.placements = this.placements.filter((p) => {
      return p.id !== placementToRemove.id;
    });
  }

  tick() {
    // Check for movement here...
    if (this.directionControls.direction) {
      this.heroRef.controllerMoveRequested(this.directionControls.direction);
    }

    // Call 'tick' on any Placement that wants to update
    this.placements.forEach((placement) => {
      placement.tick();
    });

    //Emit any changes to React
    this.onEmit(this.getState());
  }

  isPositionOutOfBounds(x, y) {
    return (
      x === 0 ||
      y === 0 ||
      x >= this.tilesWidth + 1 ||
      y >= this.tilesHeight + 1
    );
  }

  completeLevel() {
    this.isCompleted = true;
    this.gameLoop.stop();
  }

  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
      isCompleted: this.isCompleted,
    };
  }

  destroy() {
    this.gameLoop.stop();
    this.directionControls.unbind();
  }
}
