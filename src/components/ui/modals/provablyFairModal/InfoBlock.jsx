import React from 'react'

const InfoBlock = ({ intro, items, footer }) => (
  <div className="modal__frame__1">
    <span className="modal__frame__1__text">{intro}</span>
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <p className="modal__list__label">{item.label} <span className="modal__list__desc"> – {item.desc}</span></p>
        </li>
      ))}
    </ul>
    {footer && <span className="modal__frame__1__text">{footer}</span>}
  </div>
)

export default InfoBlock
