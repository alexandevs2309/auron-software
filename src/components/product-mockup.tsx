import { LayoutDashboard, Calendar, Users, Package, BarChart3, Settings, Search, Bell, TrendingUp, Clock, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductMockupProps {
  gradient: string
  title: string
  eyebrow?: string
}

const navItems = [
  { icon: LayoutDashboard, label: 'Panel' },
  { icon: Calendar, label: 'Citas' },
  { icon: Users, label: 'Clientes' },
  { icon: Package, label: 'Inventario' },
  { icon: BarChart3, label: 'Reportes' },
]

const kpis = [
  { label: 'Ventas de hoy', value: 'RD$ 84,200', delta: '+12%' },
  { label: 'Citas de hoy', value: '38', delta: '+8%' },
  { label: 'Ganancias del período', value: 'RD$ 512,600', delta: '+15%' },
]

const bars = [42, 58, 46, 70, 62, 84, 76, 92, 68, 54, 80, 88]

const appointments = [
  { time: '09:00', name: 'María Peña', service: 'Corte y color', done: true },
  { time: '10:30', name: 'Carlos Jiménez', service: 'Barba premium', done: true },
  { time: '11:45', name: 'Laura Rodríguez', service: 'Manicure completo', done: false },
  { time: '02:15', name: 'Pedro Sánchez', service: 'Corte ejecutivo', done: false },
]

export function ProductMockup({ gradient, title, eyebrow = 'Panel de operaciones' }: ProductMockupProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)]">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f43f5e', opacity: 0.85 }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b', opacity: 0.85 }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981', opacity: 0.85 }} />
        <span className="ml-3 flex-1 max-w-[240px] truncate rounded-md px-3 py-1 text-[10px] text-[var(--auron-text-secondary)] bg-[var(--auron-bg-tertiary)]">
          app.auronsoftware.do/{title.toLowerCase().replace(/\s+/g, '-')}
        </span>
      </div>

      <div className="flex min-h-[280px]">
        <div className="hidden sm:flex flex-col gap-1 w-36 shrink-0 border-r border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)] px-3 py-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium',
                item.label === 'Panel'
                  ? 'text-white'
                  : 'text-[var(--auron-text-tertiary)]',
              )}
              style={item.label === 'Panel' ? { background: gradient } : undefined}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] text-[var(--auron-text-tertiary)]">
            <Settings className="w-3.5 h-3.5" />
            Ajustes
          </div>
        </div>

        <div className="flex-1 min-w-0 bg-[var(--auron-bg)]">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--auron-border-light)]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--auron-accent-text)' }}>{eyebrow}</div>
              <div className="text-xs font-semibold text-[var(--auron-text)]">{title}</div>
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
            <div className="grid grid-cols-3 gap-2">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-2.5">
                  <div className="text-[9px] text-[var(--auron-text-tertiary)] truncate">{kpi.label}</div>
                  <div className="mt-1 text-[11px] sm:text-xs font-semibold tabular-nums text-[var(--auron-text)] truncate">{kpi.value}</div>
                  <div className="mt-0.5 inline-flex items-center gap-1 text-[9px] font-medium" style={{ color: 'var(--auron-accent-text)' }}>
                    <TrendingUp className="w-2.5 h-2.5" />
                    {kpi.delta}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold text-[var(--auron-text-secondary)]">Ventas de los últimos 12 meses</span>
                <span className="flex items-center gap-1 text-[9px] text-[var(--auron-text-tertiary)]">
                  <Clock className="w-2.5 h-2.5" /> Mensual
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
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

            <div className="rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]">
              {appointments.map((appt) => (
                <div key={appt.name} className="flex items-center gap-3 px-3 py-2 border-b border-[var(--auron-border-light)] last:border-0">
                  <span className="w-7 h-7 rounded-lg bg-[var(--auron-bg-tertiary)] flex items-center justify-center">
                    {appt.done ? (
                      <Check className="w-3 h-3" style={{ color: 'var(--auron-accent-text)' }} />
                    ) : (
                      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--auron-gold)' }} />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-medium text-[var(--auron-text)] truncate">{appt.name}</div>
                    <div className="text-[9px] text-[var(--auron-text-tertiary)] truncate">{appt.service}</div>
                  </div>
                  <span className="text-[10px] tabular-nums text-[var(--auron-text-tertiary)]">{appt.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
