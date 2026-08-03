import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '@/store/contexts/ModalContext';
import DefaultFooter from '@/components/ui/footers/DefaultFooter';
import GameLayout from '@/components/ui/layouts/GameLayout';
import BetsListSection from '@/components/ui/sections/BetsListSection';
import GameHeader from '@/components/ui/headers/gameHeader/GameHeader';
import background from '@/assets/webp/background.webp';
import GameActionsSection from '@/components/ui/sections/gameActionsSection/GameActionsSection';
import BonusModal from '@/components/ui/modals/bonusModal/BonusModal';
import TotalWinModal from '@/components/ui/modals/totalWinModal/TotalWinModal';
import PhaserGame from '../game/PhaserGame';
import { FreeBetIcon } from '@/assets/icons/SvgTojsx';
import FreeBetModal from '@/components/ui/modals/freeBetModal/FreeBetModal'
import { CloseIcon, SuccessIcon } from '../assets/icons/SvgTojsx';

const TICK_MS = 120;
const MULTIPLIER_STEP = 0.01;
const MIN_CRASH_MULTIPLIER = 1.01;
const MAX_CRASH_MULTIPLIER = 2;
const COUNTDOWN_MS = 5000;
const COUNTDOWN_TICK_MS = 50;

const getRandomCrashMultiplier = () =>
  parseFloat(
    (Math.random() * (MAX_CRASH_MULTIPLIER - MIN_CRASH_MULTIPLIER) + MIN_CRASH_MULTIPLIER).toFixed(2)
  );

