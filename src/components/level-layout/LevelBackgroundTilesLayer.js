import MapCell from "./MapCell";
import { THEME_TILES_MAP } from "../../helpers/consts";

export default function LevelBackgroundTilesLayer({ level }) {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;
  const tiles = THEME_TILES_MAP[level.theme];

  function getBackgroundTile(x, y) {
    if (x === 0) {
      return tiles.LEFT;
    }
    if (x === widthWithWalls) {
      return tiles.RIGHT;
    }
    if (y === 0) {
      return tiles.TOP;
    }
    if (y === heightWithWalls) {
      return tiles.BOTTOM;
    }
    return tiles.FLOOR;
  }

  let canvases = [];
  for (let y = 0; y <= heightWithWalls; y++) {
    for (let x = 0; x <= widthWithWalls; x++) {
      // Skip Bottom Left and Bottom Right for intentional blank tiles in those corners
      if (y === heightWithWalls) {
        if (x === 0 || x === widthWithWalls) {
          continue;
        }
      }

      // add a cell to the map
      canvases.push(
        <MapCell
          key={`${x}_${y}`}
          level={level}
          x={x}
          y={y}
          frameCoord={getBackgroundTile(x, y)}
        />
      );
    }
  }

  return <div>{canvases}</div>;
}
