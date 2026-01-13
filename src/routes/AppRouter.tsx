import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';

// Layouts
import AdminLayout from '../sections/admin/AdminLayout';
import LandingLayout from '../sections/landing/LandingLayout';

// Landing Pages
import Home from '../sections/landing/pages/Home';
import About from '../sections/landing/pages/About';
import Products from '../sections/landing/pages/Products';
import Contact from '../sections/landing/pages/Contact';
import Login from '../sections/landing/pages/Login';

// Admin Pages
import Dashboard from '../sections/admin/pages/Dashboard';
import UserManagement from '../sections/admin/pages/UserManagement';
import LegalAndDocumentation from '../sections/admin/pages/LegalAndDocumentation';
import UserAnalytics from '../sections/admin/pages/UserAnalytics';
import QuranManagement from '../sections/admin/pages/QuranManagement';
import PushNotifications from '../sections/admin/pages/PushNotifications';
import LogsManagement from '../sections/admin/pages/LogsManagement';
import AIService from '../sections/admin/pages/AIService';
import Profile from '../sections/admin/pages/Profile';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute allow={['admin', 'subadmin']} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/legal" element={<LegalAndDocumentation />} />
            <Route path="/admin/analytics" element={<UserAnalytics />} />
            <Route path="/admin/quran" element={<QuranManagement />} />
            <Route path="/admin/notifications" element={<PushNotifications />} />
            <Route path="/admin/logs" element={<LogsManagement />} />
            <Route path="/admin/ai" element={<AIService />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}