import { useToast } from '../context/ToastContext';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  LayoutDashboard, Building2, Briefcase, Banknote, TrendingUp, TrendingDown, 
  BarChart4, Receipt, Users, Store, CreditCard, Package, LineChart, FileText, Settings, X
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Financial Overview', path: '/financial-overview', icon: Building2 },
  { name: 'Projects', path: '/projects', icon: Briefcase },
  { name: 'Cash Flow', path: '/cash-flow', icon: Banknote },
  { name: 'Revenue', path: '/revenue', icon: TrendingUp },
  { name: 'Expenses', path: '/expenses', icon: TrendingDown },
  { name: 'Budget vs Actual', path: '/budget-vs-actual', icon: BarChart4 },
  { name: 'Invoices', path: '/invoices', icon: Receipt },
  { name: 'Clients', path: '/clients', icon: Users },
  { name: 'Vendors', path: '/vendors', icon: Store },
  { name: 'Loans & Liabilities', path: '/loans', icon: CreditCard },
  { name: 'Assets', path: '/assets', icon: Package },
  { name: 'Analytics', path: '/analytics', icon: LineChart },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { addToast } = useToast();
  const location = useLocation();

  // Auto-close sidebar on route change (mobile)
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <aside className={`
      w-72 h-screen fixed left-0 top-0 overflow-y-auto 
      bg-surface-container backdrop-blur-md shadow-lg
      flex flex-col py-6 z-[60] custom-scrollbar
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0
    `}>
      <div className="px-6 mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">SPSB Construction</h1>
          <p className="text-on-surface-variant text-xs tracking-widest font-bold uppercase opacity-70">Pvt. Ltd.</p>
        </div>
        <button onClick={onClose} className="md:hidden p-1 text-on-surface-variant hover:text-on-background transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm relative overflow-hidden group ${
                  isActive
                    ? 'text-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 -z-10" />
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                  )}
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="truncate">{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-6 mt-6">
        <button 
          onClick={() => addToast('New Project workflow initiated.', 'success')}
          className="ripple-btn w-full bg-primary text-on-primary py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          <span className="text-xl leading-none">+</span>
          New Project
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
