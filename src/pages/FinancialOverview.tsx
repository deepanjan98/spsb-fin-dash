import { financialOverviewData } from '../data/mockData';
import { Building2, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const FinancialOverview = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Building2 className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Financial Overview</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">P&L Summary and Balance Sheet - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* P&L Summary */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="px-4 md:px-8 py-4 border-b border-outline-variant/30 bg-surface-container-low/50">
          <h3 className="text-lg md:text-xl font-semibold text-on-background tracking-tight">Profit & Loss Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Line Item</th>
                <th className="px-4 py-4">FY 2025-26</th>
                <th className="px-4 py-4">FY 2024-25</th>
                <th className="px-4 md:px-8 py-4">YoY Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {financialOverviewData.plSummary.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-4 md:px-8 py-4 font-semibold text-on-background text-sm">{row.label}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background font-bold">{row.fy2526}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">{row.fy2425}</td>
                  <td className="px-4 md:px-8 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold ${row.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-error/10 text-error'
                      }`}>
                      {row.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {row.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Balance Sheet */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
        {financialOverviewData.balanceSheet.map((item, idx) => (
          <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-2">{item.label}</p>
            <p className="text-2xl font-bold tracking-tight text-on-background">{item.value}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FinancialOverview;
