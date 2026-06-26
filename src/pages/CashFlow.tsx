import { Banknote } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cashFlowData } from '../data/mockData';

const CashFlow = () => {
  const totalInflow = cashFlowData.reduce((s, d) => s + d.inflow, 0);
  const totalOutflow = cashFlowData.reduce((s, d) => s + d.outflow, 0);
  const netCashFlow = totalInflow - totalOutflow;

  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Banknote className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Cash Flow</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Inflows, outflows & net liquidity - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
          <p className="text-xs text-emerald-700 dark:text-emerald-400 uppercase font-bold tracking-widest mb-2">Total Inflow</p>
          <p className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">₹{(totalInflow / 100).toFixed(1)} Cr</p>
        </div>
        <div className="bg-error/10 border border-error/20 p-6 rounded-2xl">
          <p className="text-xs text-error uppercase font-bold tracking-widest mb-2">Total Outflow</p>
          <p className="text-3xl font-bold tracking-tight text-error">₹{(totalOutflow / 100).toFixed(1)} Cr</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
          <p className="text-xs text-primary uppercase font-bold tracking-widest mb-2">Net Cash Flow</p>
          <p className="text-3xl font-bold tracking-tight text-primary">₹{(netCashFlow / 100).toFixed(1)} Cr</p>
        </div>
      </div>

      {/* Chart */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 p-4 md:p-8 rounded-2xl shadow-sm mb-8">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-on-background mb-6">Monthly Cash Flow</h3>
        <div className="h-64 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cashFlowData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="cfInflow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="cfOutflow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--error)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--error)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--outline-variant)', color: 'var(--on-background)' }} />
              <Area type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={3} fill="url(#cfInflow)" />
              <Area type="monotone" dataKey="outflow" stroke="var(--error)" strokeWidth={3} fill="url(#cfOutflow)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default CashFlow;
