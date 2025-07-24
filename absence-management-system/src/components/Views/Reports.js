// src/components/Views/Reports.js
import React, { useState } from 'react';
import { useAppState } from '../../context/AppContext';

/**
 * Reports Component
 * Displays reporting interface with quick reports and custom report builder
 */
function Reports() {
  const { employees, departments, absenceTypes } = useAppState();
  const [selectedReportType, setSelectedReportType] = useState('Absence Summary');
  const [dateRange, setDateRange] = useState({
    from: '2024-07-01',
    to: '2024-07-31'
  });
  const [filters, setFilters] = useState({
    includeWeekends: false,
    includeHolidays: false,
    showDetails: false
  });

  // Quick report data
  const quickReports = [
    {
      id: 'todays-absences',
      title: "Today's Absences",
      icon: 'calendar_today',
      description: 'View current day absence status',
      color: '#1976d2'
    },
    {
      id: 'monthly-summary',
      title: 'Monthly Summary',
      icon: 'calendar_view_month',
      description: 'Monthly attendance overview',
      color: '#388e3c'
    },
    {
      id: 'attendance-trends',
      title: 'Attendance Trends',
      icon: 'trending_up',
      description: 'Analyze attendance patterns',
      color: '#f57c00'
    },
    {
      id: 'department-analysis',
      title: 'Department Analysis',
      icon: 'people',
      description: 'Department-wise statistics',
      color: '#7b1fa2'
    }
  ];

  // Report type options
  const reportTypes = [
    'Absence Summary',
    'Employee Attendance',
    'Department Report',
    'Leave Balance',
    'Overtime Report',
    'Monthly Analysis'
  ];

  // Handle filter changes
  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  // Handle date range changes
  const handleDateChange = (field, value) => {
    setDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle quick report click
  const handleQuickReportClick = (reportId) => {
    console.log(`Running quick report: ${reportId}`);
    // Here you would implement the actual report generation logic
  };

  // Handle custom report generation
  const handleGenerateCustomReport = () => {
    console.log('Generating custom report:', {
      type: selectedReportType,
      dateRange,
      filters
    });
    // Here you would implement the custom report generation logic
  };

  // Handle report scheduling
  const handleScheduleReport = () => {
    console.log('Scheduling report...');
    // Here you would implement the report scheduling logic
  };

  return (
    <div className="reports-view">
      {/* Header */}
      <div className="view__header">
        <div className="view__title">
          <h1>Reports & Analytics</h1>
          <p>Generate comprehensive absence and attendance reports</p>
        </div>
        <div className="view__actions">
          <button 
            className="btn btn--secondary"
            onClick={handleScheduleReport}
          >
            <span className="material-icons">schedule</span>
            Schedule Report
          </button>
          <button 
            className="btn btn--primary"
            onClick={handleGenerateCustomReport}
          >
            <span className="material-icons">assessment</span>
            Generate Report
          </button>
        </div>
      </div>

      {/* Quick Reports Section */}
      <div className="reports-section">
        <h2 className="section-title">Quick Reports</h2>
        <div className="quick-reports-grid">
          {quickReports.map((report) => (
            <div
              key={report.id}
              className="quick-report-card"
              onClick={() => handleQuickReportClick(report.id)}
            >
              <div className="quick-report-card__content">
                <div 
                  className="quick-report-card__icon"
                  style={{ backgroundColor: report.color }}
                >
                  <span className="material-icons">{report.icon}</span>
                </div>
                <div className="quick-report-card__info">
                  <h3 className="quick-report-card__title">{report.title}</h3>
                  <p className="quick-report-card__description">{report.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Report Builder Section */}
      <div className="reports-section">
        <h2 className="section-title">Custom Report Builder</h2>
        
        <div className="report-builder">
          <div className="report-builder__form">
            {/* Report Type */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Report Type:</label>
                <select
                  value={selectedReportType}
                  onChange={(e) => setSelectedReportType(e.target.value)}
                  className="form-select"
                >
                  {reportTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Range */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Date Range:</label>
                <div className="date-range-inputs">
                  <input
                    type="date"
                    value={dateRange.from}
                    onChange={(e) => handleDateChange('from', e.target.value)}
                    className="form-input date-input"
                  />
                  <span className="date-separator">to</span>
                  <input
                    type="date"
                    value={dateRange.to}
                    onChange={(e) => handleDateChange('to', e.target.value)}
                    className="form-input date-input"
                  />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Filters:</label>
                <div className="filter-checkboxes">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={filters.includeWeekends}
                      onChange={() => handleFilterChange('includeWeekends')}
                      className="form-checkbox"
                    />
                    <span className="checkbox-text">Include Weekends</span>
                  </label>
                  
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={filters.includeHolidays}
                      onChange={() => handleFilterChange('includeHolidays')}
                      className="form-checkbox"
                    />
                    <span className="checkbox-text">Include Holidays</span>
                  </label>
                  
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={filters.showDetails}
                      onChange={() => handleFilterChange('showDetails')}
                      className="form-checkbox"
                    />
                    <span className="checkbox-text">Show Details</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="form-row">
              <button
                className="btn btn--primary btn--large generate-btn"
                onClick={handleGenerateCustomReport}
              >
                <span className="material-icons">file_download</span>
                Generate Custom Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports Section */}
      <div className="reports-section">
        <h2 className="section-title">Recent Reports</h2>
        <div className="recent-reports">
          <div className="recent-reports-table">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Generated</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>June 2024 Attendance Summary</td>
                  <td>
                    <span className="report-type-badge report-type-badge--summary">
                      Monthly Summary
                    </span>
                  </td>
                  <td>July 1, 2024, 2:30 PM</td>
                  <td>
                    <span className="status-badge status-badge--completed">
                      Completed
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-btn action-btn--download" title="Download">
                        <span className="material-icons">file_download</span>
                      </button>
                      <button className="action-btn action-btn--view" title="View">
                        <span className="material-icons">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>Department Analysis Q2</td>
                  <td>
                    <span className="report-type-badge report-type-badge--analysis">
                      Department Report
                    </span>
                  </td>
                  <td>June 28, 2024, 4:15 PM</td>
                  <td>
                    <span className="status-badge status-badge--completed">
                      Completed
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-btn action-btn--download" title="Download">
                        <span className="material-icons">file_download</span>
                      </button>
                      <button className="action-btn action-btn--view" title="View">
                        <span className="material-icons">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>Employee Leave Balance</td>
                  <td>
                    <span className="report-type-badge report-type-badge--balance">
                      Leave Balance
                    </span>
                  </td>
                  <td>June 25, 2024, 9:45 AM</td>
                  <td>
                    <span className="status-badge status-badge--processing">
                      Processing
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-btn action-btn--download" disabled title="Download">
                        <span className="material-icons">file_download</span>
                      </button>
                      <button className="action-btn action-btn--view" disabled title="View">
                        <span className="material-icons">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
