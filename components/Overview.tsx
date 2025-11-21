import React from 'react';

interface OverviewProps {
  onNavigateDetails: () => void;
  onNavigateResponsible: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onNavigateDetails, onNavigateResponsible }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="flex items-center p-4">
        <h1 className="flex-1 text-xl font-bold text-slate-900 dark:text-white">Visão Geral</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {/* Stats Cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div 
            onClick={onNavigateResponsible}
            className="flex flex-col gap-2 rounded-xl bg-white p-4 dark:bg-slate-900/70 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors"
          >
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Receitas</p>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">R$12.300,50</p>
          </div>
          <div 
            onClick={onNavigateDetails}
            className="flex flex-col gap-2 rounded-xl bg-white p-4 dark:bg-slate-900/70 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors"
          >
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Despesas</p>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">R$4.850,75</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-4 dark:bg-slate-900/70">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saldo</p>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">R$7.449,75</p>
          </div>
        </section>

        {/* Filter Chips */}
        <section className="flex gap-3 py-6 overflow-x-auto no-scrollbar">
          <button className="h-9 shrink-0 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-white transition-colors">
            Este Mês
          </button>
          <button className="h-9 shrink-0 items-center justify-center rounded-full bg-slate-200 px-4 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 transition-colors">
            Mês Anterior
          </button>
          <button className="h-9 shrink-0 items-center justify-center rounded-full bg-slate-200 px-4 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 transition-colors">
            Ano
          </button>
        </section>

        {/* Expense Summary Section */}
        <section className="rounded-xl bg-white p-4 dark:bg-slate-900/70">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Resumo de Despesas</h2>
          
          {/* Donut Chart */}
          <div className="relative my-6 flex h-48 w-48 items-center justify-center mx-auto">
            <svg className="h-full w-full" viewBox="0 0 36 36">
              <path 
                className="stroke-slate-200 dark:stroke-slate-700" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                strokeWidth="3"
              />
              <path 
                className="stroke-primary" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                fill="none" 
                strokeDasharray="40, 100" 
                strokeWidth="3"
              />
              <path 
                className="stroke-sky-400" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                fill="none" 
                strokeDasharray="30, 100" 
                strokeDashoffset="-40" 
                strokeWidth="3"
              />
              <path 
                className="stroke-amber-400" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                fill="none" 
                strokeDasharray="15, 100" 
                strokeDashoffset="-70" 
                strokeWidth="3"
              />
              <path 
                className="stroke-emerald-400" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                fill="none" 
                strokeDasharray="15, 100" 
                strokeDashoffset="-85" 
                strokeWidth="3"
              />
            </svg>
            <div className="absolute flex flex-col items-center text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">Total</p>
              <p className="text-xl font-bold text-slate-800 dark:text-slate-100">R$4.850,75</p>
            </div>
          </div>

          {/* Category List */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-slate-800 dark:text-slate-200">Alimentação</p>
                  <p className="font-semibold text-slate-900 dark:text-white">R$1.940,30</p>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-1.5 rounded-full bg-primary" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                <span className="material-symbols-outlined text-sky-400">directions_car</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-slate-800 dark:text-slate-200">Transporte</p>
                  <p className="font-semibold text-slate-900 dark:text-white">R$1.455,22</p>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-1.5 rounded-full bg-sky-400" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                <span className="material-symbols-outlined text-amber-400">sports_esports</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-slate-800 dark:text-slate-200">Lazer</p>
                  <p className="font-semibold text-slate-900 dark:text-white">R$727,61</p>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-1.5 rounded-full bg-amber-400" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                <span className="material-symbols-outlined text-emerald-400">home</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-slate-800 dark:text-slate-200">Moradia</p>
                  <p className="font-semibold text-slate-900 dark:text-white">R$727,61</p>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-1.5 rounded-full bg-emerald-400" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform active:scale-95">
          <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'wght' 500" }}>add</span>
        </button>
      </div>
    </div>
  );
};

export default Overview;