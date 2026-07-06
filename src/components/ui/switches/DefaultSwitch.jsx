const DefaultSwitch = ({ defaultChecked, onChange }) => {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={defaultChecked}
      onClick={onChange}
      className={`switch${defaultChecked ? ' checked' : ''}`}
    >
      <span className={`switch__thumb${defaultChecked ? ' checked' : ''}`} />
    </button>
  );
};

export default DefaultSwitch;
