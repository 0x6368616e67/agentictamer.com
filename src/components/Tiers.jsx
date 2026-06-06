import { useReveal } from '../hooks/useReveal.js'
import { tiers } from '../data/content.js'
import { IconCheck, IconClose, IconCalendar, IconClock } from './icons.jsx'
import './Tiers.css'

function TierCard({ tier, index }) {
  const ref = useReveal()
  const { Icon } = tier
  const metaIcons = [IconCalendar, IconClock]
  return (
    <article
      ref={ref}
      className={`tier tier--${tier.accent} reveal`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <header className="tier__head">
        <span className="tier__icon"><Icon width={26} height={26} /></span>
        <div>
          <h3 className="tier__name">{tier.name}</h3>
          <p className="tier__tagline">{tier.tagline}</p>
        </div>
        {tier.role && <span className="tier__role">{tier.role}</span>}
      </header>

      {(tier.position || tier.approach) && (
        <dl className="tier__brief">
          {tier.position && (
            <div className="tier__brief-row">
              <dt>定位</dt>
              <dd>{tier.position}</dd>
            </div>
          )}
          {tier.approach && (
            <div className="tier__brief-row">
              <dt>方式</dt>
              <dd>{tier.approach}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="tier__price">
        <span className="tier__amount">{tier.price}</span>
        <span className="tier__unit">{tier.unit}</span>
      </div>
      <p className="tier__rmb">{tier.rmb}</p>

      <ul className="tier__meta">
        {tier.meta.map((m, i) => {
          const MI = metaIcons[i] || IconClock
          return (
            <li key={i}>
              <MI width={18} height={18} />
              <div>
                <span className="tier__meta-label">{m.label}</span>
                <span className="tier__meta-sub">{m.sub}</span>
              </div>
            </li>
          )
        })}
      </ul>

      <p className="tier__group-title">提供的服务</p>
      <ul className="tier__list">
        {tier.includes.map((t, i) => (
          <li key={i} className="tier__item tier__item--yes">
            <IconCheck width={17} height={17} />
            <span>{t}</span>
          </li>
        ))}
        {tier.excludes.map((t, i) => (
          <li key={`x${i}`} className="tier__item tier__item--no">
            <IconClose width={17} height={17} />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <a className="tier__cta" href="#contact">选择{tier.name}</a>
    </article>
  )
}

export default function Tiers() {
  const head = useReveal()
  return (
    <section className="section tiers" id="tiers">
      <div className="container">
        <div className="tiers__head reveal" ref={head}>
          <p className="eyebrow">PRICING · 灵活合作档位</p>
          <h2 className="section-title">从咨询到合伙，按需选择</h2>
        </div>
        <div className="tiers__grid">
          {tiers.map((t, i) => (
            <TierCard key={t.id} tier={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
