import Sprite from "../object-graphics/Sprite";
import { CELL_SIZE } from "../../helpers/consts";

export default function MapCell({ level, x, y, frameCoord }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
      onClick={() => {
        if (level.enableEditing) {
          level.addPlacement({
            x: x,
            y: y,
            type: level.editModePlacementType,
          });
        }
      }}
    >
      <Sprite frameCoord={frameCoord} />
    </div>
  );
}
