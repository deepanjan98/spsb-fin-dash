import { projectsTableData } from '../data/mockData';
import { useToast } from '../context/ToastContext';

interface ModulePageProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ModulePage: React.FC<ModulePageProps> = ({ title, description, icon: Icon }) => {
  const { addToast } = useToast();
  
  return (
    <div className="animate-fade-in">
      <section className="flex items-end gap-4 mb-8">
        <div className="p-3 bg-surface-container rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-on-background mb-1">{title}</h2>
          <p className="text-base text-on-surface-variant opacity-80">{description}</p>
        </div>
      </section>

      {/* Sample KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl shadow-sm">
          <p className="text-sm text-on-surface-variant font-bold mb-2">Total Overview</p>
          <p className="text-3xl font-bold text-on-background">₹45.2 Cr</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl shadow-sm">
          <p className="text-sm text-on-surface-variant font-bold mb-2">Active Entities</p>
          <p className="text-3xl font-bold text-on-background">142</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl shadow-sm">
          <p className="text-sm text-on-surface-variant font-bold mb-2">Efficiency Rating</p>
          <p className="text-3xl font-bold text-emerald-600">94%</p>
        </div>
      </section>

      {/* Sample Table */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="px-8 py-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
          <h3 className="text-xl font-semibold text-on-background">{title} Data Records</h3>
          <button 
            onClick={() => addToast(`Exporting ${title} Data...`, 'success')} 
            className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-bold hover:opacity-90 shadow-md hover:shadow-lg transition-all"
          >
            Export Data
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="px-8 py-4">Reference</th>
                <th className="px-4 py-4">Value</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-8 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {projectsTableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-8 py-4">
                    <p className="font-semibold text-on-background">Record #{1000 + idx}</p>
                    <p className="text-xs text-on-surface-variant">SPSB-{title.substring(0,3).toUpperCase()}</p>
                  </td>
                  <td className="px-4 py-4 font-mono text-sm text-on-background">{row.budget}</td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider">Active</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant font-medium">Oct 24, 2026</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ModulePage;
