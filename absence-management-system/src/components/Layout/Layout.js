// src/components/Layout/Layout.js
import React, { useEffect } from 'react';
import { useAppState, useAppDispatch } from '../../context/AppContext';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

/**
 * Main Layout Component
 * Manages the overall application layout and theme
 */
function Layout() {
  const { isDarkMode } = useAppState(); // Removed sidebarCollapsed to fix ESLint warning
  const dispatch = useAppDispatch();

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute('data-color-scheme', 'dark');
    } else {
      root.setAttribute('data-color-scheme', 'light');
    }
  }, [isDarkMode]);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch({ type: 'TOGGLE_SIDEBAR', payload: true });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className="app-layout">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Layout;
