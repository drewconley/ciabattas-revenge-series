import {
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_FLOUR,
} from "../helpers/consts";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GoalPlacement } from "../game-objects/GoalPlacement";
import { WallPlacement } from "../game-objects/WallPlacement";
import { FlourPlacement } from "../game-objects/FlourPlacement";

class PlacementFactory {
  createPlacement(config, level) {
    const instance = this.getInstance(config, level);
    // make ID here...
    return instance;
  }

  getInstance(config, level) {
    switch (config.type) {
      case PLACEMENT_TYPE_HERO:
        return new HeroPlacement(config, level);
      case PLACEMENT_TYPE_GOAL:
        return new GoalPlacement(config, level);
      case PLACEMENT_TYPE_WALL:
        return new WallPlacement(config, level);
      case PLACEMENT_TYPE_FLOUR:
        return new FlourPlacement(config, level);
      default:
        console.warn("NO TYPE FOUND", config.type);
        return null;
    }
  }
}

export const placementFactory = new PlacementFactory();
