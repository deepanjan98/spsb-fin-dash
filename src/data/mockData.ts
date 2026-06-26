// ============================================================
// SPSB Construction Pvt. Ltd. - Mock Financial Data
// Fiscal Year: FY 2025-26 (April 2025 – March 2026)
// Report generated: Live (uses system date)
// ============================================================

// ---------- Dashboard KPIs ----------
export const kpis = {
  totalRevenue: { value: '18.42 Cr', trend: 22, isUp: true },
  expenses: { value: '9.85 Cr', trend: 6, isUp: false },
  netProfit: { value: '4.65 Cr', trend: 34, isUp: true },
  cashInBank: { value: '2.8 Cr', trend: null, isUp: null },
  receivables: { value: '3.1 Cr', progress: 75 },
  payables: { value: '1.2 Cr', progress: 35 },
  loan: { value: '45.0 L' },
};

// ---------- Revenue vs Expenses (Monthly FY 2025-26) ----------
export const revenueVsExpensesData = [
  { month: 'Apr', revenue: 120, expenses: 78 },
  { month: 'May', revenue: 135, expenses: 82 },
  { month: 'Jun', revenue: 148, expenses: 90 },
  { month: 'Jul', revenue: 162, expenses: 95 },
  { month: 'Aug', revenue: 155, expenses: 88 },
  { month: 'Sep', revenue: 178, expenses: 102 },
  { month: 'Oct', revenue: 195, expenses: 110 },
  { month: 'Nov', revenue: 188, expenses: 105 },
  { month: 'Dec', revenue: 210, expenses: 118 },
  { month: 'Jan', revenue: 198, expenses: 108 },
  { month: 'Feb', revenue: 225, expenses: 125 },
  { month: 'Mar', revenue: 240, expenses: 130 },
];

// ---------- Expense Breakdown ----------
export const expenseBreakdown = [
  { name: 'Material', value: 42, color: 'var(--primary)' },
  { name: 'Labour', value: 26, color: 'var(--secondary)' },
  { name: 'Logistics', value: 18, color: 'var(--outline-variant)' },
  { name: 'Others', value: 14, color: 'var(--outline)' },
];

// ---------- Project Profitability ----------
export const projectProfitability = [
  { name: 'Green Valley Residency', value: '5.2 Cr', revProgress: 80, profitProgress: 15 },
  { name: 'Lake View Apartments', value: '3.8 Cr', revProgress: 65, profitProgress: 12 },
  { name: 'Metro Plaza Commercial', value: '6.1 Cr', revProgress: 75, profitProgress: 22 },
  { name: 'Skyline Corporate Hub', value: '3.2 Cr', revProgress: 85, profitProgress: 10 },
];

// ---------- Dashboard Table ----------
export const projectsTableData = [
  {
    id: 1,
    name: 'Green Valley Residency',
    type: 'Residential • Gurgaon',
    budget: '₹28.5 Cr',
    spent: '₹14.2 Cr',
    revenue: '₹22.8 Cr',
    profit: '+₹8.6 Cr',
    completion: 85,
    status: 'On Track',
  },
  {
    id: 2,
    name: 'Metro Plaza Commercial',
    type: 'Commercial • Mumbai',
    budget: '₹85.0 Cr',
    spent: '₹34.4 Cr',
    revenue: '₹48.2 Cr',
    profit: '+₹13.8 Cr',
    completion: 45,
    status: 'Milestone',
  },
  {
    id: 3,
    name: 'Lake View Apartments',
    type: 'Residential • Pune',
    budget: '₹14.4 Cr',
    spent: '₹12.1 Cr',
    revenue: '₹10.2 Cr',
    profit: '-₹1.9 Cr',
    completion: 92,
    status: 'Delayed',
  },
  {
    id: 4,
    name: 'Skyline Corporate Hub',
    type: 'Commercial • Noida',
    budget: '₹42.0 Cr',
    spent: '₹8.5 Cr',
    revenue: '₹12.4 Cr',
    profit: '+₹3.9 Cr',
    completion: 22,
    status: 'On Track',
  },
  {
    id: 5,
    name: 'Horizon Heights',
    type: 'Residential • Bangalore',
    budget: '₹36.0 Cr',
    spent: '₹18.8 Cr',
    revenue: '₹24.5 Cr',
    profit: '+₹5.7 Cr',
    completion: 58,
    status: 'On Track',
  },
  {
    id: 6,
    name: 'Sunrise Township',
    type: 'Township • Hyderabad',
    budget: '₹120.0 Cr',
    spent: '₹22.0 Cr',
    revenue: '₹18.0 Cr',
    profit: '-₹4.0 Cr',
    completion: 15,
    status: 'Delayed',
  },
];

