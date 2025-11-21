import React from 'react';

interface ExpenseDetailsProps {
  onBack: () => void;
}

const ExpenseDetails: React.FC<ExpenseDetailsProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="text-slate-800 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Detalhes de Gastos
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Period Selector (Chips) */}
        <div className="flex gap-3 p-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-alt pl-5 pr-5 cursor-pointer">
            <p className="text-white text-sm font-medium leading-normal">Este Mês</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-5 pr-5 cursor-pointer">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Mês Passado</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-5 pr-5 cursor-pointer">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">30 Dias</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-5 pr-5 cursor-pointer">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Ano</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="px-4 pb-2">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white dark:bg-slate-900 p-6">
            <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">Total Gasto</p>
            <div className="flex items-baseline gap-2 justify-start mt-2">
              <p className="text-slate-900 dark:text-white text-4xl font-bold leading-tight tracking-tighter">R$ 4.580,50</p>
            </div>
            
            <div className="mt-6 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FD7E14" strokeDasharray="40, 100" strokeLinecap="round" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#28A745" strokeDasharray="30, 100" strokeDashoffset="-40" strokeLinecap="round" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#DC3545" strokeDasharray="15, 100" strokeDashoffset="-70" strokeLinecap="round" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0052FF" strokeDasharray="15, 100" strokeDashoffset="-85" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Total</span>
                  <span className="text-slate-900 dark:text-white text-lg font-bold">-R$4.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
          Gastos por Categoria
        </h3>

        {/* Accordion List */}
        <div className="flex flex-col px-4 pb-4">
          
          {/* Restaurants Category */}
          <details className="flex flex-col border-b border-b-slate-200 dark:border-b-slate-800 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-3 list-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-orange-500/10">
                  <span className="material-symbols-outlined text-orange-500">restaurant</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Restaurantes</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">40% do total</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-red-500 text-base font-semibold">-R$ 1.832,20</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </div>
            </summary>
            <div className="pl-14 pt-2 pb-2 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Restaurante Fictício</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">15 de Julho</p>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">-R$ 150,00</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">iFood</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">12 de Julho</p>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">-R$ 85,50</p>
              </div>
            </div>
          </details>

          {/* Transportation Category */}
          <details className="flex flex-col border-b border-b-slate-200 dark:border-b-slate-800 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-3 list-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-green-500/10">
                  <span className="material-symbols-outlined text-green-500">directions_car</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Transporte</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">30% do total</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-red-500 text-base font-semibold">-R$ 1.374,15</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </div>
            </summary>
            <div className="pl-14 pt-2 pb-2 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Uber</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">18 de Julho</p>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">-R$ 42,30</p>
              </div>
            </div>
          </details>

          {/* Housing Category */}
          <details className="flex flex-col border-b border-b-slate-200 dark:border-b-slate-800 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-3 list-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-red-500/10">
                  <span className="material-symbols-outlined text-red-500">home</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Moradia</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">15% do total</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-red-500 text-base font-semibold">-R$ 687,07</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </div>
            </summary>
            <div className="pl-14 pt-2 pb-2 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Conta de Luz</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">05 de Julho</p>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">-R$ 250,00</p>
              </div>
            </div>
          </details>

          {/* Leisure Category */}
          <details className="flex flex-col border-b border-b-slate-200 dark:border-b-slate-800 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-3 list-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary-alt/10">
                  <span className="material-symbols-outlined text-primary-alt">movie</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Lazer</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">15% do total</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-red-500 text-base font-semibold">-R$ 687,07</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </div>
            </summary>
            <div className="pl-14 pt-2 pb-2 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Netflix</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">10 de Julho</p>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">-R$ 55,90</p>
              </div>
            </div>
          </details>
        </div>
      </main>
    </div>
  );
};

export default ExpenseDetails;