import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { projectsTableData } from '../data/mockData';

const Projects = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="flex items-end gap-4">
          <div className="p-3 bg-surface-container rounded-xl"><Briefcase className="w-8 h-8 text-primary" /></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-on-background mb-1">Projects</h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 font-medium">Active & past construction projects - FY 2025-26</p>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projectsTableData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: project.id * 0.1 }}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-on-background tracking-tight">{project.name}</h3>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">{project.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${project.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
                    project.status === 'Milestone' ? 'bg-primary/10 text-primary' :
                      'bg-error/10 text-error'
                  }`}>{project.status}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Budget</p><p className="text-sm font-bold text-on-background">{project.budget}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Spent</p><p className="text-sm font-bold text-on-background">{project.spent}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Revenue</p><p className="text-sm font-bold text-on-background">{project.revenue}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Profit</p><p className={`text-sm font-bold ${project.profit.startsWith('-') ? 'text-error' : 'text-emerald-600'}`}>{project.profit}</p></div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-medium">Completion</span>
                  <span className="font-bold text-on-background">{project.completion}%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.completion}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${project.profit.startsWith('-') ? 'bg-error' : 'bg-primary'}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
