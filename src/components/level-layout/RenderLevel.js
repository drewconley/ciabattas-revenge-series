import styles from "./RenderLevel.module.css";
import { THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useEffect, useState } from "react";
import { LevelState } from "../../classes/LevelState";
import FlourCount from "../hud/FlourCount";

export default function RenderLevel() {
  const [level, setLevel] = useState(null);

  useEffect(() => {
    // Create and subscribe to state changes
    const levelState = new LevelState("1-1", (newState) => {
      setLevel(newState);
    });

    //Get initial state
    setLevel(levelState.getState());

    //Destroy method when this component unmounts for cleanup
    return () => {
      levelState.destroy();
    };
  }, []);

  if (!level) {
    return null;
  }

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
      <FlourCount level={level} />
    </div>
  );
}
