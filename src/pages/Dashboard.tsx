import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Banknote, ShoppingCart, TrendingUp, Wallet,
  TrendingUp as TrendingUpIcon, AlertTriangle, Star, Shield, Watch, Settings, Activity
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  kpis, revenueVsExpensesData, expenseBreakdown,
  projectProfitability, aiInsights, projectsTableData
} from '../data/mockData';
import { useToast } from '../context/ToastContext';

const Dashboard = () => {
  const [currentInsights, setCurrentInsights] = useState(aiInsights);
  const { addToast } = useToast();

  useEffect(() => {
    // Simulate rotating insights
    const interval = setInterval(() => {
      setCurrentInsights([...currentInsights].sort(() => Math.random() - 0.5));
    }, 15000);
    return () => clearInterval(interval);
  }, [currentInsights]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-2">Finance Analytics Dashboard</h2>
          <p className="text-sm md:text-base text-on-surface-variant/80 font-medium tracking-wide">Financial performance overview - FY 2025-26</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Report Date</p>
          <p className="text-xl md:text-2xl text-primary font-bold tracking-tight">{formattedDate}</p>
        </div>
      </section>

      {/* KPI Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total Revenue */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <Banknote className="w-6 h-6 text-primary" />
            <span className="text-emerald-600 text-[10px] flex items-center bg-emerald-500/10 px-2 py-1 rounded-md font-bold tracking-wider">▲ {kpis.totalRevenue.trend}%</span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1 relative z-10 truncate">Total Revenue</p>
          <p className="text-2xl xl:text-3xl font-bold tracking-tight text-primary relative z-10 truncate">₹{kpis.totalRevenue.value}</p>
        </div>

        {/* Expenses */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <ShoppingCart className="w-6 h-6 text-on-secondary-container" />
            <span className="text-error text-[10px] flex items-center bg-error/10 px-2 py-1 rounded-md font-bold tracking-wider">▼ {kpis.expenses.trend}%</span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1 relative z-10 truncate">Expenses</p>
          <p className="text-2xl xl:text-3xl font-bold tracking-tight text-on-background relative z-10 truncate">₹{kpis.expenses.value}</p>
        </div>

        {/* Net Profit */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <span className="text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center bg-emerald-500/20 px-2 py-1 rounded-md font-bold tracking-wider">▲ {kpis.netProfit.trend}%</span>
          </div>
          <p className="text-emerald-800 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider mb-1 relative z-10 truncate">Net Profit</p>
          <p className="text-2xl xl:text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400 relative z-10 truncate">₹{kpis.netProfit.value}</p>
        </div>

        {/* Cash in Bank */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <Wallet className="w-6 h-6 text-secondary" />
          </div>
          <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1 relative z-10 truncate">Cash in Bank</p>
          <p className="text-2xl xl:text-3xl font-bold tracking-tight text-on-background relative z-10 truncate">₹{kpis.cashInBank.value}</p>
        </div>
      </section>

      {/* Main Charts Grid */}
      <section className="grid grid-cols-12 gap-6 mb-8">
        {/* Line Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-semibold text-on-background">Revenue vs Expenses</h3>
              <p className="text-sm text-on-surface-variant">Monthly fiscal comparison for the current year</p>
            </div>
          </div>
          <div className="h-64 w-full text-sm">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueVsExpensesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="var(--outline)" tick={{ fill: 'var(--outline)', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--surface-container-lowest)',
                    borderRadius: '12px',
                    border: '1px solid var(--outline-variant)',
                    color: 'var(--on-background)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                  }}
                  itemStyle={{ color: 'var(--on-background)', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="expenses" stroke="var(--secondary)" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold tracking-tight mb-6 opacity-90 text-white">Executive Financial Health</h3>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90 drop-shadow-md">
                    <circle className="text-white/20" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeWidth="8"></circle>
                    <motion.circle
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 25 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-emerald-400 drop-shadow-lg" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeDasharray="251.2" strokeWidth="8">
                    </motion.circle>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold tracking-tighter text-white">91</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></div>
                    <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">Excellent</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">Company liquidity and profitability margins are in the top 5th percentile.</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
              <Shield className="w-40 h-40" />
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl shadow-sm flex-1">
            <h3 className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-4">AI Insights</h3>
            <div className="space-y-4">
              {currentInsights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => addToast(`Insight clicked: ${insight.title}`, 'info')}
                  className={`flex gap-4 p-3 rounded-lg transition-colors cursor-pointer group ${insight.type === 'negative'
                    ? 'border border-red-100 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10'
                    : 'bg-surface-container hover:bg-secondary-container/10'
                    }`}
                >
                  {insight.icon === 'trending_up' && <TrendingUpIcon className="text-primary w-5 h-5" />}
                  {insight.icon === 'warning' && <AlertTriangle className="text-red-600 w-5 h-5" />}
                  {insight.icon === 'stars' && <Star className="text-emerald-600 w-5 h-5" />}
                  <div>
                    <p className="text-sm text-on-background font-semibold">{insight.title}</p>
                    <p className="text-xs text-on-surface-variant">{insight.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Secondary Analytics */}
      <section className="grid grid-cols-12 gap-6 mb-10">
        {/* Expense Breakdown Donut */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold tracking-tight mb-8 text-on-background">Expense Breakdown</h3>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-8 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--surface-container-lowest)',
                      borderRadius: '12px',
                      border: '1px solid var(--outline-variant)'
                    }}
                    itemStyle={{ color: 'var(--on-background)', fontWeight: 600 }}
                    wrapperStyle={{ zIndex: 50 }}
                  />
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="var(--surface-container-lowest)"
                    strokeWidth={3}
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-primary dark:text-primary-fixed">₹5.1 Cr</span>
                <span className="text-xs text-on-surface-variant">Total</span>
              </div>
            </div>
            <div className="w-full space-y-2">
              {expenseBreakdown.map((item) => (
                <div key={item.name} className="flex justify-between text-sm text-on-background">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    {item.name}
                  </span>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Profitability Bars */}
        <div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-on-background">Project Profitability</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 bg-primary rounded-sm"></div> Revenue</span>
              <span className="text-xs text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm"></div> Profit</span>
            </div>
          </div>
          <div className="space-y-6">
            {projectProfitability.map((proj) => (
              <div key={proj.name} className="space-y-2">
                <div className="flex justify-between text-sm font-semibold text-on-background">
                  <span>{proj.name}</span>
                  <span className="text-primary dark:text-primary-fixed">₹{proj.value}</span>
                </div>
                <div className="w-full bg-surface-container h-4 rounded-full flex overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${proj.revProgress}%` }} className="bg-primary h-full"></motion.div>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${proj.profitProgress}%` }} className="bg-emerald-500 h-full"></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Analytics & Loan */}
      <section className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-on-background">Loan & Liability</h3>
          <div className="bg-secondary-container/10 border border-secondary-container p-4 rounded-xl mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold">Kotak Mahindra Bank</p>
                <p className="text-base font-bold text-primary dark:text-primary-fixed">Equipment Loan #8841</p>
              </div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold">OPEN</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-on-background">Repayment Progress</span>
              <span className="text-sm font-bold text-on-background">78%</span>
            </div>
            <div className="w-full bg-white dark:bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[78%]"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-3 rounded-lg">
              <p className="text-[10px] text-on-surface-variant uppercase font-bold">Risk Level</p>
              <p className="font-bold text-secondary dark:text-on-secondary-container">Medium</p>
            </div>
            <div className="bg-surface-container p-3 rounded-lg">
              <p className="text-[10px] text-on-surface-variant uppercase font-bold">Interest Rate</p>
              <p className="font-bold text-primary dark:text-primary-fixed">8.4% p.a.</p>
            </div>
          </div>
        </div>

        {/* Operational Metrics Grid */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex flex-col justify-between">
            <Shield className="w-6 h-6 text-primary mb-2" />
            <div>
              <p className="text-xs text-on-surface-variant font-bold">Ongoing Projects</p>
              <p className="text-2xl font-bold text-on-background">06</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex flex-col justify-between">
            <Watch className="w-6 h-6 text-red-600 mb-2" />
            <div>
              <p className="text-xs text-on-surface-variant font-bold">Delayed Projects</p>
              <p className="text-2xl font-bold text-on-background">02</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex flex-col justify-between">
            <Activity className="w-6 h-6 text-emerald-600 mb-2" />
            <div>
              <p className="text-xs text-on-surface-variant font-bold">Avg Profit / Proj</p>
              <p className="text-2xl font-bold text-on-background">₹18.5 L</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex flex-col justify-between">
            <Settings className="w-6 h-6 text-secondary mb-2" />
            <div>
              <p className="text-xs text-on-surface-variant font-bold">Material Consum.</p>
              <p className="text-2xl font-bold text-on-background">₹2.4 Cr</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl col-span-2 shadow-sm">
            <div className="flex justify-between mb-4">
              <p className="text-sm font-semibold text-on-background">Working Capital</p>
              <TrendingUpIcon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl tracking-tight font-bold mb-2 text-on-background">₹4.2 Cr</p>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-md">+12%</span>
              <span className="text-xs text-on-surface-variant font-medium">from last Q</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
            <p className="text-xs text-on-surface-variant uppercase mb-2 font-bold tracking-widest">ROI</p>
            <p className="text-2xl font-bold tracking-tight text-primary">24.2%</p>
            <div className="mt-4 flex gap-1 items-end h-8">
              <div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[40%] rounded-sm"></div>
              <div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[60%] rounded-sm"></div>
              <div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[55%] rounded-sm"></div>
              <div className="bg-primary hover:bg-primary/90 transition-colors w-full h-[90%] rounded-sm shadow-sm"></div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
            <p className="text-xs text-on-surface-variant uppercase mb-2 font-bold tracking-widest">Debt-to-Rev</p>
            <p className="text-2xl font-bold tracking-tight text-on-background">0.24</p>
            <p className="text-[10px] text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-md inline-block font-bold mt-2">Optimal Range</p>
          </div>
        </div>
      </section>

      {/* Project Performance Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden mb-10">
        <div className="px-8 py-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
          <h3 className="text-xl font-semibold text-on-background">Project Performance Details</h3>
          <div className="flex gap-2">
            <button onClick={() => addToast('Opening filters...', 'info')} className="px-3 py-1.5 bg-surface border border-outline-variant rounded-lg text-xs font-bold hover:bg-surface-container transition-colors text-on-background shadow-sm hover:shadow-md">Filters</button>
            <button onClick={() => addToast('Loading all project records...', 'success')} className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">View All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-8 py-4">Project</th>
                <th className="px-4 py-4">Budget</th>
                <th className="px-4 py-4">Spent</th>
                <th className="px-4 py-4">Revenue</th>
                <th className="px-4 py-4">Profit</th>
                <th className="px-4 py-4">Completion</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {projectsTableData.map((row) => (
                <tr key={row.id} className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-8 py-4">
                    <p className="font-semibold text-on-background">{row.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{row.type}</p>
                  </td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background">{row.budget}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background">{row.spent}</td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background">{row.revenue}</td>
                  <td className={`px-4 py-4 font-mono text-sm font-bold ${row.profit.startsWith('-') ? 'text-red-600' : 'text-emerald-600'}`}>{row.profit}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-surface-container h-2 rounded-full overflow-hidden">
                        <div className={`${row.profit.startsWith('-') ? 'bg-error' : 'bg-primary'} h-full`} style={{ width: `${row.completion}%` }}></div>
                      </div>
                      <span className="text-xs text-on-background">{row.completion}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${row.status === 'On Track' ? 'bg-emerald-100 text-emerald-800' :
                      row.status === 'Milestone' ? 'bg-primary/10 text-primary dark:text-primary-fixed' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
