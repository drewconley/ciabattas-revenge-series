import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class GoalPlacement extends Placement {
  renderComponent() {
    return <Sprite frameCoord={TILES.GOAL_DISABLED} />;
  }
}
