import { useTranslation } from 'react-i18next';
import { useState, useRef, useLayoutEffect, useCallback } from 'react';

import BetMoney from '@/components/ui/modals/freeBetModal/components/BetMoney';
import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalHeader/ModalHeader';
import FreeBetsContainer from '@/components/ui/modals/freeBetModal/components/FreeBetsContainer';
import { HistoryIcon, LongArrowIcon } from '@/assets/icons/SvgTojsx';

const useSwapHeight = (activeKey) => {
  const [height, setHeight] = useState(null);
  const refs = useRef({});

  useLayoutEffect(() => {
    const node = refs.current[activeKey];
    if (!node) return;

    setHeight(node.offsetHeight);

    const resizeObserver = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [activeKey]);

  const setRef = useCallback(
    (key) => (node) => {
      refs.current[key] = node;
    },
    [],
  );

  return { height, setRef };
};

const FreeBetModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isFullPayoutOpen, setIsFullPayoutOpen] = useState(false);
  const [isPureProfitOpen, setIsPureProfitOpen] = useState(false);
  const [isBonusBalanceOpen, setIsBonusBalanceOpen] = useState(false);

  const [activeOverlay, setActiveOverlay] = useState('main');
  const isArchive = activeOverlay === 'archive';

  const { height: actionsHeight, setRef: setActionsRef } =
    useSwapHeight(activeOverlay);
  const { height: titleHeight, setRef: setTitleRef } =
    useSwapHeight(activeOverlay);

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered'
      style={{
        maxWidth: 542,
        width: '100%',
        borderRadius: 16,
        padding: 24,
        border: '1px solid rgba(var(--line))',
        zIndex: 100,
        maxHeight: isArchive ? '315px' : 'none',
      }}
    >
      <div className='modal-overlay-swap' style={{ height: 20 }}>
        <div
          className={`modal-overlay-view ${activeOverlay === 'main' ? 'is-active' : 'is-hidden'}`}
        >
          <ModalHeader title={t('freeBetsManagement')} onClose={onClose} />
          <BetMoney />
        </div>
        <div
          className={`modal-overlay-view ${activeOverlay === 'archive' ? 'is-active' : 'is-hidden'}`}
        >
          <ModalHeader
            prefix={
              <button onClick={() => setActiveOverlay('main')}>
                <LongArrowIcon
                  className='icon'
                  style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
                />
              </button>
            }
            title={t('archive')}
            onClose={onClose}
          />
        </div>
      </div>

      <div className='free-bets-container'>
        <div
          className='modal-overlay-swap'
          style={{ height: titleHeight != null ? `${titleHeight}px` : 'auto' }}
        >
          <div
            ref={setTitleRef('main')}
            className={`modal-overlay-view ${activeOverlay === 'main' ? 'is-active' : 'is-hidden'}`}
          >
            <h4 className='active-free-bets-title'>{t('activeFreeBets')}</h4>
          </div>
          <div
            ref={setTitleRef('archive')}
            className={`modal-overlay-view ${activeOverlay === 'archive' ? 'is-active' : 'is-hidden'}`}
          />
        </div>
        <FreeBetsContainer
          type='fullPayout'
          betType={t('fullPayout')}
          isFullPayoutOpen={isFullPayoutOpen}
          setIsFullPayoutOpen={setIsFullPayoutOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
        <FreeBetsContainer
          type='pureProfit'
          betType={t('pureProfit')}
          isFullPayoutOpen={isPureProfitOpen}
          setIsFullPayoutOpen={setIsPureProfitOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
        <FreeBetsContainer
          type='bonusBalance'
          betType={t('bonusBalance')}
          isFullPayoutOpen={isBonusBalanceOpen}
          setIsFullPayoutOpen={setIsBonusBalanceOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
      </div>

      <div
        className='modal-overlay-swap'
        style={{
          height: actionsHeight != null ? `${actionsHeight}px` : 'auto',
        }}
      >
        <div
          ref={setActionsRef('main')}
          className={`modal-overlay-view ${activeOverlay === 'main' ? 'is-active' : 'is-hidden'}`}
        >
          <div className='free-bets-modal-actions'>
            <button
              className='free-bets-modal-actions-archive'
              onClick={() => setActiveOverlay('archive')}
            >
              <HistoryIcon
                className='icon'
                style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
              />
              <span>{t('archive')}</span>
            </button>
            <button className='free-bets-modal-actions-play'>
              <span>{t('playNow')}</span>
            </button>
          </div>
        </div>
      </div>
    </DefaultModal>
  );
};

export default FreeBetModal;