// ---------- AI Insights ----------
export const aiInsights = [
  { title: 'Revenue surged 22% YoY', desc: 'Driven by Metro Plaza & Skyline milestone payments in Q4.', icon: 'trending_up', type: 'positive' },
  { title: 'Material cost alert', desc: 'Steel prices rose 12% above FY budget - affects 3 active projects.', icon: 'warning', type: 'negative' },
  { title: 'Top performer', desc: 'Metro Plaza is the most profitable project this fiscal year.', icon: 'stars', type: 'positive' },
];

// ---------- Financial Overview ----------
export const financialOverviewData = {
  plSummary: [
    { label: 'Gross Revenue', fy2526: '₹18.42 Cr', fy2425: '₹15.10 Cr', change: '+22%' },
    { label: 'Cost of Revenue', fy2526: '₹9.85 Cr', fy2425: '₹8.62 Cr', change: '+14%' },
    { label: 'Gross Profit', fy2526: '₹8.57 Cr', fy2425: '₹6.48 Cr', change: '+32%' },
    { label: 'Operating Expenses', fy2526: '₹3.92 Cr', fy2425: '₹3.45 Cr', change: '+14%' },
    { label: 'Net Profit', fy2526: '₹4.65 Cr', fy2425: '₹3.03 Cr', change: '+53%' },
  ],
  balanceSheet: [
    { label: 'Total Assets', value: '₹32.4 Cr' },
    { label: 'Total Liabilities', value: '₹12.8 Cr' },
    { label: 'Shareholders Equity', value: '₹19.6 Cr' },
    { label: 'Current Ratio', value: '2.14' },
    { label: 'Debt-to-Equity', value: '0.65' },
  ],
};

// ---------- Cash Flow ----------
export const cashFlowData = [
  { month: 'Apr', inflow: 145, outflow: 98 },
  { month: 'May', inflow: 160, outflow: 105 },
  { month: 'Jun', inflow: 138, outflow: 112 },
  { month: 'Jul', inflow: 175, outflow: 120 },
  { month: 'Aug', inflow: 152, outflow: 108 },
  { month: 'Sep', inflow: 190, outflow: 125 },
  { month: 'Oct', inflow: 205, outflow: 135 },
  { month: 'Nov', inflow: 195, outflow: 128 },
  { month: 'Dec', inflow: 220, outflow: 140 },
  { month: 'Jan', inflow: 198, outflow: 130 },
  { month: 'Feb', inflow: 235, outflow: 148 },
  { month: 'Mar', inflow: 250, outflow: 155 },
];

// ---------- Revenue Breakdown ----------
export const revenueBySource = [
  { source: 'Residential Projects', amount: '₹8.2 Cr', percentage: 44.5 },
  { source: 'Commercial Projects', amount: '₹6.8 Cr', percentage: 36.9 },
  { source: 'Government Contracts', amount: '₹2.1 Cr', percentage: 11.4 },
  { source: 'Maintenance & Services', amount: '₹1.32 Cr', percentage: 7.2 },
];

export const revenueMonthly = [
  { month: 'Apr', residential: 65, commercial: 45, govt: 10 },
  { month: 'May', residential: 72, commercial: 50, govt: 13 },
  { month: 'Jun', residential: 80, commercial: 55, govt: 13 },
  { month: 'Jul', residential: 85, commercial: 62, govt: 15 },
  { month: 'Aug', residential: 78, commercial: 58, govt: 19 },
  { month: 'Sep', residential: 95, commercial: 65, govt: 18 },
  { month: 'Oct', residential: 102, commercial: 72, govt: 21 },
  { month: 'Nov', residential: 98, commercial: 68, govt: 22 },
  { month: 'Dec', residential: 110, commercial: 75, govt: 25 },
  { month: 'Jan', residential: 105, commercial: 70, govt: 23 },
  { month: 'Feb', residential: 118, commercial: 80, govt: 27 },
  { month: 'Mar', residential: 125, commercial: 85, govt: 30 },
];

// ---------- Expenses Detail ----------
export const expenseCategories = [
  { category: 'Raw Materials', amount: '₹4.14 Cr', percentage: 42, trend: '+8%', items: ['Cement', 'Steel', 'Sand', 'Bricks', 'Tiles'] },
  { category: 'Labour & Wages', amount: '₹2.56 Cr', percentage: 26, trend: '+5%', items: ['Skilled Workers', 'Unskilled Workers', 'Supervisors'] },
  { category: 'Logistics & Transport', amount: '₹1.77 Cr', percentage: 18, trend: '+12%', items: ['Fuel', 'Vehicle Maintenance', 'Freight'] },
  { category: 'Administrative', amount: '₹0.69 Cr', percentage: 7, trend: '-2%', items: ['Office Rent', 'Utilities', 'Insurance'] },
  { category: 'Miscellaneous', amount: '₹0.69 Cr', percentage: 7, trend: '+3%', items: ['Legal Fees', 'Permits', 'Safety Equipment'] },
];

