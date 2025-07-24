// src/context/AppContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { appData } from '../data/appData';

// Create contexts
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Initial state
const initialState = {
  currentView: 'absences', // Start with absences view to show the grid immediately
  sidebarCollapsed: false,
  isDarkMode: false,
  selectedMonth: '2024-06',
  filteredEmployees: appData.employees,
  absenceData: {},
  bulkEditMode: false,
  ...appData
};

// Reducer for state management
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    
    case 'SET_MONTH':
      return { ...state, selectedMonth: action.payload };
    
    case 'FILTER_EMPLOYEES':
      return { ...state, filteredEmployees: action.payload };
    
    case 'UPDATE_ABSENCE_DATA':
      return { 
        ...state, 
        absenceData: { ...state.absenceData, ...action.payload }
      };
    
    case 'TOGGLE_BULK_EDIT':
      return { ...state, bulkEditMode: !state.bulkEditMode };
    
    default:
      return state;
  }
}

/**
 * App Provider Component
 * Provides global state and dispatch to all child components
 */
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// Custom hooks for consuming context
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error('useAppDispatch must be used within AppProvider');
  }
  return context;
}
