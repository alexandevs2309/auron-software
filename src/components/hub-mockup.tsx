import { LayoutDashboard, Boxes, Briefcase, Users, BarChart3, Search, Bell, Building2, UtensilsCrossed, Hotel, HeartPulse, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Resumen' },
  { icon: Boxes, label: 'Productos' },
  { icon: Briefcase, label: 'Servicios' },
  { icon: Users, label: 'Clientes' },
  { icon: BarChart3, label: 'Reportes' },
]

const kpis = [
  { label: 'Cumplimiento e-CF DGII', value: '100%' },
  { label: 'Operación sin internet', value: 'Sí' },
  { label: 'Ediciones de la suite', value: '4' },
  { label: 'Datos y desarrollo', value: 'RD' },
]

const portfolio = [
  { icon: Building2, name: 'Beauty Edition', gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)' },
  { icon: UtensilsCrossed, name: 'Restaurant Edition', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
  { icon: Hotel, name: 'Hospitality Edition', gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)' },
  { icon: HeartPulse, name: 'Medical Edition', gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)' },
]

const bars = [42, 58, 46, 70, 62, 84, 76, 92, 68, 54, 80, 88]

export function HubMockup({ gradient = 'linear-gradient(135deg, #1A56DB, #123F9E)' }: { gradient?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)]">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e', opacity: 0.85 }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b', opacity: 0.85 }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981', opacity: 0.85 }} />
        <span className="ml-3 flex-1 max-w-[240px] truncate rounded-md px-3 py-1 text-[10px] text-[var(--auron-text-secondary)] bg-[var(--auron-bg-tertiary)]">
          auronsuite.com
        </span>
      </div>

      <div className="flex min-h-[280px]">
        <div className="hidden sm:flex flex-col gap-1 w-36 shrink-0 border-r border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)] px-3 py-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium',
                item.label === 'Resumen'
                  ? 'text-white'
                  : 'text-[var(--auron-text-tertiary)]',
              )}
              style={item.label === 'Resumen' ? { background: gradient } : undefined}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-0 bg-[var(--auron-bg)]">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--auron-border-light)]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--auron-accent-text)' }}>Hub corporativo</div>
              <div className="text-xs font-semibold text-[var(--auron-text)]">AURON Suite</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-[var(--auron-border)] bg-[var(--auron-bg-secondary)] px-2 py-1 text-[10px] text-[var(--auron-text-tertiary)]">
                <Search className="w-3 h-3" />
                <span className="hidden sm:inline">Buscar</span>
              </div>
              <div className="relative w-7 h-7 rounded-lg bg-[var(--auron-bg-tertiary)] flex items-center justify-center">
                <Bell className="w-3.5 h-3.5 text-[var(--auron-text-tertiary)]" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--auron-accent)' }} />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-2.5">
                  <div className="text-[9px] text-[var(--auron-text-tertiary)] leading-tight">{kpi.label}</div>
                  <div className="mt-1 text-[11px] sm:text-xs font-semibold tabular-nums text-[var(--auron-text)]">{kpi.value}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-3">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-semibold text-[var(--auron-text-secondary)]">Portfolio de productos</span>
                <span className="flex items-center gap-1 text-[9px] text-[var(--auron-text-tertiary)]">
                  <TrendingUp className="w-2.5 h-2.5" /> Un núcleo, 4 verticales
                </span>
              </div>
              <div className="space-y-1.5">
                {portfolio.map((p) => (
                  <div key={p.name} className="flex items-center gap-2.5 rounded-lg border border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)] px-2.5 py-1.5">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ background: p.gradient }}>
                      <p.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="flex-1 min-w-0 truncate text-[10px] font-medium text-[var(--auron-text)]">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold text-[var(--auron-text-secondary)]">Ingresos de la compañía · 12 meses</span>
              </div>
              <div className="flex items-end gap-1.5 h-14">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: i >= bars.length - 3 ? gradient : 'var(--auron-bg-tertiary)',
                      opacity: i >= bars.length - 3 ? 1 : 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
