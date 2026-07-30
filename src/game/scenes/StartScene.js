import { Scene } from 'phaser';

const SKEL_URL = '/spine/start/Ronaldo.skel';
const ATLAS_URL = '/spine/start/Ronaldo.atlas';

export default class StartScene extends Scene {
  constructor() {
    super('StartScene');
  }

  preload() {
    console.log(
      '%c[StartScene] preload() called',
      'background: red; color: white; font-size: 16px',
    );
    this.load.spineBinary('start-skel', SKEL_URL);
    this.load.spineAtlas('start-atlas', ATLAS_URL, true);
  }

  create() {
    const { width, height } = this.scale;

    const player = this.add.spine(0, 0, 'start-skel', 'start-atlas');

    const boundsCenterLocalX = -player.offsetX + player.width / 2;
    const boundsCenterLocalY = -player.offsetY + player.height / 2;

    const MARGIN = 0.55;
    const PAN_X = 0;
    const BOTTOM_MARGIN = 0.08;

    const fitScale = Math.min(width / player.width, height / player.height);
    const scale = fitScale * MARGIN;

    const feetLocalY = boundsCenterLocalY + player.height / 2;
    const groundY = height * (1 - BOTTOM_MARGIN);

    player.setScale(scale);
    player.setPosition(
      width / 2 - boundsCenterLocalX * scale + PAN_X + 150,
      groundY - feetLocalY * scale,
    );

    this.player = player;
    window.player = player;

    const skeletonData = player.skeleton.data;
    const animationNames = skeletonData.animations.map((a) => a.name);
    console.log('start animations:', animationNames);
    if (animationNames.length > 0) {
      player.animationState.setAnimation(0, animationNames[0], true);
    }
  }
}
