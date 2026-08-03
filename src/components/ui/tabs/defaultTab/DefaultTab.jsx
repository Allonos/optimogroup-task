import { forwardRef } from 'react';

const DefaultTab = forwardRef(({ label, active, onClick }, ref) => {
  return (
    <button
      ref={ref}
      className={`default-tab ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className='text-body-small-semibold'>{label}</span>
    </button>
  );
});

DefaultTab.displayName = 'DefaultTab';

export default DefaultTab;
