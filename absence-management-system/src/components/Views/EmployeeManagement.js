// src/components/Views/EmployeeManagement.js
import React, { useState } from 'react';
import { useAppState } from '../../context/AppContext';

/**
 * Employee Management Component
 * Displays and manages employee information in a data table format
 */
function EmployeeManagement() {
  const { employees, departments, locations } = useAppState();
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  // Generate employee initials for avatars
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  // Get avatar color based on employee name
  const getAvatarColor = (name) => {
    const colors = [
      '#1976d2', '#dc004e', '#388e3c', '#f57c00', 
      '#7b1fa2', '#5d4037', '#455a64', '#e91e63'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  // Handle checkbox selection
  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEmployees(employees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  // Filter employees based on search and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All Departments' || 
                             employee.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All Locations' || 
                           employee.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="employee-management">
      {/* Header */}
      <div className="view__header">
        <div className="view__title">
          <h1>Employee Management</h1>
          <p>Manage employee information and details</p>
        </div>
        <div className="view__actions">
          <button className="btn btn--secondary">
            <span className="material-icons">file_upload</span>
            Import CSV
          </button>
          <button className="btn btn--secondary">
            <span className="material-icons">file_download</span>
            Export
          </button>
          <button className="btn btn--primary">
            <span className="material-icons">person_add</span>
            Add Employee
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="employee-filters">
        <div className="search-section">
          <div className="search-input-wrapper">
            <span className="material-icons search-icon">search</span>
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="filter-section">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All Departments">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All Locations">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <div className="employee-table-container">
        <div className="employee-table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th className="checkbox-column">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedEmployees.length === employees.length}
                    className="table-checkbox"
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Location</th>
                <th>System</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr 
                  key={employee.id} 
                  className={selectedEmployees.includes(employee.id) ? 'row-selected' : ''}
                >
                  <td className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={selectedEmployees.includes(employee.id)}
                      onChange={() => handleEmployeeSelect(employee.id)}
                      className="table-checkbox"
                    />
                  </td>
                  
                  <td className="name-column">
                    <div className="employee-name-cell">
                      <div 
                        className="employee-avatar"
                        style={{ backgroundColor: getAvatarColor(employee.name) }}
                      >
                        {getInitials(employee.name)}
                      </div>
                      <span className="employee-name">{employee.name}</span>
                    </div>
                  </td>
                  
                  <td className="email-column">
                    <span className="employee-email">{employee.email}</span>
                  </td>
                  
                  <td className="department-column">
                    <span className={`department-badge department-badge--${employee.department.toLowerCase().replace(/\s+/g, '-')}`}>
                      {employee.department}
                    </span>
                  </td>
                  
                  <td className="role-column">
                    <span className="employee-role">{employee.role}</span>
                  </td>
                  
                  <td className="location-column">
                    <span className="employee-location">{employee.location}</span>
                  </td>
                  
                  <td className="system-column">
                    <div className="system-info">
                      <div className="system-name">{employee.systemName}</div>
                      <div className="system-ip">{employee.systemIP}</div>
                    </div>
                  </td>
                  
                  <td className="actions-column">
                    <div className="table-actions">
                      <button 
                        className="action-btn action-btn--edit"
                        title="Edit Employee"
                      >
                        <span className="material-icons">edit</span>
                      </button>
                      <button 
                        className="action-btn action-btn--view"
                        title="View Employee"
                      >
                        <span className="material-icons">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results Summary */}
      <div className="table-footer">
        <div className="results-info">
          Showing {filteredEmployees.length} of {employees.length} employees
          {selectedEmployees.length > 0 && (
            <span className="selection-info">
              ({selectedEmployees.length} selected)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;
