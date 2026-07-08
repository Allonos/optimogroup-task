import { useState } from 'react'
import DefaultModal from '@/components/ui/modals/DefaultModal'
import { MusicIcon, SoundIcon, AnimationIcon, CheckIcon, InfoIcon, TicketIcon, CoinIcon, ChatIcon } from '@/assets/icons/SvgTojsx'
import DefaultSwitch from '@/components/ui/switches/DefaultSwitch'

const TOGGLE_ITEMS = [
  { key: 'sound', label: 'Sound', Icon: SoundIcon, defaultValue: true },
  { key: 'music', label: 'Music', Icon: MusicIcon, defaultValue: false },
  { key: 'animation', label: 'Animation', Icon: AnimationIcon, defaultValue: false },
]

const PLAIN_ITEMS = [
  { key: 'fair', label: 'Provably fair', Icon: CheckIcon },
  { key: 'howToPlay', label: 'How to Play', Icon: InfoIcon },
  { key: 'freeBet', label: 'Free Bet', Icon: TicketIcon },
  { key: 'limits', label: 'Limits', Icon: CoinIcon },
  { key: 'chat', label: 'Chat', Icon: ChatIcon },
]

const MenuModal = ({ isMenuOpen, setIsMenuOpen }) => {
  const [toggles, setToggles] = useState(
    Object.fromEntries(TOGGLE_ITEMS.map(({ key, defaultValue }) => [key, defaultValue]))
  )

  const toggle = (key) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <DefaultModal
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      style={{ width: 238, borderRadius: 12, border: '1px solid rgba(var(--line))', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      {TOGGLE_ITEMS.map(({ key, label, Icon }) => (
        <div className='menu-modal__item-wrapper' key={key}>
          <div className={`menu-modal__item${toggles[key] ? ' active' : ''}`}>
            <Icon className='icon' style={{ '--icon-color': toggles[key] ? 'rgba(var(--text-white))' : 'rgba(var(--text-grey))' }} />
            <span>{label}</span>
          </div>
          <DefaultSwitch defaultChecked={toggles[key]} onChange={() => toggle(key)} />
        </div>
      ))}

      {PLAIN_ITEMS.map(({ key, label, Icon }) => (
        <div className='menu-modal__item-wrapper' key={key}>
          <div className='menu-modal__item'>
            <Icon className='icon' style={{ '--icon-color': 'rgba(var(--text-grey))' }} />
            <span>{label}</span>
          </div>
        </div>
      ))}
    </DefaultModal>
  )
}

export default MenuModal