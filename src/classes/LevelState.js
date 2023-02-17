import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import { placementFactory } from "./PlacementFactory";

export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;

    //Start the level!
    this.start();
  }

  start() {
    this.theme = LEVEL_THEMES.BLUE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [
      { id: 0, x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
      { id: 1, x: 6, y: 4, type: PLACEMENT_TYPE_GOAL },
    ].map((config) => {
      return placementFactory.createPlacement(config, this);
    });
  }

  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
    };
  }

  destroy() {
    // Tear down the level.
  }
}
