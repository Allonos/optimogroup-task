const QuantityPresets = ({ presets, onSelect }) => {
  return (
    <div className='change-by-numbers'>
      {presets.map((value) => (
        <button key={value} onClick={() => onSelect(value)}>
          <span>{value.toFixed(2)}</span>
        </button>
      ))}
    </div>
  );
};

export default QuantityPresets;
