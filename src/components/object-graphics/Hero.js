import Sprite from "./Sprite";
import { TILES } from "../../helpers/tiles";
import styles from "./Hero.module.css";

export default function Hero({ frameCoord, yTranslate }) {
  return (
    <div className={styles.hero}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div
        className={styles.heroBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
    </div>
  );
}
