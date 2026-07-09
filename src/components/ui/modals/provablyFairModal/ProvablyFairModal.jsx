import { useTranslation } from 'react-i18next';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import ProvablyFairInstructions from '@/components/ui/modals/provablyFairModal/components/ProvablyFairInstructions';
import RoundStateTable from '@/components/ui/modals/provablyFairModal/components/RoundStateTable';
import InfoBlock from '@/components/ui/modals/provablyFairModal/components/InfoBlock';
import ProvablyFairParameters from '@/components/ui/modals/provablyFairModal/components/ProvablyFairParameters';
import ModalHeader from '@/components/ui/headers/modalheader/Modalheader';

const BEFORE_VALUES = ['1', 'hidden', 'Hidden', '8f3a2b9c7d1e…'];
const AFTER_VALUES = ['1', '7k9mX2pQ4nR8wL…', '2.45x', '8f3a2b9c7d1e…'];

const BEFORE_ITEMS = [
  { label: 'roundNumber', desc: 'currentRoundIdentifier' },
  {
    label: 'provablyFairHash',
    desc: 'cryptographicHash',
  },
];

const AFTER_ITEMS = [
  { label: 'randomServerKey', desc: 'randomServerKey' },
  { label: 'crashPoint', desc: 'multiplierWhereRoundEnded' },
  {
    label: 'provablyFairHash',
    desc: 'remainsTheSame',
  },
];

const ProvablyFairModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered no-scrollbar'
      style={{
        maxWidth: 1006,
        width: '100%',
        maxHeight: 581,
        overflowY: 'auto',
        borderRadius: 16,
        padding: 24,
        border: '1px solid rgba(var(--line))',
        zIndex: 100,
      }}
    >
      <ModalHeader title={t('provablyFair')} onClose={onClose} />
      <section className='provably__fair__modal__content'>
        <div className='modal__content'>
          <ProvablyFairInstructions />
          <RoundStateTable
            title={t('beforeRoundStarts')}
            values={BEFORE_VALUES}
          />
          <InfoBlock
            intro={t('beforeGameBegins')}
            items={BEFORE_ITEMS}
            footer={t('beforeGameBeginsFooter')}
          />
          <RoundStateTable title={t('afterRoundEnds')} values={AFTER_VALUES} />
          <InfoBlock
            intro={t('onceTheRoundEnds')}
            items={AFTER_ITEMS}
            footer={t('onceTheRoundEndsFooter')}
          />
          <ProvablyFairParameters />
        </div>
      </section>
    </DefaultModal>
  );
};

export default ProvablyFairModal;
