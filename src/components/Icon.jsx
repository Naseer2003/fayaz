// Line icons used across the site, in place of emoji.
const paths = {
  plane: 'M21 3 3 10.4l7.1 3.5L13.6 21 21 3Z',
  passport: 'M6.5 3H17a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3ZM14 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9 15.5h5',
  shield: 'M12 3 4.5 6v6c0 4.2 3.1 7.9 7.5 9 4.4-1.1 7.5-4.8 7.5-9V6L12 3Z',
  bus: 'M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8H4V7ZM4 15h16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2ZM4 9h16M7.5 21v-3M16.5 21v-3',
  mosque: 'M12 3c2 1.6 3 3.2 3 4.8 0 1.1-.6 2-1.5 2.7h-3C9.6 9.8 9 8.9 9 7.8 9 6.2 10 4.6 12 3ZM6 20v-7.5c0-1.2.9-2 2-2h8c1.1 0 2 .8 2 2V20M3 20h18M3 20v-6M21 20v-6M10.5 20v-3a1.5 1.5 0 0 1 3 0v3',
  bag: 'M5 8h14l-1 12.5H6L5 8ZM9 8V6a3 3 0 0 1 6 0v2',
  shirt: 'M9 3.5 4 6.3l1.6 4.2L8 9.4V20.5h8V9.4l2.4 1.1L20 6.3 15 3.5a3 3 0 0 1-6 0Z',
  droplet: 'M12 3.5c3.2 3.6 5 6.3 5 8.7a5 5 0 0 1-10 0c0-2.4 1.8-5.1 5-8.7Z',
  phone: 'M21.5 17v2.6a1.8 1.8 0 0 1-2 1.8 17.9 17.9 0 0 1-7.8-2.8 17.6 17.6 0 0 1-5.4-5.4A17.9 17.9 0 0 1 3.5 5.4a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.6c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14.4 14.4 0 0 0 5.6 5.6l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.6 1.8Z',
  file: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5ZM14 3v5h5M9 13h6M9 17h4',
  award: 'M12 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM8.6 13.8 7 21.5l5-2.5 5 2.5-1.6-7.7',
  wallet: 'M4 7.5A2.5 2.5 0 0 1 6.5 5H18v2.5M4 7.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M4 7.5h14a2 2 0 0 1 2 2V15M20 15h-3.5a1.75 1.75 0 0 1 0-3.5H20',
  hotel: 'M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 21V9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h2M8 11h2M8 15h2',
  users: 'M9.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20a7 7 0 0 1 14 0M17 5.3a3.5 3.5 0 0 1 0 6.4M19 20a6.5 6.5 0 0 0-2.3-4.9',
  support: 'M4 13v-1a8 8 0 0 1 16 0v1M4 13h2.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5ZM20 13h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-5ZM18 19v.5a2.5 2.5 0 0 1-2.5 2.5H13',
  calendar: 'M5 5.5h14a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1ZM4 10h16M8.5 3v4M15.5 3v4',
  pin: 'M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11ZM12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  check: 'M4.5 12.5 9.5 17.5 19.5 6.5',
  arrowRight: 'M4 12h15M13 6l6 6-6 6',
  arrowUp: 'M12 20V4M6 10l6-6 6 6',
  quote: 'M9.5 6C6.5 7.4 5 9.9 5 13.5V18h5.5v-5.5H8c0-2 .8-3.4 2.4-4.3L9.5 6ZM19 6c-3 1.4-4.5 3.9-4.5 7.5V18H20v-5.5h-2.5c0-2 .8-3.4 2.4-4.3L19 6Z',
}

export default function Icon({ name, size = 22, className = '', strokeWidth = 1.5 }) {
  const d = paths[name]
  if (!d) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  )
}
