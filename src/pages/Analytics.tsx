import { LineChart as LineChartIcon } from 'lucide-react';
import { yoyComparison, analyticsChartData } from '../data/mockData';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Analytics = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><LineChartIcon className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Analytics</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Year-over-Year trend forecasting</p>
          </div>
        </div>
      </section>

      {/* YoY Comparison Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-4 md:px-8 py-4">Metric</th>
                <th className="px-4 py-4">FY 23-24</th>
                <th className="px-4 py-4">FY 24-25</th>
                <th className="px-4 md:px-8 py-4">FY 25-26</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {yoyComparison.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-surface-container/30 transition-colors"
                >
                  <td className="px-4 md:px-8 py-4 font-bold text-on-background text-sm">{row.metric}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">{row.fy2324}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">{row.fy2425}</td>
                  <td className="px-4 md:px-8 py-4 font-mono text-sm text-primary font-bold">{row.fy2526}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trajectory Chart */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 p-4 md:p-8 rounded-2xl shadow-sm">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-on-background mb-6">3-Year Growth Trajectory (₹ Lakhs)</h3>
        <div className="h-64 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--outline-variant)" vertical={false} />
              <XAxis dataKey="year" stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
              <YAxis stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12 }} axisLine={false} tickLine={false} dx={-10} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--surface-container-lowest)', 
                  borderRadius: '12px', border: '1px solid var(--outline-variant)', color: 'var(--on-background)' 
                }} 
                itemStyle={{ color: 'var(--on-background)', fontWeight: 600 }}
              />
              <Line type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={4} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={4} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <span className="flex items-center gap-2 text-xs text-on-surface-variant"><div className="w-3 h-3 rounded-full bg-primary"></div>Revenue</span>
          <span className="flex items-center gap-2 text-xs text-on-surface-variant"><div className="w-3 h-3 rounded-full bg-emerald-500"></div>Net Profit</span>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
