import React from 'react'
import { MinusIcon } from '@/assets/icons/SvgTojsx'

const ChangeQuantityButton = ({ icon, onClick }) => {
  return (
    <button className='change-quantity' onClick={onClick}>
      {icon}
    </button>
  )
}

export default ChangeQuantityButton