// ---------- Budget vs Actual ----------
export const budgetVsActual = [
  { category: 'Materials', budgeted: 380, actual: 414, variance: -34, status: 'Over' },
  { category: 'Labour', budgeted: 250, actual: 256, variance: -6, status: 'Over' },
  { category: 'Equipment Rental', budgeted: 85, actual: 78, variance: 7, status: 'Under' },
  { category: 'Logistics', budgeted: 160, actual: 177, variance: -17, status: 'Over' },
  { category: 'Admin & Overhead', budgeted: 75, actual: 69, variance: 6, status: 'Under' },
  { category: 'Safety & Compliance', budgeted: 30, actual: 28, variance: 2, status: 'Under' },
  { category: 'Contingency', budgeted: 50, actual: 22, variance: 28, status: 'Under' },
];

// ---------- Invoices ----------
export const invoicesData = [
  { id: 'INV-2026-001', client: 'Prestige Group', project: 'Metro Plaza', amount: '₹4.2 Cr', issued: '2026-01-15', due: '2026-02-14', status: 'Paid' },
  { id: 'INV-2026-002', client: 'DLF Ltd.', project: 'Green Valley', amount: '₹2.8 Cr', issued: '2026-02-01', due: '2026-03-02', status: 'Paid' },
  { id: 'INV-2026-003', client: 'Sobha Developers', project: 'Lake View', amount: '₹1.5 Cr', issued: '2026-03-10', due: '2026-04-09', status: 'Overdue' },
  { id: 'INV-2026-004', client: 'Brigade Group', project: 'Horizon Heights', amount: '₹3.6 Cr', issued: '2026-04-05', due: '2026-05-04', status: 'Paid' },
  { id: 'INV-2026-005', client: 'Godrej Properties', project: 'Skyline Hub', amount: '₹5.1 Cr', issued: '2026-05-20', due: '2026-06-19', status: 'Pending' },
  { id: 'INV-2026-006', client: 'L&T Realty', project: 'Sunrise Township', amount: '₹6.8 Cr', issued: '2026-06-01', due: '2026-06-30', status: 'Pending' },
  { id: 'INV-2026-007', client: 'Tata Housing', project: 'Metro Plaza Ph-2', amount: '₹2.2 Cr', issued: '2026-06-15', due: '2026-07-14', status: 'Pending' },
];

// ---------- Clients ----------
export const clientsData = [
  { id: 1, name: 'Prestige Group', sector: 'Real Estate', projects: 3, totalRevenue: '₹12.4 Cr', outstanding: '₹0', status: 'Active', since: '2019' },
  { id: 2, name: 'DLF Ltd.', sector: 'Real Estate', projects: 2, totalRevenue: '₹8.6 Cr', outstanding: '₹1.2 Cr', status: 'Active', since: '2020' },
  { id: 3, name: 'Sobha Developers', sector: 'Real Estate', projects: 1, totalRevenue: '₹4.2 Cr', outstanding: '₹1.5 Cr', status: 'Active', since: '2022' },
  { id: 4, name: 'Brigade Group', sector: 'Construction', projects: 2, totalRevenue: '₹6.8 Cr', outstanding: '₹0', status: 'Active', since: '2021' },
  { id: 5, name: 'Godrej Properties', sector: 'Real Estate', projects: 1, totalRevenue: '₹5.1 Cr', outstanding: '₹5.1 Cr', status: 'Active', since: '2024' },
  { id: 6, name: 'L&T Realty', sector: 'Infrastructure', projects: 1, totalRevenue: '₹6.8 Cr', outstanding: '₹6.8 Cr', status: 'New', since: '2025' },
  { id: 7, name: 'Tata Housing', sector: 'Real Estate', projects: 1, totalRevenue: '₹2.2 Cr', outstanding: '₹2.2 Cr', status: 'Active', since: '2023' },
  { id: 8, name: 'NBCC India', sector: 'Government', projects: 2, totalRevenue: '₹3.5 Cr', outstanding: '₹0.8 Cr', status: 'Active', since: '2020' },
];

