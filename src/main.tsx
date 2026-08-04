import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './styles/auron.css'
import { ThemeProvider } from './lib/theme'
import { LanguageProvider } from './lib/i18n'
import { Layout } from './components/layout'
import { HomePage } from './pages/Home'

const ProductsPage = lazy(() => import('./pages/Products').then(m => ({ default: m.ProductsPage })))
const ServicesPage = lazy(() => import('./pages/Services').then(m => ({ default: m.ServicesPage })))
const AboutPage = lazy(() => import('./pages/About').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('./pages/Contact').then(m => ({ default: m.ContactPage })))
const BlogPage = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPage })))
const BlogPostPage = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPostPage })))
const PricingPage = lazy(() => import('./pages/Pricing').then(m => ({ default: m.PricingPage })))
const PrivacyPage = lazy(() => import('./pages/Legal').then(m => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/Legal').then(m => ({ default: m.TermsPage })))
const SecurityPage = lazy(() => import('./pages/Legal').then(m => ({ default: m.SecurityPage })))
const ComingSoonPage = lazy(() => import('./pages/ComingSoon').then(m => ({ default: m.ComingSoonPage })))
const NotFoundPage = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFoundPage })))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Suspense fallback={null}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/coming-soon" element={<ComingSoonPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
)
