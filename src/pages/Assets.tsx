import { Package } from 'lucide-react';
import { assetsData } from '../data/mockData';
import { motion } from 'framer-motion';

const Assets = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Package className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Assets Registry</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Fixed assets, machinery & depreciation</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Asset Name</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Purchase Cost</th>
                <th className="px-4 py-4">Current Value</th>
                <th className="px-4 py-4">Depreciation</th>
                <th className="px-4 py-4">Location</th>
                <th className="px-4 md:px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {assetsData.map((asset, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-surface-container/30 transition-colors"
                >
                  <td className="px-4 md:px-8 py-4 font-bold text-on-background text-sm">
                    {asset.name}
                    <div className="text-[10px] text-on-surface-variant font-normal mt-0.5">{asset.id}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-on-surface-variant">{asset.category}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">
                    {asset.cost}
                    <div className="text-[10px] text-on-surface-variant font-normal mt-0.5">{asset.purchased}</div>
                  </td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background font-bold">{asset.current}</td>
                  <td className={`px-4 py-4 font-mono text-sm font-bold ${asset.depreciation === 'Appreciated' ? 'text-emerald-600' : 'text-error'}`}>{asset.depreciation}</td>
                  <td className="px-4 py-4 text-sm text-on-surface-variant">{asset.location}</td>
                  <td className="px-4 md:px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      asset.status === 'In Use' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600'
                    }`}>{asset.status}</span>
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

export default Assets;