const HomePage = () => {
  const { t } = useTranslation();
  const [isGetBonusBet, setIsGetBonusBet] = useState(false);
  const [isGetFreeBet, setGetIsFreeBet] = useState(false);
  const [totalFreeBetWin, setTotalFreeBetWin] = useState(false);
  const [freeBetModal, setFreeBetModal] = useState(false);

  const [phase, setPhase] = useState('countdown');
  const [countdownProgress, setCountdownProgress] = useState(1);
  const [multiplier, setMultiplier] = useState(0);
  const crashMultiplierRef = useRef(null);
  const [bets, setBets] = useState([
    { state: 'idle', quantity: 1.0, winAmount: null, isFree: false, showWin: false },
    { state: 'idle', quantity: 1.0, winAmount: null, isFree: false, showWin: false },
  ]);

  useEffect(() => {
    if (phase !== 'countdown') return;
    crashMultiplierRef.current = getRandomCrashMultiplier();
    setCountdownProgress(1);
    setMultiplier(0);
    setBets(prev => prev
      .map(b => b.state === 'lost' || b.state === 'cashedout'
        ? { ...b, state: 'idle', winAmount: null, isFree: false, showWin: false }
        : b)
    );
    const totalSteps = COUNTDOWN_MS / COUNTDOWN_TICK_MS;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCountdownProgress(Math.max(0, 1 - step / totalSteps));
      if (step >= totalSteps) {
        clearInterval(interval);
        setPhase('running');
      }
    }, COUNTDOWN_TICK_MS);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'running') return;
    setBets(prev => prev.map(b => b.state === 'queued' ? { ...b, state: 'active' } : b));
    const interval = setInterval(() => {
      setMultiplier((prev) => {
        const next = parseFloat((prev + MULTIPLIER_STEP).toFixed(2));
        if (next >= crashMultiplierRef.current) {
          clearInterval(interval);
          setPhase('crashed');
          return crashMultiplierRef.current;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'crashed') return;
    setBets(prev => prev.map(b => b.state === 'active' ? { ...b, state: 'lost' } : b));
    const timeout = setTimeout(() => setPhase('countdown'), 3000);
    return () => clearTimeout(timeout);
  }, [phase]);

  const placeBet = (i) => setBets(prev => prev.map((b, j) =>
    j === i && ['idle', 'lost', 'cashedout'].includes(b.state) ? { ...b, state: 'queued', winAmount: null } : b
  ));
  const cancelBet = (i) => setBets(prev => prev.map((b, j) =>
    j === i && b.state === 'queued' ? { ...b, state: 'idle' } : b
  ));
  const cashout = (i) => {
    setBets(prev => prev.map((b, j) => {
      if (j !== i || b.state !== 'active') return { ...b, showWin: false };
      return { ...b, state: 'cashedout', winAmount: +(b.quantity * multiplier).toFixed(2), showWin: true };
    }));
    setTimeout(() => {
      setBets(prev => prev.map((b, j) => j === i ? { ...b, showWin: false } : b));
    }, 2000);
  };
  const dismissWin = (i) => setBets(prev => prev.map((b, j) =>
    j === i ? { ...b, showWin: false } : b
  ));
  const setBetQuantity = (i, qty) => setBets(prev => prev.map((b, j) =>
    j === i && b.state === 'idle' && !b.isFree ? { ...b, quantity: qty } : b
  ));

  const activateFreeBet = () => {
    setFreeBetModal(false);
    setBets(prev => {
      const idx = prev.findIndex(b => b.state === 'idle' && !b.isFree);
      if (idx === -1) return prev;
      return prev.map((b, i) => i === idx ? { ...b, isFree: true, state: 'queued' } : b);
    });
  };

  const showLoseOverlay = phase === 'crashed' && bets.some(b => b.state === 'lost');
  const isRoundActive = phase === 'running';
  const countdownSeconds = Math.ceil(countdownProgress * 5);

  return (
    <GameLayout>
      <div className='home-page-footer'>
        <DefaultFooter />
      </div>
      <BetsListSection />
      <div className='home-page-content'>
        <GameHeader />
        <div className='home-page-game'>
          <PhaserGame className='background-img' isRoundActive={isRoundActive} />
          {bets.some(b => b.showWin) && (
            <div className='game-win-popups'>
              {bets.map((b, i) => b.showWin && (
                <div key={i} className='game-win-container'>
                  <div className='game-win-left'>
                    <SuccessIcon />
                    <span>You Win</span>
                  </div>
                  <div className='game-win-right'>
                    <div className='game-win-amount-popup'>
                      <span>{b.winAmount?.toFixed(2)} USD</span>
                    </div>
                    <CloseIcon className='close-icon-popup' style={{ width: 24, height: 24 }} onClick={() => dismissWin(i)} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {showLoseOverlay && <div className='lose-overlay' />}
          {phase === 'countdown' && (
            <div className='game-multiplier-timer'>
              <span className='game-multiplier-next-round'>Next round in {countdownSeconds}</span>
              <div className='game-multiplier-track'>
                <div className='game-multiplier-progress' style={{ width: `${countdownProgress * 100}%` }} />
              </div>
            </div>
          )}

          <div className='game-multiplier-container'>
            {(phase === 'running' || phase === 'crashed') && (
              <span className={`game-multiplier-value${showLoseOverlay ? ' game-multiplier-value--lost' : ''}`}>
                {multiplier.toFixed(2)}<span className='game-multiplier-x'>x</span>
              </span>
            )}
          </div>
          <button className='free-bet-container' onClick={() => setFreeBetModal(true)}>
            <FreeBetIcon />
            <span className='free-bet-label'>{t('freeBet')}</span>
            <div className='free-bet-value-container'>
              <span className='free-bet-value'>127</span>
            </div>
          </button>
        </div>
        <GameActionsSection
          bets={bets}
          gameMultiplier={multiplier}
          onPlaceBet={placeBet}
          onCancelBet={cancelBet}
          onCashout={cashout}
          onSetQuantity={setBetQuantity}
        />
      </div>

      <BonusModal
        isOpen={isGetBonusBet}
        onClose={() => setIsGetBonusBet(false)}
        type='bonus'
      />
      <BonusModal
        isOpen={isGetFreeBet}
        onClose={() => setGetIsFreeBet(false)}
        type='free'
      />
      <TotalWinModal
        isOpen={totalFreeBetWin}
        onClose={() => setTotalFreeBetWin(false)}
      />
      <FreeBetModal isOpen={freeBetModal} onClose={() => setFreeBetModal(false)} onPlayNow={activateFreeBet} />
    </GameLayout>
  );
};

export default HomePage;