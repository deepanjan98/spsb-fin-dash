import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Building2, Eye, EyeOff, KeyRound, User, Moon, Sun } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300 text-on-background">
      {/* Theme Toggle Top Right */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 bg-surface-container-low rounded-full shadow-md text-on-surface hover:bg-surface-container transition-all z-20"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-[1000px] flex rounded-2xl overflow-hidden shadow-2xl glass-panel border border-outline-variant/30 relative z-10"
      >
        {/* Left column - Illustration */}
        <div className="hidden md:flex w-1/2 bg-primary flex-col justify-between p-12 text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086925-920a0f05537d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-10 h-10 text-primary-fixed" />
              <div>
                <h1 className="text-2xl font-bold font-headline-md tracking-tight">SPSB Construction</h1>
                <p className="text-primary-fixed text-sm tracking-widest uppercase font-label-md opacity-80">Pvt. Ltd.</p>
              </div>
            </div>
            <h2 className="text-4xl font-display-lg leading-tight mb-4">Enterprise<br />Finance Analytics</h2>
            <p className="text-on-primary/80 text-body-lg max-w-md">
              Comprehensive financial oversight, project tracking, and intelligent insights for construction operations.
            </p>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 inline-block">
              <p className="text-sm font-label-md uppercase tracking-wider mb-1 opacity-70">Demo Credentials</p>
              <p className="text-sm font-data-mono">User: admin123</p>
              <p className="text-sm font-data-mono">Pass: pass123</p>
            </div>
          </div>
        </div>

        {/* Right column - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-surface-container-lowest">
          <div className="md:hidden flex items-center gap-3 mb-8 text-primary">
            <Building2 className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold font-headline-md tracking-tight">SPSB Construction</h1>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-headline-lg font-bold text-on-background mb-2">Welcome back</h2>
            <p className="text-on-surface-variant text-body-lg">Please enter your credentials to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-error-container text-on-error-container p-4 rounded-lg text-sm font-body-md border border-error/20"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md text-on-surface-variant mb-1.5 uppercase tracking-wide">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-surface-container pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-background"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-label-md text-on-surface-variant mb-1.5 uppercase tracking-wide">Password</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container pl-10 pr-12 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-background"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-background transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary/50 w-4 h-4" />
                <span className="text-on-surface-variant group-hover:text-on-background transition-colors">Remember me</span>
              </label>
              <button
                type="button"
                className="text-primary font-semibold hover:underline"
                title="Coming Soon"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-on-primary py-3.5 rounded-xl font-bold text-body-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Mobile-only demo credentials */}
          <div className="md:hidden mt-8 bg-surface-container border border-outline-variant/30 rounded-xl p-4">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-3">Demo Credentials</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-wider mb-0.5">Username</p>
                <p className="text-on-background font-mono text-sm font-semibold">admin123</p>
              </div>
              <div className="w-px h-8 bg-outline-variant/40"></div>
              <div>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-wider mb-0.5">Password</p>
                <p className="text-on-background font-mono text-sm font-semibold">pass123</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
