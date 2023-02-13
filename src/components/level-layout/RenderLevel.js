import styles from "./RenderLevel.module.css";
import { LEVEL_THEMES, THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";

export default function RenderLevel() {
  const level = {
    theme: LEVEL_THEMES.YELLOW,
    tilesWidth: 8,
    tilesHeight: 8,

    placements: [
      // "Level 0"
      // { id: 0, x: 0, y: 0, frameCoord: "0x2" },
      // { id: 1, x: 1, y: 1, frameCoord: "0x2" },
      // { id: 2, x: 2, y: 2, frameCoord: "0x2" },
      // { id: 3, x: 3, y: 3, frameCoord: "0x2" },
      // { id: 4, x: 4, y: 4, frameCoord: "0x2" },
      // { id: 5, x: 5, y: 5, frameCoord: "0x2" },
      // { id: 6, x: 6, y: 6, frameCoord: "0x2" },
      // { id: 7, x: 7, y: 7, frameCoord: "0x2" },

      // Level '1'
      // { id: 0, x: 0, y: 0, frameCoord: "0x2" },
      // { id: 1, x: 4, y: 2, frameCoord: "0x2" },
      // { id: 2, x: 2, y: 2, frameCoord: "0x2" },
      // { id: 3, x: 7, y: 3, frameCoord: "0x2" },
      // { id: 4, x: 2, y: 9, frameCoord: "0x2" },
      // { id: 5, x: 3, y: 5, frameCoord: "0x2" },
      // { id: 6, x: 1, y: 6, frameCoord: "0x2" },
      // { id: 7, x: 7, y: 7, frameCoord: "0x2" },
      // { id: 8, x: 9, y: 7, frameCoord: "0x2" },

      //Level '2'
      { id: 0, x: 2, y: 2, frameCoord: "0x2" },
      { id: 1, x: 2, y: 4, frameCoord: "0x2" },
      { id: 2, x: 2, y: 6, frameCoord: "0x2" },
      { id: 3, x: 2, y: 8, frameCoord: "0x2" },
      { id: 4, x: 4, y: 2, frameCoord: "0x2" },
      { id: 5, x: 4, y: 4, frameCoord: "0x2" },
      { id: 6, x: 4, y: 6, frameCoord: "0x2" },
      { id: 7, x: 4, y: 8, frameCoord: "0x2" },
      { id: 8, x: 6, y: 2, frameCoord: "0x2" },
      { id: 9, x: 6, y: 4, frameCoord: "0x2" },
      { id: 10, x: 6, y: 6, frameCoord: "0x2" },
      { id: 11, x: 6, y: 8, frameCoord: "0x2" },
      { id: 12, x: 8, y: 2, frameCoord: "0x2" },
      { id: 13, x: 8, y: 4, frameCoord: "0x2" },
      { id: 14, x: 8, y: 6, frameCoord: "0x2" },
      { id: 15, x: 8, y: 8, frameCoord: "0x2" },
      { id: 16, x: 7, y: 8, frameCoord: "0x2" },
    ],
  };

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementsLayer level={level} />
      </div>
    </div>
  );
}
