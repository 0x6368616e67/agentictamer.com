import { useReveal } from '../hooks/useReveal.js'
import { trustBadges } from '../data/content.js'
import { IconSend, IconWechat, IconMail, IconX, IconCode } from './icons.jsx'
import './Contact.css'

const channels = [
  { Icon: IconSend, label: 'Telegram', value: '@Ox6368616e67', href: 'https://t.me/Ox6368616e67' },
  { Icon: IconX, label: 'X', value: '@0x6368616e67', href: 'https://x.com/0x6368616e67' },
  { Icon: IconMail, label: 'Email', value: 'Ox6368616e67@gmail.com' },
]

// Decorative QR-style grid (not a real scannable code — placeholder per design).
function QrArt() {
  const cells = 11
  // deterministic pseudo-random pattern
  const filled = (r, c) => {
    const corner =
      (r < 3 && c < 3) || (r < 3 && c > cells - 4) || (r > cells - 4 && c < 3)
    if (corner) return (r === 0 || r === 2 || c === 0 || c === 2 || (r === 1 && c === 1) || (r < 3 && c < 3 && r === 1 && c === 1))
      ? true : !((r > 0 && r < 2) || (c > 0 && c < 2))
    return ((r * 7 + c * 3 + r * c) % 5) < 2
  }
  return (
    <div className="qr" aria-hidden="true">
      <div className="qr__grid">
        {Array.from({ length: cells * cells }).map((_, i) => {
          const r = Math.floor(i / cells)
          const c = i % cells
          return <span key={i} className={filled(r, c) ? 'on' : ''} />
        })}
      </div>
      <span className="qr__logo"><IconCode width={18} height={18} /></span>
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner reveal" ref={ref}>
        <div className="contact__left">
          <h2 className="contact__headline">
            让专业的技术力量<br />成为您最可靠的后盾
          </h2>
          <ul className="contact__badges">
            {trustBadges.map((b) => {
              const { Icon } = b
              return (
                <li key={b.label}>
                  <span className="contact__badge-icon"><Icon width={22} height={22} /></span>
                  <span className="contact__badge-label">{b.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="contact__right">
          <div className="contact__connect">
            <ul className="contact__channels">
              {channels.map((ch) => {
                const { Icon } = ch
                const valueEl = ch.href
                  ? <a href={ch.href} target="_blank" rel="noopener noreferrer" className="contact__ch-value">{ch.value}</a>
                  : <span className="contact__ch-value">{ch.value}</span>
                return (
                  <li key={ch.label}>
                    <span className="contact__ch-icon"><Icon width={18} height={18} /></span>
                    <span className="contact__ch-label">{ch.label}：</span>
                    {valueEl}
                  </li>
                )
              })}
            </ul>
            <div className="contact__qr-wrap">
              <QrArt />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
