// src/components/UI/KPICard.js
import React from 'react';

/**
 * KPI Card Component
 * Displays key performance indicators with icons
 */
function KPICard({ title, value, icon, variant = 'primary', className = '' }) {
  return (
    <div className={`kpi-card kpi-card--${variant} ${className}`}>
      <div className="kpi-card__icon">
        <span className="material-icons">{icon}</span>
      </div>
      <div className="kpi-card__content">
        <div className="kpi-card__value">{value}</div>
        <div className="kpi-card__label">{title}</div>
      </div>
    </div>
  );
}

export default KPICard;
