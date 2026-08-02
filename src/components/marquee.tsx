import { Store, UtensilsCrossed, Hotel, HeartPulse, Sparkles, Building2 } from 'lucide-react'

const items = [
  { icon: Store, label: 'Belleza y Bienestar' },
  { icon: UtensilsCrossed, label: 'Restaurantes' },
  { icon: HeartPulse, label: 'Salud' },
  { icon: Building2, label: 'Auron Suite' },
  { icon: Hotel, label: 'Hospitality' },
  { icon: Sparkles, label: 'Restaurant OS' },
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 text-sm md:text-base font-medium text-[var(--auron-text-secondary)] whitespace-nowrap">
          <item.icon className="w-5 h-5" style={{ color: 'var(--auron-accent-text)' }} />
          {item.label}
        </div>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="relative border-y border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)] py-6 overflow-hidden">
      <div className="auron-marquee-track flex w-max">
        <Track />
        <Track />
      </div>
    </div>
  )
}
