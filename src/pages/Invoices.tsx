import { Receipt } from 'lucide-react';
import { invoicesData } from '../data/mockData';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';

const Invoices = () => {
  const { addToast } = useToast();

  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Receipt className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Invoices</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Billing & receivables tracking - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Invoices Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden mb-10">
        <div className="px-4 md:px-8 py-4 border-b border-outline-variant/30 bg-surface-container-low/50 flex justify-between items-center">
          <h3 className="text-lg md:text-xl font-semibold text-on-background tracking-tight">Recent Invoices</h3>
          <button
            onClick={() => addToast('Creating new invoice...', 'info')}
            className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            New Invoice
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Invoice ID</th>
                <th className="px-4 py-4">Client</th>
                <th className="px-4 py-4">Project</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">Due Date</th>
                <th className="px-4 md:px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {invoicesData.map((invoice, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-surface-container/30 transition-colors"
                >
                  <td className="px-4 md:px-8 py-4 font-mono text-sm text-primary font-semibold">{invoice.id}</td>
                  <td className="px-4 py-4 font-semibold text-on-background text-sm">{invoice.client}</td>
                  <td className="px-4 py-4 text-sm text-on-surface-variant">{invoice.project}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background font-bold">{invoice.amount}</td>
                  <td className="px-4 py-4 text-sm text-on-surface-variant">{invoice.due}</td>
                  <td className="px-4 md:px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${invoice.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
                        invoice.status === 'Pending' ? 'bg-secondary/10 text-secondary dark:text-on-secondary-fixed-variant' :
                          'bg-error/10 text-error'
                      }`}>{invoice.status}</span>
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

export default Invoices;