// ---------- Vendors ----------
export const vendorsData = [
  { id: 1, name: 'Ultratech Cement', category: 'Cement', totalOrders: '₹2.8 Cr', pending: '₹45 L', rating: 4.8, status: 'Active' },
  { id: 2, name: 'Tata Steel BSL', category: 'Steel', totalOrders: '₹3.5 Cr', pending: '₹0', rating: 4.9, status: 'Active' },
  { id: 3, name: 'ACC Concrete', category: 'Ready-Mix', totalOrders: '₹1.2 Cr', pending: '₹18 L', rating: 4.5, status: 'Active' },
  { id: 4, name: 'JK Lakshmi Cement', category: 'Cement', totalOrders: '₹85 L', pending: '₹0', rating: 4.2, status: 'Active' },
  { id: 5, name: 'Dalmia Bharat', category: 'Cement', totalOrders: '₹92 L', pending: '₹12 L', rating: 4.3, status: 'Under Review' },
  { id: 6, name: 'Mahindra Logistics', category: 'Transport', totalOrders: '₹1.8 Cr', pending: '₹32 L', rating: 4.1, status: 'Active' },
  { id: 7, name: 'Ashoka Buildcon', category: 'Sub-Contracting', totalOrders: '₹2.1 Cr', pending: '₹55 L', rating: 3.9, status: 'Active' },
];

// ---------- Loans ----------
export const loansData = [
  { id: 'LOAN-001', bank: 'Kotak Mahindra Bank', type: 'Equipment Loan', sanctioned: '₹58 L', outstanding: '₹45 L', rate: '8.4%', emi: '₹1.42 L', tenure: '60 months', paid: 28, remaining: 32, status: 'Active' },
  { id: 'LOAN-002', bank: 'HDFC Bank', type: 'Working Capital', sanctioned: '₹1.2 Cr', outstanding: '₹82 L', rate: '9.1%', emi: '₹3.8 L', tenure: '36 months', paid: 12, remaining: 24, status: 'Active' },
  { id: 'LOAN-003', bank: 'SBI', type: 'Project Finance', sanctioned: '₹5.0 Cr', outstanding: '₹3.2 Cr', rate: '7.8%', emi: '₹12.5 L', tenure: '84 months', paid: 30, remaining: 54, status: 'Active' },
];

// ---------- Assets ----------
export const assetsData = [
  { id: 'AST-001', name: 'CAT 320 Excavator', category: 'Heavy Machinery', purchased: 'Mar 2022', cost: '₹85 L', current: '₹52 L', depreciation: '₹33 L', location: 'Gurgaon Site', status: 'In Use' },
  { id: 'AST-002', name: 'Tower Crane TC-6024', category: 'Heavy Machinery', purchased: 'Jul 2023', cost: '₹1.2 Cr', current: '₹92 L', depreciation: '₹28 L', location: 'Mumbai Site', status: 'In Use' },
  { id: 'AST-003', name: 'Transit Mixer Fleet (x5)', category: 'Vehicles', purchased: 'Jan 2024', cost: '₹1.8 Cr', current: '₹1.4 Cr', depreciation: '₹40 L', location: 'Multiple Sites', status: 'In Use' },
  { id: 'AST-004', name: 'Batching Plant BP-60', category: 'Plant & Equipment', purchased: 'Sep 2021', cost: '₹45 L', current: '₹22 L', depreciation: '₹23 L', location: 'Pune Site', status: 'Maintenance' },
  { id: 'AST-005', name: 'Office Building - HQ', category: 'Real Estate', purchased: 'Apr 2019', cost: '₹3.5 Cr', current: '₹4.2 Cr', depreciation: 'Appreciated', location: 'Delhi NCR', status: 'In Use' },
  { id: 'AST-006', name: 'JCB 3DX Backhoe (x3)', category: 'Heavy Machinery', purchased: 'Jun 2025', cost: '₹95 L', current: '₹88 L', depreciation: '₹7 L', location: 'Hyderabad Site', status: 'In Use' },
];

// ---------- Analytics (YoY Comparison) ----------
export const yoyComparison = [
  { metric: 'Revenue', fy2324: '₹12.2 Cr', fy2425: '₹15.1 Cr', fy2526: '₹18.4 Cr' },
  { metric: 'Expenses', fy2324: '₹8.1 Cr', fy2425: '₹8.6 Cr', fy2526: '₹9.85 Cr' },
  { metric: 'Net Profit', fy2324: '₹2.1 Cr', fy2425: '₹3.03 Cr', fy2526: '₹4.65 Cr' },
  { metric: 'Profit Margin', fy2324: '17.2%', fy2425: '20.1%', fy2526: '25.2%' },
  { metric: 'Active Projects', fy2324: '4', fy2425: '5', fy2526: '6' },
  { metric: 'Employees', fy2324: '180', fy2425: '225', fy2526: '310' },
];

export const analyticsChartData = [
  { year: 'FY 23-24', revenue: 1220, expenses: 810, profit: 210 },
  { year: 'FY 24-25', revenue: 1510, expenses: 860, profit: 303 },
  { year: 'FY 25-26', revenue: 1842, expenses: 985, profit: 465 },
];
