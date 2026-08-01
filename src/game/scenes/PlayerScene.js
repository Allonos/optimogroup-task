import { Scene } from 'phaser';

const START_SKEL_URL = '/spine/start/Ronaldo.skel';
const START_ATLAS_URL = '/spine/start/Ronaldo.atlas';
const BOUNCE_SKEL_URL = '/spine/bouncing/RonaldoBounce.skel';
const BOUNCE_ATLAS_URL = '/spine/bouncing/RonaldoBounce.atlas';
const CATCH_SKEL_URL = '/spine/catching/RonaldoCatching.skel';
const CATCH_ATLAS_URL = '/spine/catching/RonaldoCatching.atlas';
const CATCH_ANIM_NAME = 'dachera';

const MARGIN = 0.55;
const PAN_X = 0;
const BOTTOM_MARGIN = 0.08;

export default class PlayerScene extends Scene {
  constructor() {
    super('PlayerScene');
  }

  preload() {
    this.load.spineBinary('start-skel', START_SKEL_URL);
    this.load.spineAtlas('start-atlas', START_ATLAS_URL, true);
    this.load.spineBinary('bounce-skel', BOUNCE_SKEL_URL);
    this.load.spineAtlas('bounce-atlas', BOUNCE_ATLAS_URL, true);
    this.load.spineBinary('catch-skel', CATCH_SKEL_URL);
    this.load.spineAtlas('catch-atlas', CATCH_ATLAS_URL, true);
  }

  create() {
    const { width, height } = this.scale;

    this.startPlayer = this.add.spine(0, 0, 'start-skel', 'start-atlas');
    this.bouncePlayer = this.add.spine(0, 0, 'bounce-skel', 'bounce-atlas');
    this.catchPlayer = this.add.spine(0, 0, 'catch-skel', 'catch-atlas');

    const startAnimName = this.startPlayer.skeleton.data.animations[0]?.name;
    this.bounceAnimName = this.bouncePlayer.skeleton.data.animations[0]?.name;

    if (startAnimName) {
      this.startPlayer.animationState.setAnimation(0, startAnimName, false);
    }

    const boundsCenterLocalX =
      -this.startPlayer.offsetX + this.startPlayer.width / 2;
    const boundsCenterLocalY =
      -this.startPlayer.offsetY + this.startPlayer.height / 2;
    const feetLocalY = boundsCenterLocalY + this.startPlayer.height / 2;
    const groundY = height * (1 - BOTTOM_MARGIN);

    const fitScale = Math.min(
      width / this.startPlayer.width,
      height / this.startPlayer.height,
    );
    const scale = fitScale * MARGIN;

    this.startPlayer.setScale(scale);
    this.startPlayer.setPosition(
      width / 2 - boundsCenterLocalX * scale + PAN_X + 150,
      groundY - feetLocalY * scale,
    );

    this.bouncePlayer.setScale(scale);
    this.bouncePlayer.setPosition(this.startPlayer.x, this.startPlayer.y);
    this.bouncePlayer.setVisible(false);

    this.catchPlayer.setScale(scale);
    this.catchPlayer.setPosition(this.startPlayer.x, this.startPlayer.y);
    this.catchPlayer.setVisible(false);

    // which player is currently the "live" one on screen - triggerCatch()
    // needs this to know whose transform to copy from
    this.activePlayer = this.startPlayer;
    this.roundEnded = false; // guards against triggerCatch firing twice

    window.startPlayer = this.startPlayer;
    window.bouncePlayer = this.bouncePlayer;
    window.catchPlayer = this.catchPlayer;

    if (startAnimName) {
      this.startPlayer.animationState.addListener({
        complete: () => this.goToBounce(),
      });
    } else {
      this.goToBounce();
    }
  }

  goToBounce() {
    this.bouncePlayer.setScale(
      this.activePlayer.scaleX,
      this.activePlayer.scaleY,
    );
    this.bouncePlayer.setPosition(this.activePlayer.x, this.activePlayer.y);

    this.activePlayer.setVisible(false);
    this.bouncePlayer.setVisible(true);
    this.activePlayer = this.bouncePlayer;

    if (this.bounceAnimName) {
      this.bouncePlayer.animationState.setAnimation(
        0,
        this.bounceAnimName,
        true,
      );
    }
  }

  // Called from React (via PhaserGame) when the round timer ends.
  triggerCatch() {
    if (this.roundEnded) return; // avoid double-trigger (e.g. React StrictMode)
    this.roundEnded = true;

    this.catchPlayer.setScale(
      this.activePlayer.scaleX,
      this.activePlayer.scaleY,
    );
    this.catchPlayer.setPosition(this.activePlayer.x, this.activePlayer.y);

    this.activePlayer.setVisible(false);
    this.catchPlayer.setVisible(true);
    this.activePlayer = this.catchPlayer;

    this.catchPlayer.animationState.setAnimation(0, CATCH_ANIM_NAME, false);
  }
}
