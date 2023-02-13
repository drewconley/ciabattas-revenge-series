import { CELL_SIZE } from "../../helpers/consts";
import Sprite from "../object-graphics/Sprite";

export default function LevelPlacementsLayer({ level }) {
  return level.placements.map((placement) => {
    // Wrap each Sprite in a positioned div
    const x = placement.x * CELL_SIZE + "px";
    const y = placement.y * CELL_SIZE + "px";
    const style = {
      position: "absolute",
      transform: `translate3d(${x}, ${y}, 0)`,
    };

    return (
      <div key={placement.id} style={style}>
        <Sprite frameCoord={placement.frameCoord} />
      </div>
    );
  });
}
