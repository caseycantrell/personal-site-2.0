export const PANELS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
] as const

export type PanelId = (typeof PANELS)[number]['id']

// the desktop/mobile split. mirrored by the `lg` screen in tailwind.config.ts
// and the media queries in globals.css -- change all three together.
export const DESKTOP_BREAKPOINT = 1200

export interface PanelProps {
  onNavigate: (id: PanelId) => void
}
