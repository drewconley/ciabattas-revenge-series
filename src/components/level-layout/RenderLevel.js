import styles from "./RenderLevel.module.css";
import { THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useEffect, useState } from "react";
import { LevelState } from "../../classes/LevelState";
import FlourCount from "../hud/FlourCount";
import ClockCount from "../hud/ClockCount";
import LevelCompleteMessage from "../hud/LevelCompleteMessage";
import DeathMessage from "../hud/DeathMessage";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";

export default function RenderLevel() {
  const [level, setLevel] = useState(null);
  const currentLevelId = useRecoilValue(currentLevelIdAtom);

  useEffect(() => {
    // Create and subscribe to state changes
    const levelState = new LevelState(currentLevelId, (newState) => {
      setLevel(newState);
    });

    //Get initial state
    setLevel(levelState.getState());

    //Destroy method when this component unmounts for cleanup
    return () => {
      levelState.destroy();
    };
  }, [currentLevelId]);

  if (!level) {
    return null;
  }

  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`;

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <div
          style={{
            transform: cameraTranslate,
          }}
        >
          <LevelBackgroundTilesLayer level={level} />
          <LevelPlacementsLayer level={level} />
        </div>
      </div>
      <FlourCount level={level} />
      <ClockCount level={level} />
      {level.isCompleted && <LevelCompleteMessage />}
      {level.deathOutcome && <DeathMessage level={level} />}
    </div>
  );
}
