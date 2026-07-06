const PlaceBetButton = ({
  label = 'Bet',
  amount,
  currency = 'USD',
  onClick,
}) => {
  return (
    <button className='bet-place-button' onClick={onClick}>
      <span className='bet-place-button__label '>{label}</span>
      <span className='bet-place-button__amount'>
        {amount.toFixed(2)} {currency}
      </span>
    </button>
  );
};

export default PlaceBetButton;
