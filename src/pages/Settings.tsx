import { Settings as SettingsIcon, Shield, Bell, Eye, Palette } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { addToast } = useToast();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="animate-fade-in max-w-4xl">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><SettingsIcon className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Settings</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Application preferences & security</p>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        {/* Appearance */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-background tracking-tight">Appearance</h3>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-on-background">Dark Mode</p>
              <p className="text-sm text-on-surface-variant">Toggle dark theme across the application</p>
            </div>
            <button 
              onClick={toggleTheme}
              className={`w-14 h-8 rounded-full transition-colors relative ${theme === 'dark' ? 'bg-primary' : 'bg-surface-container'}`}
            >
              <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${theme === 'dark' ? 'right-1 translate-x-0' : 'left-1 translate-x-0'}`}></div>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-background tracking-tight">Notifications</h3>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold text-on-background">Email Alerts</p>
              <p className="text-sm text-on-surface-variant">Receive weekly financial summaries</p>
            </div>
            <button onClick={() => addToast('Email alerts toggled.', 'success')} className="w-14 h-8 rounded-full bg-primary relative"><div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"></div></button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-on-background">Push Notifications</p>
              <p className="text-sm text-on-surface-variant">Browser notifications for critical budget alerts</p>
            </div>
            <button onClick={() => addToast('Push alerts toggled.', 'success')} className="w-14 h-8 rounded-full bg-surface-container relative"><div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white"></div></button>
          </div>
        </div>

        {/* Security */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-background tracking-tight">Security</h3>
          </div>
          <button 
            onClick={() => addToast('Password reset email sent.', 'info')}
            className="px-4 py-2 border border-outline-variant text-sm font-bold rounded-lg hover:bg-surface-container transition-colors"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
