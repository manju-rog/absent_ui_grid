// src/App.js
import React from 'react';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import './styles/globals.css';

/**
 * Main Application Component
 * Provides global context and renders the main layout
 */
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Layout />
      </div>
    </AppProvider>
  );
}

export default App;
