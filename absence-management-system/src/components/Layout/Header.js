// src/components/Layout/Header.js
import React, { useState } from 'react';
import { useAppState, useAppDispatch } from '../../context/AppContext';

/**
 * Header Component
 * Contains navigation, search, and user controls
 */
function Header() {
  const { isDarkMode } = useAppState();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle menu toggle for mobile
  const handleMenuToggle = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Handle global search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Searching for:', e.target.value);
  };

  return (
    <header className="header">
      {/* Left section */}
      <div className="header__left">
        <button
          className="header__menu-btn"
          onClick={handleMenuToggle}
          aria-label="Toggle sidebar"
        >
          <span className="material-icons">menu</span>
        </button>

        <div className="header__logo">
          <span className="material-icons">business</span>
          <span className="header__logo-text">AbsenceHub</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="header__center">
        <div className="header__search">
          <span className="material-icons">search</span>
          <input
            type="text"
            placeholder="Search employees, departments..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="header__right">
        {/* Theme toggle */}
        <button
          className="header__btn"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          <span className="material-icons">
            {isDarkMode ? 'dark_mode' : 'light_mode'}
          </span>
        </button>

        {/* Notifications */}
        <div className="header__notifications">
          <button
            className="header__btn"
            aria-label="Notifications"
          >
            <span className="material-icons">notifications</span>
            <span className="header__badge">3</span>
          </button>
        </div>

        {/* Profile */}
        <button className="header__profile-btn">
          <div className="header__avatar">
            <span>JD</span>
          </div>
          <span>John Doe</span>
          <span className="material-icons">keyboard_arrow_down</span>
        </button>
      </div>
    </header>
  );
}

export default Header;

