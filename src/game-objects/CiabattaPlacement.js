import { GroundEnemyPlacement } from "./GroundEnemyPlacement";
import CiabattaBody from "../components/object-graphics/CiabattaBody";
import { TILES } from "../helpers/tiles";
import { CELL_SIZE, PLACEMENT_TYPE_ROAMING_ENEMY } from "../helpers/consts";

const ATTACKS = {
  TACKLE: "TACKLE",
  SPAWN: "SPAWN",
};
const PAIN_FRAMES_LENGTH = 20;
const DEATH_FRAMES_LENGTH = 140;

export class CiabattaPlacement extends GroundEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 40;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround = true;

    this.normalMovesRemaining = 4;
    this.hp = 3;
    this.painFramesRemaining = 0;

    this.currentAttack = null;
    this.deathFramesUntilDisappear = 0;
  }

  tickAttemptAiMove() {
    // Phase 1: Check if we hit the hero -----------------
    this.checkForOverlapWithHero();

    // Phase 2: counters
    if (this.deathFramesUntilDisappear > 0) {
      this.deathFramesUntilDisappear -= 1;
      if (this.deathFramesUntilDisappear === 0) {
        this.level.deletePlacement(this);
      }
      return;
    }
    if (this.painFramesRemaining > 0) {
      this.painFramesRemaining -= 1;
      return;
    }
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }

    // Phase 3: Work on behaviors
    if (this.currentAttack) {
      this.workOnAttackFrame();
      return;
    }

    //Turn if next to a wall
    const direction = this.movingPixelDirection;
    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection();
      return;
    }

    // Next spot is free, so walk there
    if (this.movingPixelsRemaining === 0) {
      this.ticksUntilNextMove = this.tickBetweenMovesInterval;
      this.movingPixelsRemaining = CELL_SIZE;
      this.movingPixelDirection = direction;
      this.updateFacingDirection();
      this.updateWalkFrame();
    }
  }

  onPostMove() {
    // Launch new attack if we are done with normal movement
    if (this.normalMovesRemaining === 0) {
      this.normalMovesRemaining = 4;
      this.startAttack();
      return;
    }
    // Keep moving
    this.normalMovesRemaining -= 1;
  }

  startAttack() {
    // Choose a random next attack
    const possibleNextAttacks = [ATTACKS.SPAWN, ATTACKS.TACKLE];
    const next =
      possibleNextAttacks[
        Math.floor(Math.random() * possibleNextAttacks.length)
      ];

    // Populate current attack slot
    if (next === ATTACKS.TACKLE) {
      this.currentAttack = {
        type: ATTACKS.TACKLE,
        framesRemaining: 120,
        returnToY: this.y,
      };
    }
    if (next === ATTACKS.SPAWN) {
      this.currentAttack = {
        type: ATTACKS.SPAWN,
        framesRemaining: 220,
      };
    }
  }

  workOnAttackFrame() {
    this.currentAttack.framesRemaining -= 1;
    if (this.currentAttack.framesRemaining === 0) {
      this.currentAttack = null;
      return;
    }

    if (this.currentAttack.type === ATTACKS.TACKLE) {
      this.handleTackleAttackFrame();
    }
    if (this.currentAttack.type === ATTACKS.SPAWN) {
      this.handleSpawnAttackFrame();
    }
  }

  handleTackleAttackFrame() {
    const { framesRemaining, returnToY } = this.currentAttack;
    // Teleport to above hero's position
    if (framesRemaining === 119) {
      this.x = this.level.heroRef.x;
      this.y = this.level.heroRef.y - 1;
      if (this.y < 1) {
        this.y = 1;
      }
    }

    // Lunge at the Hero
    if (framesRemaining === 90) {
      this.y = this.y + 1;
    }

    // Return to previous row
    if (framesRemaining === 50) {
      this.y = returnToY;
    }
  }

  handleSpawnAttackFrame() {
    const { framesRemaining } = this.currentAttack;
    if (framesRemaining === 210) {
      // Configure three roaming enemies around the hero
      [
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x,
          y: this.level.heroRef.y + 2,
        },
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x + 2,
          y: this.level.heroRef.y,
        },
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x - 2,
          y: this.level.heroRef.y,
        },
      ]
        .filter((p) => {
          // Remove placements that are out of bounds
          return (
            p.x > 0 &&
            p.x <= this.level.tilesWidth &&
            p.y < this.level.tilesHeight
          );
        })
        .forEach((enemyConfig) => {
          // Add to level
          this.level.addPlacement(enemyConfig);
        });
    }

    // Remove all roaming enemies when the attack is ending
    if (framesRemaining === 1) {
      this.level.placements.forEach((p) => {
        if (p.type === PLACEMENT_TYPE_ROAMING_ENEMY) {
          this.level.deletePlacement(p);
        }
      });
    }
  }

  takesDamage() {
    // Apply pain frames
    this.painFramesRemaining = PAIN_FRAMES_LENGTH;
    this.hp -= 1;

    if (this.hp <= 0) {
      // Start counting death frames
      this.deathFramesUntilDisappear = DEATH_FRAMES_LENGTH;
    }
  }

  getFrame() {
    // Dead skin
    if (this.hp <= 0) {
      return TILES.CIABATTA_DEAD;
    }

    // Flash in pain
    if (this.painFramesRemaining > 0) {
      return TILES.CIABATTA_PAIN;
    }

    // Purple teleporty lunge
    if (this.currentAttack?.type === ATTACKS.TACKLE) {
      return TILES.CIABATTA_TELEPORT;
    }
    // Raise arms when moving or spawning
    if (
      this.currentAttack?.type === ATTACKS.SPAWN ||
      this.movingPixelsRemaining > 0
    ) {
      return TILES.CIABATTA1;
    }

    return TILES.CIABATTA2;
  }

  renderComponent() {
    return <CiabattaBody frameCoord={this.getFrame()} />;
  }
}
