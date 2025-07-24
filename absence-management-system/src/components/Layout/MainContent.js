// src/components/Layout/MainContent.js
import React from 'react';
import { useAppState } from '../../context/AppContext';
import Dashboard from '../Views/Dashboard';
import AbsenceGrid from '../Views/AbsenceGrid';
import EmployeeManagement from '../Views/EmployeeManagement';
import Reports from '../Views/Reports';

/**
 * Main Content Component
 * Renders the active view based on current navigation
 */
function MainContent() {
  const { currentView, sidebarCollapsed } = useAppState();

  // Render the appropriate view component
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'absences':
        return <AbsenceGrid />;
      case 'employees':
        return <EmployeeManagement />;
      case 'reports':
        return <Reports />;
      default:
        return <AbsenceGrid />; // Default to Absence Grid instead of Dashboard
    }
  };

  return (
    <main className={`main ${sidebarCollapsed ? 'main--expanded' : ''}`}>
      <div className="view view--active">
        {renderView()}
      </div>
    </main>
  );
}

export default MainContent;
