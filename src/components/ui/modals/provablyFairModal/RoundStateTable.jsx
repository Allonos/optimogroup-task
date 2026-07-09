import React from 'react'

const HEADERS = ['Round Number', 'Server Key', 'Crash Point', 'Provably Fair Hash']

const RoundStateTable = ({ title, values }) => (
  <div className="modal__frame">
    <h3 className="modal__subtitle">{title}</h3>
    <div className="modal__frame__content">
      <div className="modal__frame__row--header">
        {HEADERS.map(h => <span key={h}>{h}</span>)}
      </div>
      <div className="modal__separator"></div>
      <div className="modal__frame__row--content">
        {values.map((v, i) => <span key={i}>{v}</span>)}
      </div>
    </div>
  </div>
)

export default RoundStateTable
