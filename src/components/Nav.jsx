import { IconCode } from './icons.jsx'
import './Nav.css'

const links = [
  { href: '#tiers', label: '服务方案' },
  { href: '#clauses', label: '协议条款' },
  { href: '#contact', label: '立即联系' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__logo"><IconCode width={20} height={20} /></span>
          <span className="nav__name">技术伙伴</span>
          <span className="nav__sep">·</span>
          <span className="nav__slogan">与您的技术团队一起落地您的想法</span>
        </a>
        <nav className="nav__links" aria-label="主导航">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="nav__cta" href="#contact">咨询合作</a>
      </div>
    </header>
  )
}
