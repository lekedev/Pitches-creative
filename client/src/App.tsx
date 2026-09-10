import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './admin/context/AuthContext';
import { ProtectedRoute } from './admin/components/ProtectedRoute';
import ScrollToTop from './components/shared/ScrollToTop';

// Public site
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightsAll = lazy(() => import('./pages/InsightsAll'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Technology = lazy(() => import('./pages/Technology'));
const Branding = lazy(() => import('./pages/Branding'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetails'));
const Contact = lazy(() => import('./pages/Contact'));

// Admin
const Login = lazy(() => import('./admin/pages/Login'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const InsightForm = lazy(() => import('./admin/pages/InsightForm'));
const Messages = lazy(() => import('./admin/pages/Messages'));

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
        <Routes>
          {/* Public site */}
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/all" element={<InsightsAll />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/technology/" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/insights/new" element={<InsightForm />} />
          <Route path="admin/messages" element={<Messages />} />

          {/* Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/insights/new"
            element={
              <ProtectedRoute>
                <InsightForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/insights/:id/edit"
            element={
              <ProtectedRoute>
                <InsightForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;