// src/components/Views/AbsenceGrid.js
import React, { useState } from 'react';
import { useAppState, useAppDispatch } from '../../context/AppContext';

/**
 * Absence Grid Component
 * Displays employee attendance in a calendar grid format
 */
function AbsenceGrid() {
  const { employees, absenceTypes, selectedMonth } = useAppState();
  const dispatch = useAppDispatch();
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [viewMode, setViewMode] = useState('Month');

  // Generate days for the current month (June 2024 as shown in image)
  const generateDaysForMonth = () => {
    const daysInMonth = 30; // June has 30 days
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const days = generateDaysForMonth();

  // Sample absence data to match the image
  const absenceData = {
    1: { // Shreyas Kumar
      7: 'WFH', 11: 'WFH', 21: 'WFH'
    },
    2: { // Anushri Patel
      7: 'WFH', 12: 'A', 16: 'WFH', 18: 'A', 20: 'S'
    },
    3: { // Suhas Reddy
      19: 'H', 23: 'WFH'
    },
    4: { // T B Manjunath
      9: 'WFH', 14: 'H'
    },
    5: { // Ganesh Ram B
      16: 'A', 20: 'S'
    },
    6: { // Priya Sharma
      12: 'A', 16: 'A'
    },
    7: { // Rajesh Kumar
      5: 'WFH', 12: 'WFH', 19: 'H'
    },
    8: { // Kavitha Nair
      15: 'H', 17: 'WFH', 24: 'V'
    }
  };

  // Get status for employee on specific day
  const getEmployeeStatus = (employeeId, day) => {
    return absenceData[employeeId]?.[day] || 'P';
  };

  // Get status cell class
  const getStatusCellClass = (status) => {
    const baseClass = 'absence-cell';
    switch (status) {
      case 'P': return `${baseClass} absence-cell--present`;
      case 'A': return `${baseClass} absence-cell--absent`;
      case 'H': return `${baseClass} absence-cell--half`;
      case 'V': return `${baseClass} absence-cell--vacation`;
      case 'S': return `${baseClass} absence-cell--sick`;
      case 'WFH': return `${baseClass} absence-cell--wfh`;
      case 'T': return `${baseClass} absence-cell--travel`;
      case 'C': return `${baseClass} absence-cell--conference`;
      default: return `${baseClass} absence-cell--present`;
    }
  };

  return (
    <div className="absence-grid-view">
      {/* Header */}
      <div className="view__header">
        <div className="view__title">
          <h1>Absence Management</h1>
          <p>Manage employee absences and leave schedules</p>
        </div>
        <div className="view__actions">
          <button className="btn btn--secondary">
            <span className="material-icons">file_download</span>
            Export
          </button>
          <button className="btn btn--secondary">
            <span className="material-icons">edit</span>
            Bulk Edit
          </button>
          <button className="btn btn--primary">
            <span className="material-icons">save</span>
            Submit Changes
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid-filters">
        <div className="filter-group">
          <label>Department:</label>
          <select 
            value={selectedDepartment} 
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="filter-select"
          >
            <option>All Departments</option>
            <option>Development</option>
            <option>Quality Assurance</option>
            <option>Design</option>
            <option>Human Resources</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Month:</label>
          <select className="filter-select">
            <option>June 2024</option>
          </select>
        </div>

        <div className="filter-group">
          <label>View:</label>
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'Month' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('Month')}
            >
              Month
            </button>
            <button 
              className={`view-btn ${viewMode === 'Week' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('Week')}
            >
              Week
            </button>
          </div>
        </div>

        <button className="btn btn--ghost">
          <span className="material-icons">clear</span>
          Clear Filters
        </button>
      </div>

      {/* Absence Grid */}
      <div className="absence-grid-container">
        <div className="absence-grid">
          {/* Header Row */}
          <div className="grid-header">
            <div className="employee-header">Employee</div>
            {days.map(day => (
              <div key={day} className="day-header">{day}</div>
            ))}
          </div>

          {/* Employee Rows */}
          {employees.map((employee) => (
            <div key={employee.id} className="employee-row">
              <div className="employee-info">
                <div className="employee-name">{employee.name}</div>
              </div>
              {days.map(day => {
                const status = getEmployeeStatus(employee.id, day);
                return (
                  <div 
                    key={`${employee.id}-${day}`}
                    className={getStatusCellClass(status)}
                    title={`${employee.name} - Day ${day}: ${absenceTypes[status]?.label || 'Present'}`}
                  >
                    {status}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="absence-legend">
        <h3>Absence Types:</h3>
        <div className="legend-items">
          {Object.entries(absenceTypes).map(([key, type]) => (
            <div key={key} className="legend-item">
              <span className={`legend-indicator absence-cell--${key.toLowerCase()}`}>
                {key}
              </span>
              <span className="legend-label">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AbsenceGrid;
