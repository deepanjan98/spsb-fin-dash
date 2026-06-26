import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import FinancialOverview from './pages/FinancialOverview';
import Projects from './pages/Projects';
import CashFlow from './pages/CashFlow';
import Revenue from './pages/Revenue';
import Expenses from './pages/Expenses';
import BudgetVsActual from './pages/BudgetVsActual';
import Invoices from './pages/Invoices';
import Clients from './pages/Clients';
import Vendors from './pages/Vendors';
import Loans from './pages/Loans';
import Assets from './pages/Assets';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              
              <Route path="financial-overview" element={<FinancialOverview />} />
              <Route path="projects" element={<Projects />} />
              <Route path="cash-flow" element={<CashFlow />} />
              <Route path="revenue" element={<Revenue />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="budget-vs-actual" element={<BudgetVsActual />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="clients" element={<Clients />} />
              <Route path="vendors" element={<Vendors />} />
              <Route path="loans" element={<Loans />} />
              <Route path="assets" element={<Assets />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />

              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
