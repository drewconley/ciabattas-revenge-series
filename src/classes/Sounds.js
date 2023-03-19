import { Howl } from "howler";

export const SFX = {
  COLLECT: "COLLECT",
  WIN: "WIN",
  TELEPORT: "TELEPORT",
};

const SFX_FILES = {
  [SFX.COLLECT]: "/sfx/collect.mp3",
  [SFX.WIN]: "/sfx/win.mp3",
  [SFX.TELEPORT]: "/sfx/teleport.mp3",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.sfxVolume = 0.5;
  }

  init() {
    Object.keys(SFX_FILES).forEach((key) => {
      const file = SFX_FILES[key];
      this.howls[key] = new Howl({
        src: [file],
      });
    });
  }

  playSfx(key) {
    // Reference our sound in memory
    const howl = this.howls[key];

    // Play it with current volume setting
    howl.volume(this.sfxVolume);
    howl.play();
  }
}

const soundsManager = new Sounds();

export default soundsManager;
