import { Store, Star } from 'lucide-react';
import { vendorsData } from '../data/mockData';
import { motion } from 'framer-motion';

const Vendors = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Store className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Vendors & Suppliers</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Supply chain partners & payable status</p>
          </div>
        </div>
      </section>

      {/* Vendors Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Vendor Name</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Total Orders</th>
                <th className="px-4 py-4">Pending Payables</th>
                <th className="px-4 py-4">Rating</th>
                <th className="px-4 md:px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {vendorsData.map((vendor, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-surface-container/30 transition-colors"
                >
                  <td className="px-4 md:px-8 py-4 font-bold text-on-background text-sm">{vendor.name}</td>
                  <td className="px-4 py-4 text-sm text-on-surface-variant">{vendor.category}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background font-bold">{vendor.totalOrders}</td>
                  <td className={`px-4 py-4 font-mono text-sm font-bold ${vendor.pending !== '₹0' ? 'text-error' : 'text-emerald-600'}`}>{vendor.pending}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
                      <Star className="w-4 h-4 fill-current" /> {vendor.rating}
                    </div>
                  </td>
                  <td className="px-4 md:px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      vendor.status === 'Active' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600'
                    }`}>{vendor.status}</span>
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

export default Vendors;
