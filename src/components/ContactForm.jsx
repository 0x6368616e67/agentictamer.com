import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconSend, IconArrowLeft } from './icons.jsx'
import './ContactForm.css'

// TODO: Replace with your own Google Apps Script web-app URL.
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx7UV-7GUvcFBtBUpj6HfZoC_EpnjELYpj6Dpwd9N1v83urUkKJ1ZfoZJBPXi3rSr4lMg/exec'

export default function ContactForm() {
  const [form, setForm] = useState({ nickname: '', email: '', description: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const set = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setStatus('loading')
    fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(form),
    })
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json?.() ?? {}
      })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  const close = () => setStatus('idle')

  return (
    <div className="cf-page">
      <main>
        <div className="cf-card">
          <Link className="cf-back" to="/">
            <IconArrowLeft width={16} height={16} />
            返回首页
          </Link>

          <h1 className="cf-title">咨询合作</h1>
          <p className="cf-subtitle">填写以下信息，我们会尽快与您联系。</p>

          <form onSubmit={submit}>
            <div className="cf-field">
              <label htmlFor="nickname">称呼</label>
              <input
                id="nickname"
                name="nickname"
                type="text"
                placeholder="您的称呼"
                value={form.nickname}
                onChange={set}
                required
              />
            </div>

            <div className="cf-field">
              <label htmlFor="email">邮箱</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={set}
                required
              />
            </div>

            <div className="cf-field">
              <label htmlFor="description">需求描述</label>
              <textarea
                id="description"
                name="description"
                placeholder="简要描述您的需求或合作意向…"
                rows={4}
                value={form.description}
                onChange={set}
                required
              />
            </div>

            <button className="cf-submit" type="submit" disabled={status === 'loading'}>
              <IconSend width={16} height={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
              提交
            </button>
          </form>
        </div>
      </main>

      {status !== 'idle' && (
        <div className="cf-overlay" onClick={close}>
          <div className="cf-dialog" onClick={(e) => e.stopPropagation()}>
            {status === 'loading' && (
              <>
                <div className="cf-dialog__title">正在提交</div>
                <div className="cf-dialog__body">
                  <span className="cf-dialog__spinner" />
                  提交中，请稍候…
                </div>
                <button className="cf-dialog__btn" onClick={close}>取消</button>
              </>
            )}
            {status === 'success' && (
              <>
                <div className="cf-dialog__title">提交成功 ✓</div>
                <div className="cf-dialog__body">
                  感谢您的咨询，我们会尽快与您联系。
                </div>
                <Link className="cf-dialog__btn" to="/" onClick={close}>返回首页</Link>
              </>
            )}
            {status === 'error' && (
              <>
                <div className="cf-dialog__title">提交失败</div>
                <div className="cf-dialog__body">
                  提交过程中出现问题，请稍后重试。
                </div>
                <button className="cf-dialog__btn" onClick={close}>确定</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
