export interface ProductConfig {
  id: string;
  name: string;
  label: string;
  href: string;
  external: boolean;
  status: 'live' | 'dev' | 'planned';
  gradient: string;
  icon: string;
}

export const PRODUCT_CONFIG: ProductConfig[] = [
  {
    id: 'beauty',
    name: 'Auron Suite',
    label: 'Beauty Edition',
    href: 'https://beauty.auronsuite.com',
    external: true,
    status: 'live',
    gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)',
    icon: 'Building2',
  },
  {
    id: 'restaurant',
    name: 'Auron Restaurant OS',
    label: 'Restaurant Edition',
    href: '/products#restaurant',
    external: false,
    status: 'dev',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'hospitality',
    name: 'Auron Hospitality',
    label: 'Hospitality Edition',
    href: '/products#hospitality',
    external: false,
    status: 'dev',
    gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)',
    icon: 'Hotel',
  },
  {
    id: 'health',
    name: 'Auron Health',
    label: 'Medical Edition',
    href: '/products#health',
    external: false,
    status: 'planned',
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    icon: 'HeartPulse',
  },
  {
    id: 'retail',
    name: 'Auron Retail',
    label: 'Retail Edition',
    href: '/products#retail',
    external: false,
    status: 'planned',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    icon: 'Store',
  },
];

export function getProductConfig(id: string): ProductConfig | undefined {
  return PRODUCT_CONFIG.find((p) => p.id === id);
}

export function getLiveProduct(): ProductConfig | undefined {
  return PRODUCT_CONFIG.find((p) => p.status === 'live');
}

export function getProductHref(id: string): string {
  const product = getProductConfig(id);
  return product?.href ?? '/products';
}

export function isProductExternal(id: string): boolean {
  const product = getProductConfig(id);
  return product?.external ?? false;
}