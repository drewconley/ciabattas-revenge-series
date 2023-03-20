import Sprite from "./Sprite";
import styles from "./CiabattaBody.module.css";

export default function CiabattaBody({ frameCoord, yTranslate }) {
  return (
    <div className={styles.ciabatta}>
      <div
        className={styles.ciabattaBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={48} />
      </div>
    </div>
  );
}
