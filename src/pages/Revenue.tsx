import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueBySource, revenueMonthly } from '../data/mockData';

const Revenue = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><TrendingUp className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Revenue</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Income streams & monthly trends - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Revenue by Source */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {revenueBySource.map((item, idx) => (
          <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-3">{item.source}</p>
            <p className="text-2xl font-bold tracking-tight text-on-background mb-2">{item.amount}</p>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${item.percentage}%` }}></div>
            </div>
            <p className="text-xs text-on-surface-variant mt-2 font-medium">{item.percentage}% of total</p>
          </div>
        ))}
      </div>

      {/* Stacked Area Chart */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 p-4 md:p-8 rounded-2xl shadow-sm">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-on-background mb-6">Monthly Revenue by Segment</h3>
        <div className="h-64 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueMonthly} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--outline-variant)', color: 'var(--on-background)' }} />
              <Area type="monotone" dataKey="residential" stackId="1" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.3} strokeWidth={2} />
              <Area type="monotone" dataKey="commercial" stackId="1" stroke="var(--secondary)" fill="var(--secondary)" fillOpacity={0.3} strokeWidth={2} />
              <Area type="monotone" dataKey="govt" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <span className="flex items-center gap-2 text-xs text-on-surface-variant"><div className="w-3 h-3 rounded-sm bg-primary"></div>Residential</span>
          <span className="flex items-center gap-2 text-xs text-on-surface-variant"><div className="w-3 h-3 rounded-sm bg-secondary"></div>Commercial</span>
          <span className="flex items-center gap-2 text-xs text-on-surface-variant"><div className="w-3 h-3 rounded-sm bg-emerald-500"></div>Government</span>
        </div>
      </section>
    </div>
  );
};

export default Revenue;
