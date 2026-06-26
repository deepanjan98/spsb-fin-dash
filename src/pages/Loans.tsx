import { CreditCard } from 'lucide-react';
import { loansData } from '../data/mockData';
import { motion } from 'framer-motion';

const Loans = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><CreditCard className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Loans & Liabilities</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Corporate debt structure & EMI schedules</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loansData.map((loan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-on-background tracking-tight">{loan.bank}</h3>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">{loan.type} • {loan.id}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1">Sanctioned</p>
                  <p className="text-xl font-bold tracking-tight text-on-background">{loan.sanctioned}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1">Outstanding</p>
                  <p className="text-xl font-bold tracking-tight text-error">{loan.outstanding}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 border-t border-outline-variant/30 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Interest Rate</span>
                  <span className="font-bold text-on-background">{loan.rate} p.a.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Monthly EMI</span>
                  <span className="font-bold text-on-background font-mono">{loan.emi}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Tenure</span>
                  <span className="font-bold text-on-background">{loan.tenure}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-medium">Repayment Progress</span>
                  <span className="font-bold text-on-background">{Math.round((loan.paid / (loan.paid + loan.remaining)) * 100)}%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${(loan.paid / (loan.paid + loan.remaining)) * 100}%` }}></div>
                </div>
                <p className="text-center text-[10px] text-on-surface-variant mt-2 font-medium">{loan.paid} EMIs paid, {loan.remaining} remaining</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loans;
