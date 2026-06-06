import { Link } from 'react-router-dom'
import { IconCode } from './icons.jsx'
import './Nav.css'

const links = [
  { href: '#tiers', label: '服务方案' },
  { href: '#clauses', label: '协议条款' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__logo"><IconCode width={20} height={20} /></span>
          <span className="nav__name">AgenticTamer</span>
          <span className="nav__sep">·</span>
          <span className="nav__slogan">赋能您的技术团队，让落地更快、更稳。</span>
        </a>
        <nav className="nav__links" aria-label="主导航">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <Link className="nav__cta" to="/contact">咨询合作</Link>
      </div>
    </header>
  )
}
