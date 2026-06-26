import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Search, Bell, Download, Calendar, Moon, Sun, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopNavProps {
  onMenuToggle: () => void;
}

const TopNav = ({ onMenuToggle }: TopNavProps) => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="h-16 w-full md:w-[calc(100%-288px)] fixed right-0 top-0 z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-4 md:px-10 gap-2 md:gap-4 shadow-sm border-b border-outline-variant/30">
      <div className="flex items-center gap-3 md:gap-6">
        {/* Hamburger (mobile only) */}
        <button onClick={onMenuToggle} className="md:hidden p-2 text-on-surface-variant hover:text-on-background hover:bg-surface-container rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
        </button>

        {/* Search (hidden on small mobile) */}
        <div className="hidden sm:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/30 flex-shrink-0">
          <Search className="w-4 h-4 text-outline mr-2" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-32 xl:w-64 placeholder:text-on-surface-variant/50 outline-none text-on-background transition-all"
            placeholder="Search analytics..."
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') addToast('Search functionality coming soon!', 'info');
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <div className="hidden md:flex items-center gap-2 lg:gap-4 text-on-surface-variant text-xs font-bold tracking-wider">
          <span className="text-primary border-b-2 border-primary cursor-pointer pb-1 transition-colors hover:text-primary/80 whitespace-nowrap">
            FY 2025-26
          </span>
        </div>

        <div className="hidden md:block text-xs text-on-surface-variant font-medium whitespace-nowrap">
          {formattedDate}
        </div>

        <div className="flex items-center gap-1 md:gap-3 text-on-surface-variant">
          <button onClick={toggleTheme} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => addToast('No new notifications.', 'info')} className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button onClick={() => addToast('Downloading report...', 'success')} className="hidden md:flex p-2 hover:bg-surface-container rounded-full transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button onClick={() => addToast('Opening calendar...', 'info')} className="hidden md:flex p-2 hover:bg-surface-container rounded-full transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden md:block h-8 w-px bg-outline-variant"></div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 text-xs md:text-sm font-bold text-error hover:bg-error/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
          <button onClick={() => addToast('Exporting dashboard data...', 'success')} className="hidden md:flex ripple-btn bg-primary text-on-primary px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:bg-primary/90">
            Export
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
