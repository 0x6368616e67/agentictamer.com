import { IconCode } from './icons.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__tagline">
          <IconCode width={16} height={16} /> 技术创造价值 · 合作成就未来
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} AgenticTamer· 赋能您的技术团队，让落地更快、更稳。</p>
      </div>
    </footer>
  )
}
