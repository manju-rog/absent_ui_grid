// src/components/Layout/Sidebar.js
import React from 'react';
import { useAppState, useAppDispatch } from '../../context/AppContext';

/**
 * Navigation menu items configuration
 */
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'absences', label: 'Absence Grid', icon: 'calendar_today' },
  { id: 'employees', label: 'Employees', icon: 'people' },
  { id: 'reports', label: 'Reports', icon: 'assessment' }
];

/**
 * Sidebar Component
 * Contains navigation menu
 */
function Sidebar() {
  const { currentView, sidebarCollapsed } = useAppState();
  const dispatch = useAppDispatch();

  // Handle navigation
  const handleNavigation = (viewId) => {
    dispatch({ type: 'SET_VIEW', payload: viewId });
  };

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__content">
        <nav className="sidebar__nav">
          <ul className="sidebar__menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`sidebar__item ${
                  currentView === item.id ? 'sidebar__item--active' : ''
                }`}
                onClick={() => handleNavigation(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNavigation(item.id);
                  }
                }}
              >
                <span className="material-icons">{item.icon}</span>
                <span className="sidebar__item-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
