import { FileText, Download } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const Reports = () => {
  const { addToast } = useToast();

  const reports = [
    { title: 'Annual Financial Statement', date: 'FY 2025-26', size: '2.4 MB', type: 'PDF' },
    { title: 'Q4 Profit & Loss Statement', date: 'Q4 FY26', size: '1.1 MB', type: 'PDF' },
    { title: 'Vendor Payable Ledger', date: 'March 2026', size: '4.8 MB', type: 'CSV' },
    { title: 'Tax & Compliance Audit', date: 'FY 2024-25', size: '8.2 MB', type: 'PDF' },
    { title: 'Project ROI Breakdown', date: 'H2 FY26', size: '3.1 MB', type: 'XLSX' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><FileText className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Reports</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Downloadable statements & ledgers</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, idx) => (
          <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex justify-between items-center group">
            <div>
              <h3 className="text-lg font-bold text-on-background tracking-tight mb-1">{report.title}</h3>
              <p className="text-xs text-on-surface-variant font-medium">{report.date} • {report.size}</p>
            </div>
            <button 
              onClick={() => addToast(`Downloading ${report.title}...`, 'success')}
              className="p-3 bg-surface-container hover:bg-primary hover:text-on-primary rounded-xl transition-colors text-on-surface-variant shadow-sm"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
