import React from 'react';
import { AppUI } from './AppUI';
import { MainProvider } from '../Context';

// Ejemplo de Stateful Component: Componentes que manejan la lógica de la app

function App() {
  // Contexto -> children
  return (
    <MainProvider>
      <AppUI />
    </MainProvider>
  );
}

export default App;
