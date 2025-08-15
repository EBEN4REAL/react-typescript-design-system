import { Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home';
import DesignSystem from '@/pages/DesignSystem';
import LoginPage from '@/pages/Login';
import SignUpPage from '@/pages/Signup';

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="p-4 bg-gray-50 flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/design-system" className="hover:underline">Design System</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
}
