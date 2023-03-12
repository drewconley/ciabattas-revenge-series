import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_WATER_PICKUP,
  PLACEMENT_TYPE_ICE_PICKUP,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_FIRE_PICKUP,
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.BLUE,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 3, y: 2, type: PLACEMENT_TYPE_HERO },
    { x: 6, y: 4, type: PLACEMENT_TYPE_GOAL },

    { x: 1, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },
    { x: 1, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },

    { x: 2, y: 3, type: PLACEMENT_TYPE_FIRE_PICKUP },
    { x: 3, y: 3, type: PLACEMENT_TYPE_FIRE },
    { x: 4, y: 3, type: PLACEMENT_TYPE_FIRE },
    { x: 5, y: 3, type: PLACEMENT_TYPE_FIRE },

    { x: 3, y: 4, type: PLACEMENT_TYPE_ICE, corner: "TOP_LEFT" },
    { x: 3, y: 5, type: PLACEMENT_TYPE_ICE },
    { x: 4, y: 5, type: PLACEMENT_TYPE_ICE },
    { x: 3, y: 6, type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_LEFT" },
    { x: 5, y: 4, type: PLACEMENT_TYPE_ICE, corner: "TOP_RIGHT" },
    { x: 5, y: 5, type: PLACEMENT_TYPE_ICE },
    { x: 5, y: 6, type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_RIGHT" },
    { x: 4, y: 4, type: PLACEMENT_TYPE_ICE },
    { x: 4, y: 6, type: PLACEMENT_TYPE_ICE },

    { x: 5, y: 2, type: PLACEMENT_TYPE_ICE_PICKUP },

    { x: 7, y: 6, type: PLACEMENT_TYPE_WALL },
    { x: 8, y: 2, type: PLACEMENT_TYPE_FLOUR },
    { x: 6, y: 2, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 7, y: 2, type: PLACEMENT_TYPE_WATER },

    // { x: 5, y: 4, type: PLACEMENT_TYPE_GROUND_ENEMY },
  ],
};

export default level;
