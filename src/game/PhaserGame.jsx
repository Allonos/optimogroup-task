import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { SpinePlugin } from '@esotericsoftware/spine-phaser-v4';
import BeachScene from './scenes/BeachScene';
import StartScene from './scenes/StartScene';

let gameInstance = null;

const PhaserGame = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!gameInstance) {
      gameInstance = new Phaser.Game({
        type: Phaser.WEBGL,
        parent: containerRef.current,
        transparent: true,
        scale: {
          mode: Phaser.Scale.FIT,
          // autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 2012,
          height: 1028,
        },
        plugins: {
          scene: [
            { key: 'spine.SpinePlugin', plugin: SpinePlugin, mapping: 'spine' },
          ],
        },
        scene: [BeachScene, StartScene],
      });
      window.game = gameInstance;
    } else if (gameInstance.canvas && containerRef.current) {
      containerRef.current.appendChild(gameInstance.canvas);
    }
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default PhaserGame;