import { Scene } from 'phaser';
import Phaser from 'phaser';

const SKEL_URL = '/spine/beach/PliajjjjiAxxxalii1.skel';
const ATLAS_URL = '/spine/beach/PliajjjjiAxxxalii1.atlas';

export default class BeachScene extends Scene {
  constructor() {
    super('BeachScene');
  }

  preload() {
    this.load.spineBinary('beach-skel', SKEL_URL);
    this.load.spineAtlas('beach-atlas', ATLAS_URL, false);
  }

  create() {
    const { width, height } = this.scale;

    const beach = this.add.spine(0, 0, 'beach-skel', 'beach-atlas');

    const boundsCenterLocalX = -beach.offsetX + beach.width / 2;
    const boundsCenterLocalY = -beach.offsetY + beach.height / 2;

    const EXTRA_ZOOM = 1.1;
    const PAN_X = 0;
    const PAN_Y = -20;

    const coverScale = Math.max(width / beach.width, height / beach.height);
    const scale = coverScale * EXTRA_ZOOM;

    const overhangX = Math.max(0, (beach.width * scale - width) / 2);
    const overhangY = Math.max(0, (beach.height * scale - height) / 2);

    const panX = Phaser.Math.Clamp(PAN_X, -overhangX, overhangX);
    const panY = Phaser.Math.Clamp(PAN_Y, -overhangY, overhangY);

    beach.setScale(scale);
    beach.setPosition(
      width / 2 - boundsCenterLocalX * scale + panX,
      height / 2 - boundsCenterLocalY * scale + panY,
    );

    this.beach = beach;
    window.beach = beach;

    const skeletonData = beach.skeleton.data;
    const animationNames = skeletonData.animations.map((a) => a.name);
    if (animationNames.length > 0) {
      beach.animationState.setAnimation(0, animationNames[0], true);
    }

    if (!this.scene.isActive('PlayerScene')) {
      this.scene.launch('PlayerScene');
    }
  }
}
