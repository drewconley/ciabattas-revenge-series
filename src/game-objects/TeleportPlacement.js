import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { BODY_SKINS, PLACEMENT_TYPE_TELEPORT } from "../helpers/consts";

export class TeleportPlacement extends Placement {
  changesHeroSkinOnCollide() {
    return BODY_SKINS.TELEPORT;
  }

  teleportsToPositionOnCollide(body) {
    if (body.interactsWithGround) {
      // Get all teleports
      const allTeleports = this.level.placements.filter((p) => {
        return p.type === PLACEMENT_TYPE_TELEPORT;
      });

      //Find the next teleport
      if (allTeleports.length > 1) {
        const myIndex = allTeleports.findIndex((p) => p.id === this.id);
        const next = allTeleports[myIndex + 1] ?? allTeleports[0];
        return {
          x: next.x,
          y: next.y,
        };
      }
    }
    return null;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.TELEPORT1} />;
  }
}
