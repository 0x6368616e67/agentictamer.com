import { useReveal } from '../hooks/useReveal.js'
import {
  IconPlus, IconChat, IconCode, IconUsers, IconShield,
  IconBulb, IconCubes, IconRocket,
} from './icons.jsx'
import './Hero.css'

// Left-column capability list
const features = [
  { Icon: IconChat, title: 'Strategic Thinking', desc: '从全局视角，提供清晰的技术决策与方向' },
  { Icon: IconCode, title: 'Hands-on Execution', desc: '不止于建议，更能亲自下场交付高质量代码' },
  { Icon: IconUsers, title: 'Team Empowerment', desc: '陪伴团队成长，沉淀可复用的工程能力' },
  { Icon: IconShield, title: 'Risk & Quality First', desc: '把风险与质量前置，让每一步都更稳健' },
]

// Orbit nodes (clockwise from top), positioned around the central orb
const nodes = [
  { num: '01', Icon: IconBulb, accent: 'purple', title: 'Understand', desc: 'Align on goals and challenges', pos: 'top' },
  { num: '02', Icon: IconCubes, accent: 'teal', title: 'Design', desc: 'Craft the right technical solution', pos: 'right' },
  { num: '03', Icon: IconCode, accent: 'blue', title: 'Build', desc: 'Deliver with quality and speed', pos: 'bottom' },
  { num: '04', Icon: IconRocket, accent: 'orange', title: 'Evolve', desc: 'Iterate and scale together', pos: 'left' },
]

export default function Hero() {
  const ref = useReveal()
  return (
    <section className="hero" id="top">
      <div className="container hero__inner reveal" ref={ref}>
        {/* ── Left: headline + capabilities ── */}
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <IconPlus width={14} height={14} /> I HELP YOU
          </p>
          <h1 className="hero__title">
            <span>From Idea</span>
            <span className="hero__title-accent">to Impact.</span>
          </h1>
          <div className="hero__rule" aria-hidden="true">
            <span /><span />
          </div>

          <ul className="hero__features">
            {features.map(({ Icon, title, desc }) => (
              <li key={title} className="feat">
                <span className="feat__icon"><Icon width={20} height={20} /></span>
                <div className="feat__body">
                  <p className="feat__title">{title}</p>
                  <p className="feat__desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: orbit diagram ── */}
        <div className="hero__orbit" aria-hidden="true">
          <div className="orbit">
            <span className="orbit__ring" />

            {/* central crystal orb on its base */}
            <div className="orb">
              <span className="orb__halo" />
              <span className="orb__ball">
                <span className="orb__spark" />
              </span>
              <span className="orb__base" />
              <span className="orb__beam orb__beam--a" />
              <span className="orb__beam orb__beam--b" />
              <span className="orb__beam orb__beam--c" />
            </div>

            {nodes.map(({ num, Icon, accent, title, desc, pos }) => (
              <article key={num} className={`node node--${pos}`} data-accent={accent}>
                <div className="node__card">
                  <span className="node__icon"><Icon width={24} height={24} /></span>
                  <span className="node__lines"><i /><i /><i /></span>
                  <span className="node__num">{num}</span>
                </div>
                <p className="node__title">{title}</p>
                <p className="node__desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__fade" />
    </section>
  )
}
