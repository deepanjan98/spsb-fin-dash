import { BarChart4 } from 'lucide-react';
import { budgetVsActual } from '../data/mockData';
import { motion } from 'framer-motion';

const BudgetVsActual = () => {
  const totalBudget = budgetVsActual.reduce((s, r) => s + r.budgeted, 0);
  const totalActual = budgetVsActual.reduce((s, r) => s + r.actual, 0);

  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><BarChart4 className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Budget vs Actual</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Variance analysis across cost centers - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">Total Budgeted</p>
          <p className="text-3xl font-bold tracking-tight text-on-background">₹{(totalBudget / 100).toFixed(1)} Cr</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">Total Actual</p>
          <p className="text-3xl font-bold tracking-tight text-on-background">₹{(totalActual / 100).toFixed(1)} Cr</p>
        </div>
        <div className={`p-6 rounded-2xl border ${totalActual > totalBudget ? 'bg-error/10 border-error/20' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
          <p className="text-xs uppercase font-bold tracking-widest mb-2">Net Variance</p>
          <p className={`text-3xl font-bold tracking-tight ${totalActual > totalBudget ? 'text-error' : 'text-emerald-700 dark:text-emerald-400'}`}>
            {totalActual > totalBudget ? '-' : '+'}₹{(Math.abs(totalBudget - totalActual) / 100).toFixed(1)} Cr
          </p>
        </div>
      </div>

      {/* Variance Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 md:px-8 py-4 border-b border-outline-variant/30 bg-surface-container-low/50">
          <h3 className="text-lg md:text-xl font-semibold text-on-background tracking-tight">Category Variance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Category</th>
                <th className="px-4 py-4">Budgeted (L)</th>
                <th className="px-4 py-4">Actual (L)</th>
                <th className="px-4 py-4">Variance (L)</th>
                <th className="px-4 md:px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {budgetVsActual.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-surface-container/30 transition-colors"
                >
                  <td className="px-4 md:px-8 py-4 font-semibold text-on-background text-sm">{row.category}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">₹{row.budgeted}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background font-bold">₹{row.actual}</td>
                  <td className={`px-4 py-4 font-mono text-sm font-bold ${row.variance > 0 ? 'text-emerald-600' : 'text-error'}`}>
                    {row.variance > 0 ? '+' : ''}₹{row.variance}
                  </td>
                  <td className="px-4 md:px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${row.status === 'Under' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-error/10 text-error'
                      }`}>{row.status} Budget</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default BudgetVsActual;
