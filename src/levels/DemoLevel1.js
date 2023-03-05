import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.GREEN,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
    { x: 6, y: 4, type: PLACEMENT_TYPE_GOAL },
    { x: 4, y: 4, type: PLACEMENT_TYPE_WALL },
    { x: 5, y: 2, type: PLACEMENT_TYPE_WALL },
    { x: 6, y: 6, type: PLACEMENT_TYPE_WALL },
    { x: 3, y: 3, type: PLACEMENT_TYPE_FLOUR },
    { x: 4, y: 3, type: PLACEMENT_TYPE_FLOUR },
    { x: 5, y: 3, type: PLACEMENT_TYPE_FLOUR },
  ],
};

export default level;
