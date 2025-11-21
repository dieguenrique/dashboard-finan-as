import React, { useState } from 'react';
import Overview from './components/Overview';
import ExpenseDetails from './components/ExpenseDetails';
import ResponsibleExpenses from './components/ResponsibleExpenses';

type Screen = 'overview' | 'details' | 'responsible';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('overview');

  const navigateTo = (screen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === 'overview' && (
        <Overview 
          onNavigateDetails={() => navigateTo('details')} 
          onNavigateResponsible={() => navigateTo('responsible')} 
        />
      )}
      {currentScreen === 'details' && (
        <ExpenseDetails onBack={() => navigateTo('overview')} />
      )}
      {currentScreen === 'responsible' && (
        <ResponsibleExpenses onBack={() => navigateTo('overview')} />
      )}
    </>
  );
}