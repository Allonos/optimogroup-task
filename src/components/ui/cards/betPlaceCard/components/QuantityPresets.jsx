const QuantityPresets = ({ presets, onSelect }) => {
  return (
    <div className='change-by-numbers'>
      {presets.map((value) => (
        <button key={value} onClick={() => onSelect(value)}>
          <span className='quantity-value-fixed'>{value.toFixed(2)}</span>
          <span>{value.toFixed(0)}</span>
        </button>
      ))}
    </div>
  );
};

export default QuantityPresets;
