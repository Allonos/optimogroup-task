const DefaultSwitch = ({ defaultChecked, onChange, styles }) => {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={defaultChecked}
      onClick={onChange}
      className={`switch${defaultChecked ? ' checked' : ''}`}
      style={{ ...styles }}
    >
      <span className={`switch__thumb${defaultChecked ? ' checked' : ''}`} />
    </button>
  );
};

export default DefaultSwitch;
