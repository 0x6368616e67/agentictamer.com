import { useReveal } from '../hooks/useReveal.js'
import { trustBadges } from '../data/content.js'
import { IconCode } from './icons.jsx'
import './Contact.css'

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
      </div>
    </section>
  )
}
