import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { SpinePlugin } from '@esotericsoftware/spine-phaser-v4';
import BeachScene from './scenes/BeachScene';
import PlayerScene from './scenes/PlayerScene';

let gameInstance = null;

const PhaserGame = ({ className, isRoundActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!gameInstance) {
      gameInstance = new Phaser.Game({
        type: Phaser.WEBGL,
        parent: containerRef.current,
        transparent: true,
        scale: {
          mode: Phaser.Scale.FIT,
          width: 2012,
          height: 1028,
        },
        plugins: {
          scene: [
            { key: 'spine.SpinePlugin', plugin: SpinePlugin, mapping: 'spine' },
          ],
        },
        scene: [BeachScene, PlayerScene],
      });
      window.game = gameInstance;
    } else if (gameInstance.canvas && containerRef.current) {
      containerRef.current.appendChild(gameInstance.canvas);
    }
  }, []);

  const wasRoundActive = useRef(false);
  useEffect(() => {
    const scene = gameInstance?.scene.getScene('PlayerScene');
    if (!wasRoundActive.current && isRoundActive) {
      if (scene && typeof scene.triggerStart === 'function') {
        scene.triggerStart();
      }
    } else if (wasRoundActive.current && !isRoundActive) {
      if (scene && typeof scene.triggerCatch === 'function') {
        scene.triggerCatch();
      }
    }
    wasRoundActive.current = isRoundActive;
  }, [isRoundActive]);

  return <div ref={containerRef} className={className} />;
};

export default PhaserGame;