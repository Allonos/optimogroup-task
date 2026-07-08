import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DefaultModal from '@/components/ui/modals/DefaultModal'
import { MusicIcon, SoundIcon, AnimationIcon, CheckIcon, InfoIcon, TicketIcon, CoinIcon, ChatIcon } from '@/assets/icons/SvgTojsx'
import DefaultSwitch from '@/components/ui/switches/DefaultSwitch'

const TOGGLE_ITEMS = [
  { key: 'sound', label: 'sound', Icon: SoundIcon, defaultValue: true },
  { key: 'music', label: 'music', Icon: MusicIcon, defaultValue: false },
  { key: 'animation', label: 'animation', Icon: AnimationIcon, defaultValue: false },
]

const PLAIN_ITEMS = [
  { key: 'fair', label: 'provablyFair', Icon: CheckIcon },
  { key: 'howToPlay', label: 'howToPlay', Icon: InfoIcon },
  { key: 'freeBet', label: 'freeBet', Icon: TicketIcon },
  { key: 'limits', label: 'limits', Icon: CoinIcon },
  { key: 'chat', label: 'chat', Icon: ChatIcon },
]

const MenuModal = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation()
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
            <span>{t(label)}</span>
          </div>
          <DefaultSwitch defaultChecked={toggles[key]} onChange={() => toggle(key)} />
        </div>
      ))}

      {PLAIN_ITEMS.map(({ key, label, Icon }) => (
        <div className='menu-modal__item-wrapper' key={key}>
          <div className='menu-modal__item plain'>
            <Icon className='icon' style={{ '--icon-color': 'rgba(var(--text-grey))' }} />
            <span>{t(label)}</span>
          </div>
        </div>
      ))}
    </DefaultModal>
  )
}

export default MenuModal
