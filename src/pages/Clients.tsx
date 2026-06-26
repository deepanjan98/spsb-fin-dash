import { Users } from 'lucide-react';
import { clientsData } from '../data/mockData';
import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Users className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Clients</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Client directory & revenue contribution</p>
          </div>
        </div>
      </section>

      {/* Client Directory */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {clientsData.map((client) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 relative group"
          >
            <div className="absolute top-4 right-4">
               <span className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wider ${
                  client.status === 'Active' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-primary/10 text-primary'
                }`}>{client.status}</span>
            </div>
            <h3 className="text-lg font-bold text-on-background tracking-tight mb-1">{client.name}</h3>
            <p className="text-xs text-on-surface-variant font-medium mb-4">{client.sector} • {client.projects} Project(s)</p>
            
            <div className="pt-4 border-t border-outline-variant/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Total Revenue</span>
                <span className="text-sm font-bold text-on-background">{client.totalRevenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Outstanding</span>
                <span className={`text-sm font-bold ${client.outstanding !== '₹0' ? 'text-error' : 'text-emerald-600'}`}>
                  {client.outstanding}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
