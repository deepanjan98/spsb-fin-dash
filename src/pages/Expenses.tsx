import { TrendingDown } from 'lucide-react';
import { expenseCategories } from '../data/mockData';
import { motion } from 'framer-motion';

const Expenses = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><TrendingDown className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Expenses</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Category-wise cost analysis - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Expense Categories */}
      <div className="space-y-6">
        {expenseCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest border border-outline-variant/30 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-on-background tracking-tight">{cat.category}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${cat.trend.startsWith('+') ? 'bg-error/10 text-error' : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    }`}>{cat.trend} YoY</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">{cat.items.join(' • ')}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tight text-on-background">{cat.amount}</p>
                  <p className="text-xs text-on-surface-variant font-medium">{cat.percentage}% of total</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${cat.percentage}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="bg-primary h-full rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
