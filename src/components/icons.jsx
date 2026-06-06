// Lightweight inline icon set (stroke-based, currentColor) used across sections.
// Keeps bundle small and lets icons inherit tier accent colors.

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconCode = (p) => (
  <svg {...base} {...p}><path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" /></svg>
)

export const IconChat = (p) => (
  <svg {...base} {...p}><path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 12 3.5a8.5 8.5 0 0 1 9 8z" /></svg>
)

export const IconSupport = (p) => (
  <svg {...base} {...p}><path d="m8 7-4 5 4 5M16 7l4 5-4 5M13.5 5l-3 14" /></svg>
)

export const IconPartner = (p) => (
  <svg {...base} {...p}><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></svg>
)

export const IconCheck = (p) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
)

export const IconClose = (p) => (
  <svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
)

export const IconClock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)

export const IconCalendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
)

export const IconShield = (p) => (
  <svg {...base} {...p}><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /></svg>
)

export const IconLock = (p) => (
  <svg {...base} {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)

export const IconScale = (p) => (
  <svg {...base} {...p}><path d="M12 3v18M5 21h14M7 7l-4 7h8zM17 7l-4 7h8zM7 7h10" /></svg>
)

export const IconDoor = (p) => (
  <svg {...base} {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M14 3v18M14 3l6 3v12l-6 3" /><circle cx="11" cy="12" r="0.9" fill="currentColor" stroke="none" /></svg>
)

export const IconBadge = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></svg>
)

export const IconBranch = (p) => (
  <svg {...base} {...p}><circle cx="6" cy="6" r="2.4" /><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="8" r="2.4" /><path d="M6 8.4v7.2M8.4 6.4c6 0 7.6 1.6 7.6 4.6M16 9.4c0 4.6-3 6.6-10 6.6" /></svg>
)

export const IconGlobe = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" /></svg>
)

export const IconTarget = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" /></svg>
)

export const IconSend = (p) => (
  <svg {...base} {...p}><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>
)

export const IconWechat = (p) => (
  <svg {...base} {...p}><path d="M9 4C5 4 2 6.7 2 10c0 1.9 1 3.6 2.6 4.7L4 17l3-1.4c.6.2 1.3.3 2 .3" /><path d="M22 15c0-2.8-2.7-5-6-5s-6 2.2-6 5 2.7 5 6 5c.7 0 1.4-.1 2-.3l2.5 1.1-.6-2.1c1.3-.9 2.1-2.2 2.1-3.7z" /></svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)

export const IconBulb = (p) => (
  <svg {...base} {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" /></svg>
)

export const IconRocket = (p) => (
  <svg {...base} {...p}><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2 0-2.8a2 2 0 0 0-3 0z" /><path d="M9 12c5-7 9-8 12-8 0 3-1 7-8 12l-4-4z" /><circle cx="15" cy="9" r="1.4" /></svg>
)

export const IconCubes = (p) => (
  <svg {...base} {...p}><path d="m12 3 7 4v8l-7 4-7-4V7z" /><path d="m12 3 7 4-7 4-7-4z" /><path d="M12 11v8" /></svg>
)

export const IconUsers = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14c2 .8 3 2.7 3 6" /></svg>
)

export const IconPlus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
)
