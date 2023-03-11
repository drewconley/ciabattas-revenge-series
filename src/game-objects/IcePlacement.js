import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";
import {
  DIRECTION_UP,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_DOWN,
  BODY_SKINS,
  ICE_CORNERS,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_ICE_PICKUP,
} from "../helpers/consts";

const iceTileCornerFramesMap = {
  [ICE_CORNERS.TOP_LEFT]: TILES.ICE_TOP_LEFT,
  [ICE_CORNERS.TOP_RIGHT]: TILES.ICE_TOP_RIGHT,
  [ICE_CORNERS.BOTTOM_LEFT]: TILES.ICE_BOTTOM_LEFT,
  [ICE_CORNERS.BOTTOM_RIGHT]: TILES.ICE_BOTTOM_RIGHT,
};

const iceTileCornerRedirection = {
  TOP_LEFT: {
    [DIRECTION_UP]: DIRECTION_RIGHT,
    [DIRECTION_LEFT]: DIRECTION_DOWN,
  },
  TOP_RIGHT: {
    [DIRECTION_UP]: DIRECTION_LEFT,
    [DIRECTION_RIGHT]: DIRECTION_DOWN,
  },
  BOTTOM_LEFT: {
    [DIRECTION_LEFT]: DIRECTION_UP,
    [DIRECTION_DOWN]: DIRECTION_RIGHT,
  },
  BOTTOM_RIGHT: {
    [DIRECTION_RIGHT]: DIRECTION_UP,
    [DIRECTION_DOWN]: DIRECTION_LEFT,
  },
};

const iceTileCornerBlockedMoves = {
  TOP_LEFT: {
    [DIRECTION_UP]: true,
    [DIRECTION_LEFT]: true,
  },
  TOP_RIGHT: {
    [DIRECTION_UP]: true,
    [DIRECTION_RIGHT]: true,
  },
  BOTTOM_LEFT: {
    [DIRECTION_DOWN]: true,
    [DIRECTION_LEFT]: true,
  },
  BOTTOM_RIGHT: {
    [DIRECTION_DOWN]: true,
    [DIRECTION_RIGHT]: true,
  },
};

export class IcePlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.corner = properties.corner ?? null;
  }

  isSolidForBody(body) {
    const bodyIsBelow = this.y < body.y;
    if (bodyIsBelow && this.corner?.includes("BOTTOM")) {
      return true;
    }
    const bodyIsAbove = this.y > body.y;
    if (bodyIsAbove && this.corner?.includes("TOP")) {
      return true;
    }
    const bodyIsToLeft = this.x > body.x;
    if (bodyIsToLeft && this.corner?.includes("LEFT")) {
      return true;
    }
    const bodyIsToRight = this.x < body.x;
    if (bodyIsToRight && this.corner?.includes("RIGHT")) {
      return true;
    }

    return false;
  }

  blocksMovementDirection(direction) {
    if (this.corner) {
      return iceTileCornerBlockedMoves[this.corner][direction];
    }
    return false;
  }

  autoMovesBodyOnCollide(body) {
    if (
      body.type === PLACEMENT_TYPE_HERO &&
      this.level.inventory.has(PLACEMENT_TYPE_ICE_PICKUP)
    ) {
      return null;
    }

    const possibleRedirects = iceTileCornerRedirection[this.corner];
    if (possibleRedirects) {
      return possibleRedirects[body.movingPixelDirection];
    }
    return body.movingPixelDirection;
  }

  changesHeroSkinOnCollide() {
    if (this.level.inventory.has(PLACEMENT_TYPE_ICE_PICKUP)) {
      return BODY_SKINS.ICE;
    }

    return BODY_SKINS.SCARED;
  }

  renderComponent() {
    const frameCoord = this.corner
      ? iceTileCornerFramesMap[this.corner]
      : TILES.ICE;
    return <Sprite frameCoord={frameCoord} />;
  }
}
