import type { Skin } from '../skin'

// Claude's own look: terracotta on warm charcoal, ivory text, with a light variant on ivory paper.
const skin: Skin = {
  name: 'claude',
  label: 'Claude',
  palette: {
    read: '#8fb3d9',
    write: '#e5896a',
    run: '#e8b873',
    search: '#c3a6d8',
    web: '#6a9bcb',
    mcp: '#9bb882',
    other: '#b0aea5',
    user: '#d97757',
    fg: '#f0eee6',
    muted: '#a8a59a',
    surface: '#34312d',
    zebra: '#2d2b28',
    ok: '#8aa66b',
    err: '#e0675a',
    warn: '#e0a458',
  },
  light: {
    read: '#3b6a96',
    write: '#b85a3a',
    run: '#9a6a12',
    search: '#7a5a96',
    web: '#2f6694',
    mcp: '#566f3d',
    other: '#6b6a63',
    user: '#b5532f',
    fg: '#141413',
    muted: '#6b6a63',
    surface: '#ece9df',
    zebra: '#f3f1ea',
    ok: '#4d6b2f',
    err: '#b3392d',
    warn: '#8a5a0a',
  },
  spinner: ['Thinking', 'Pondering', 'Musing', 'Mulling', 'Percolating', 'Noodling', 'Cogitating', 'Ruminating'],
  done: ['Pondered', 'Mulled', 'Crafted', 'Figured out'],
}

export default skin
