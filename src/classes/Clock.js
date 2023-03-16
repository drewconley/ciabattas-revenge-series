import { DEATH_TYPE_CLOCK } from "../helpers/consts";

const TIME_PER_TICK = 16.6;
const WARNING_SOUND_SECONDS = 10;

export class Clock {
  constructor(secondsRemaining, level) {
    this.secondsRemaining = secondsRemaining;
    this.level = level;
    this.msRemainingInSecond = 1000;
  }

  tick() {
    this.msRemainingInSecond -= TIME_PER_TICK;
    if (this.msRemainingInSecond <= 0) {
      this.msRemainingInSecond = 1000;
      this.secondsRemaining -= 1;

      //Trigger things based on second change
      // Lose if the clock hits 0
      if (this.secondsRemaining <= 0) {
        this.level.setDeathOutcome(DEATH_TYPE_CLOCK);
        return;
      }

      // Warning sound effects!
      if (this.secondsRemaining <= WARNING_SOUND_SECONDS) {
        // SFX Goes here...
        console.log("BINK!");
      }
    }
  }
}
