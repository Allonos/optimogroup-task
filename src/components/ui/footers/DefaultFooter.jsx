import React from 'react'
import { LogoIcon, NetworkIcon } from "@/assets/icons/SvgTojsx"

const DefaultFooter = () => {
  return (
    <footer className='default-footer'>
      <div className="footer-content footer-left">
        <span className='text-body-small-semibold'>Powered by</span>
        <LogoIcon 
          className='icon'
          style={{ '--icon-color': 'rgba(var(--icon-white))' }}
        />
      </div>
      <div className="footer-content footer-right">
        <NetworkIcon 
          className='icon'
          style={{ '--icon-color': 'rgba(var(--icon-green))' }} />
        <span className='text-body-small-semibold'>Network Connection</span>
        <span className="footer-seperator"></span>
        <span className='text-body-small-semibold'>10 : 27 : 42</span>
      </div>
    </footer>
  )
}

export default DefaultFooter