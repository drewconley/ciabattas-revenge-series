import { LEVEL_THEMES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

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
      { id: 0, x: 2, y: 2, frameCoord: TILES.ICE_PICKUP },
      { id: 1, x: 2, y: 4, frameCoord: TILES.WATER_PICKUP },
      { id: 2, x: 2, y: 6, frameCoord: TILES.FIRE_PICKUP },
      { id: 3, x: 7, y: 2, frameCoord: TILES.GREEN_KEY },
      { id: 4, x: 7, y: 4, frameCoord: TILES.BLUE_LOCK },
      { id: 5, x: 7, y: 6, frameCoord: TILES.BULLET },
    ];

    setTimeout(() => {
      this.placements = [
        ...this.placements,
        { id: 6, x: 5, y: 5, frameCoord: TILES.BULLET },
      ];
      this.onEmit(this.getState());
    }, 1000);
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
