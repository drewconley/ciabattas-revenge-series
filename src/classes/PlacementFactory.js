import { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_GOAL } from "../helpers/consts";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GoalPlacement } from "../game-objects/GoalPlacement";

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
      default:
        console.warn("NO TYPE FOUND", config.type);
        return null;
    }
  }
}

export const placementFactory = new PlacementFactory();
