import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './admin/context/AuthContext';
import { ProtectedRoute } from './admin/components/ProtectedRoute';
import ScrollToTop from './components/shared/ScrollToTop';

// Public site
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin
const Login = lazy(() => import('./admin/pages/Login'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const InsightForm = lazy(() => import('./admin/pages/InsightForm'));
const Messages = lazy(() => import('./admin/pages/Messages'));

const PageFallback = () => <div className="min-h-screen bg-ivory" />;

/** Chrome shared by every public page. */
function SiteLayout() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

/** Every /admin page except login requires a token. */
function AdminGuard() {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}

function App() {
  return (
    <AuthProvider>
      {/* reducedMotion="user": Framer skips transform animations for visitors who ask for less motion. */}
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy Pitches Creative URLs */}
            <Route path="/technology" element={<Navigate to="/services" replace />} />
            <Route path="/branding" element={<Navigate to="/work" replace />} />
            <Route path="/projects/*" element={<Navigate to="/work" replace />} />
            <Route path="/about/*" element={<Navigate to="/about" replace />} />
            <Route path="/insights/all" element={<Navigate to="/insights" replace />} />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin/login" element={<Suspense fallback={<PageFallback />}><Login /></Suspense>} />
          <Route element={<Suspense fallback={<PageFallback />}><AdminGuard /></Suspense>}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/insights/new" element={<InsightForm />} />
            <Route path="/admin/insights/:id/edit" element={<InsightForm />} />
            <Route path="/admin/messages" element={<Messages />} />
          </Route>
        </Routes>
      </MotionConfig>
    </AuthProvider>
  );
}

export default App;
