import Sprite from "../object-graphics/Sprite";
import { CELL_SIZE, PLACEMENT_TYPE_WALL } from "../../helpers/consts";

export default function MapCell({ x, y, level, frameCoord }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
      onClick={() => {
        level.addPlacement({
          x: x,
          y: y,
          type: PLACEMENT_TYPE_WALL,
        });
        console.log("CLICKED!", level);

        // level.deletePlacement() {
        //
        // }
      }}
    >
      <Sprite frameCoord={frameCoord} />
    </div>
  );
}
