import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.GREEN,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
    { x: 6, y: 4, type: PLACEMENT_TYPE_GOAL },
    { x: 3, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 5, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 5, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 4, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 5, y: 2, type: PLACEMENT_TYPE_WALL },
    { x: 6, y: 6, type: PLACEMENT_TYPE_WALL },
    { x: 3, y: 3, type: PLACEMENT_TYPE_FLOUR },
    { x: 4, y: 1, type: PLACEMENT_TYPE_LOCK, color: "BLUE" },
    { x: 4, y: 3, type: PLACEMENT_TYPE_LOCK, color: "GREEN" },
    { x: 1, y: 1, type: PLACEMENT_TYPE_KEY, color: "BLUE" },
    { x: 1, y: 3, type: PLACEMENT_TYPE_KEY, color: "GREEN" },
  ],
};

export default level;
