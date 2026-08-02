import ArchiveBetContainer from '@/components/ui/modals/freeBetModal/components/ArchiveBetContainer';
import ActiveFreeBetContainer from '@/components/ui/modals/freeBetModal/components/ActiveFreeBetContainer';

const FreeBetsContainer = ({
  type,
  betType,
  isFullPayoutOpen,
  setIsFullPayoutOpen,
  isArchive = false,
}) => {
  if (isArchive) {
    return <ArchiveBetContainer type={type} betType={betType} />;
  }

  return (
    <ActiveFreeBetContainer
      type={type}
      betType={betType}
      isFullPayoutOpen={isFullPayoutOpen}
      setIsFullPayoutOpen={setIsFullPayoutOpen}
    />
  );
};

export default FreeBetsContainer;
