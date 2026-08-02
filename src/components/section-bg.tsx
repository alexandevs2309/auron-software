import { cn } from '@/lib/utils'

const INK = 'var(--auron-accent-text)'

export const SECTION_VARIANTS = [
  'waves',
  'dots',
  'diamond',
  'blueprint',
  'weave',
  'rings',
  'squares',
  'orbital',
  'chevron',
  'plus',
] as const

export type SectionVariant = (typeof SECTION_VARIANTS)[number]

const TILES: Record<SectionVariant, [number, number]> = {
  waves: [440, 440],
  dots: [320, 320],
  diamond: [320, 320],
  blueprint: [360, 360],
  weave: [320, 320],
  rings: [320, 320],
  squares: [320, 320],
  orbital: [320, 320],
  chevron: [320, 160],
  plus: [320, 320],
}

const pts = [40, 120, 200, 280]

function renderVariant(variant: SectionVariant) {
  switch (variant) {
    case 'waves':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.16">
          <circle cx="440" cy="440" r="110" />
          <circle cx="440" cy="440" r="210" />
          <circle cx="440" cy="440" r="330" />
          <circle cx="-20" cy="460" r="150" />
          <circle cx="-20" cy="460" r="280" />
          <circle cx="230" cy="-40" r="120" />
          <circle cx="230" cy="-40" r="250" />
        </g>
      )
    case 'dots':
      return (
        <g fill={INK} fillOpacity="0.30">
          {pts.flatMap((x) => pts.map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />))}
        </g>
      )
    case 'diamond':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.16">
          <path d="M160 0 L320 160 L160 320 L0 160 Z" />
          <path d="M0 0 L320 320 M320 0 L0 320" />
        </g>
      )
    case 'blueprint':
      return (
        <>
          <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.14">
            <path d="M60 60 H300 V300 H60 Z" />
            <path d="M120 120 H240 V240 H120 Z" />
            <path d="M60 180 H300" />
            <path d="M180 60 V300" />
            <path d="M60 60 L300 300 M300 60 L60 300" />
          </g>
          <g fill={INK} fillOpacity="0.30">
            {[{ x: 60, y: 60 }, { x: 300, y: 60 }, { x: 60, y: 300 }, { x: 300, y: 300 }, { x: 120, y: 120 }, { x: 180, y: 180 }, { x: 240, y: 240 }].map(({ x, y }) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
            ))}
          </g>
        </>
      )
    case 'weave':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.15">
          {pts.flatMap((x) =>
            pts.map((y) => (
              <path key={`${x}-${y}`} d={`M${x - 20} ${y - 20} L${x + 20} ${y + 20} M${x + 20} ${y - 20} L${x - 20} ${y + 20}`} />
            )),
          )}
        </g>
      )
    case 'rings':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.16">
          <circle cx="160" cy="160" r="40" />
          <circle cx="160" cy="160" r="80" />
          <circle cx="160" cy="160" r="120" />
          <circle cx="160" cy="160" r="160" />
          <circle cx="160" cy="160" r="200" />
          <circle cx="160" cy="160" r="240" />
        </g>
      )
    case 'squares':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.15">
          {pts.flatMap((x) =>
            pts.map((y) => (
              <path key={`${x}-${y}`} d={`M${x - 22} ${y - 22} H${x + 22} V${y + 22} H${x - 22} Z M${x - 11} ${y - 11} H${x + 11} V${y + 11} H${x - 11} Z`} />
            )),
          )}
        </g>
      )
    case 'orbital':
      return (
        <>
          <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.16">
            {[53, 160, 267].map((c) => (
              <circle key={`ring-${c}`} cx={c} cy={c} r="24" />
            ))}
          </g>
          <g fill={INK} fillOpacity="0.30">
            {[53, 160, 267].map((c) => (
              <circle key={`dot-${c}`} cx={c} cy={c} r="3" />
            ))}
          </g>
        </>
      )
    case 'chevron':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.15">
          {[0, 80].map((y) => (
            <path key={y} d={`M0 ${y + 40} L40 ${y} L80 ${y + 40} L120 ${y} L160 ${y + 40} L200 ${y} L240 ${y + 40} L280 ${y} L320 ${y + 40}`} />
          ))}
        </g>
      )
    case 'plus':
      return (
        <g fill={INK} fillOpacity="0.22">
          {pts.flatMap((x) =>
            pts.map((y) => (
              <path key={`${x}-${y}`} d={`M${x - 12} ${y - 20} H${x + 12} V${y - 12} H${x + 20} V${y + 12} H${x + 12} V${y + 20} H${x - 12} V${y + 12} H${x - 20} V${y - 12} H${x - 12} Z`} />
            )),
          )}
        </g>
      )
  }
}

interface SectionBgProps {
  variant: SectionVariant
  className?: string
}

export function SectionBg({ variant, className }: SectionBgProps) {
  const [tw, th] = TILES[variant]
  return (
    <svg
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 w-full h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`auron-section-${variant}`} width={tw} height={th} patternUnits="userSpaceOnUse">
          {renderVariant(variant)}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#auron-section-${variant})`} />
    </svg>
  )
}
