import React from 'react';

interface ResponsibleExpensesProps {
  onBack: () => void;
}

const ResponsibleExpenses: React.FC<ResponsibleExpensesProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <div 
            onClick={onBack}
            className="flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-gray-800 dark:text-white">arrow_back</span>
          </div>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
            Gastos por Responsável
          </h1>
          <div className="flex w-12 items-center justify-end">
            <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent p-0 text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4">
        {/* Filter Chips */}
        <div className="flex gap-3 py-3 overflow-x-auto whitespace-nowrap no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-3 text-white">
            <p className="text-sm font-medium leading-normal">Este Mês</p>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-gray-700/50 pl-4 pr-4">
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Últimos 30 dias</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-gray-700/50 pl-4 pr-4">
            <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Ano</p>
          </button>
        </div>

        {/* Summary Card */}
        <div className="py-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-gray-800/50 shadow-sm">
            <div className="flex w-full flex-col items-stretch justify-center gap-1 p-6">
              <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">Total de Gastos do Casal</p>
              <p className="text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white">R$ 5.890,25</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-green-500">arrow_upward</span>
                <p className="text-sm font-medium leading-normal text-green-500">+3.7%</p>
                <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">vs mês passado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-2 gap-4 pb-8">
          {/* User Card */}
          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800/50 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <img 
                className="h-10 w-10 rounded-full object-cover" 
                alt="Profile picture of João Pereira" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaY284OHrpw8l9VdvgduzYCtwq_KycAA_AObs7W0hxmzPcTGDMlWvtR_4g-Eg4K48cqrXtk8n_BgMwAcoztknGN6vtyCYSBDmWapGPYBg82bioSDH2VBFhkslfLU3PElcutD6VHRIHYZ0LwdE3U1umHpCdCptkFTNR7dYduJGiZy3B3GkU-S3Au5GuJYyghHVF0TbIcAE-PfE_fdw_46Oc2PulfJmzabeOzyNGIF5bIkTuiJ7jjD1XXCW5wv5x3WGtm-68lDGxneGt"
              />
              <div className="flex-1">
                <p className="text-sm font-bold leading-tight text-gray-900 dark:text-white">Você</p>
                <p className="text-xs font-normal leading-tight text-gray-500 dark:text-gray-400">21 trans.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold leading-tight text-gray-900 dark:text-white">R$ 3.520,25</p>
              <p className="text-xs font-medium leading-normal text-gray-500 dark:text-gray-400">60% do total</p>
            </div>
            <div className="flex-1"></div>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-primary" style={{ width: '59.76%' }}></div>
            </div>
          </div>

          {/* Partner Card */}
          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800/50 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <img 
                className="h-10 w-10 rounded-full object-cover" 
                alt="Profile picture of Ana Oliveira" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRVe5YmIpUJqnykLYySmBBLcukObVQxSDt8cfF5trW4CgykHl1NF2fvZtNuqYheNfwYAUdcqf4cut4XUBz6YfBr9tB3d9FPfTfCvfNn27K417SxTIu964rwZptxd9-9S1YHvgpp7km77VBapAHyKRqwZ03RQDxi4_rX8MH7dwRls98vM45xjpOAtITkQDueqRPEjKZdGImAM0xG8qAy61occeZfVRBKgXKfl_x8tcZnw9AgbBZ0AIwEccxxROCOFlXcrBRoLMLsQF"
              />
              <div className="flex-1">
                <p className="text-sm font-bold leading-tight text-gray-900 dark:text-white">Ana</p>
                <p className="text-xs font-normal leading-tight text-gray-500 dark:text-gray-400">15 trans.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold leading-tight text-gray-900 dark:text-white">R$ 2.370,00</p>
              <p className="text-xs font-medium leading-normal text-gray-500 dark:text-gray-400">40% do total</p>
            </div>
            <div className="flex-1"></div>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-custom-pink" style={{ width: '40.24%' }}></div>
            </div>
          </div>
        </div>

        {/* Details List */}
        <div className="pb-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Detalhes</h2>
          <div className="flex flex-col gap-4">
            {/* User Detail Row */}
            <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-800/50 p-4 shadow-sm">
              <img 
                className="h-12 w-12 rounded-full object-cover" 
                alt="Profile picture of João Pereira" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaY284OHrpw8l9VdvgduzYCtwq_KycAA_AObs7W0hxmzPcTGDMlWvtR_4g-Eg4K48cqrXtk8n_BgMwAcoztknGN6vtyCYSBDmWapGPYBg82bioSDH2VBFhkslfLU3PElcutD6VHRIHYZ0LwdE3U1umHpCdCptkFTNR7dYduJGiZy3B3GkU-S3Au5GuJYyghHVF0TbIcAE-PfE_fdw_46Oc2PulfJmzabeOzyNGIF5bIkTuiJ7jjD1XXCW5wv5x3WGtm-68lDGxneGt"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white">Você</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">21 transações</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-white">R$ 3.520,25</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">60%</p>
              </div>
            </div>
            
            {/* Partner Detail Row */}
            <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-800/50 p-4 shadow-sm">
              <img 
                className="h-12 w-12 rounded-full object-cover" 
                alt="Profile picture of Ana Oliveira" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRVe5YmIpUJqnykLYySmBBLcukObVQxSDt8cfF5trW4CgykHl1NF2fvZtNuqYheNfwYAUdcqf4cut4XUBz6YfBr9tB3d9FPfTfCvfNn27K417SxTIu964rwZptxd9-9S1YHvgpp7km77VBapAHyKRqwZ03RQDxi4_rX8MH7dwRls98vM45xjpOAtITkQDueqRPEjKZdGImAM0xG8qAy61occeZfVRBKgXKfl_x8tcZnw9AgbBZ0AIwEccxxROCOFlXcrBRoLMLsQF"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white">Ana</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">15 transações</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-white">R$ 2.370,00</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">40%</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResponsibleExpenses;