import { useReveal } from '../hooks/useReveal.js'
import { clauses } from '../data/content.js'
import './Clauses.css'

function ClauseCard({ clause, index }) {
  const ref = useReveal()
  const { Icon } = clause
  return (
    <article ref={ref} className="clause reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <span className="clause__icon"><Icon width={24} height={24} /></span>
      <h3 className="clause__title">{clause.title}</h3>
      <p className="clause__body">{clause.body}</p>
    </article>
  )
}

export default function Clauses() {
  const head = useReveal()
  return (
    <section className="section clauses" id="clauses">
      <div className="container">
        <div className="clauses__head reveal" ref={head}>
          <div className="divider-deco"><span /> RISK CONTROL <span /></div>
          <h2 className="section-title">风险控制与服务协议关键条款</h2>
        </div>
        <div className="clauses__grid">
          {clauses.map((c, i) => (
            <ClauseCard key={c.title} clause={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
