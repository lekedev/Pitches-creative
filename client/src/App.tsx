// App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Work from './pages/Work';
// import Services from './pages/Services';
// import Testimonials from './pages/Testimonials';

import Insights from './pages/Insights';
import InsightsAll from './pages/InsightsAll';
import Technology from './pages/Technology';
import Branding from './pages/Branding';
import ProjectDetail from './pages/ProjectDetails';
import Contact from './pages/Contact';

import { AuthProvider } from "./admin/context/AuthContext";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";
import { Login } from "./admin/pages/Login"
import Dashboard from "./admin/pages/Dashboard";
import InsightForm from "./admin/pages/InsightForm";
import Messages from "./admin/pages/Messages";





function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  

  return (
    <div className="app">
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/all" element={<InsightsAll />} />
        <Route path="/technology/" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

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



