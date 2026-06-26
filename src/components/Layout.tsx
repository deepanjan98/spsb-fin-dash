import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="md:ml-72 flex-1 min-h-screen flex flex-col w-full">
        <TopNav onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="pt-20 md:pt-24 px-4 md:px-10 pb-8 flex-1">
          <Outlet />
        </div>
        <footer className="w-full py-4 border-t border-outline-variant/30 bg-surface-container-low flex flex-col md:flex-row justify-between items-center px-4 md:px-10 mt-auto gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-on-surface-variant text-xs md:text-sm font-semibold">
              © {new Date().getFullYear()} SPSB Construction Pvt. Ltd. | Executive Dashboard
            </p>
            <p className="text-on-surface-variant/60 text-[10px] md:text-xs italic mt-1">
              * All information provided herein is for demonstration purposes only.
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-on-surface-variant">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Audit Logs</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] md:text-xs font-bold tracking-widest text-primary hover:text-primary-fixed hover:bg-primary/10 px-3 py-1.5 rounded-full transition-all"
          >
            BACK TO TOP ↑
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
