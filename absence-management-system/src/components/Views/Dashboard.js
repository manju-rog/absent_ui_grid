// src/components/Views/Dashboard.js
import React from 'react';
import { useAppState } from '../../context/AppContext';
import KPICard from '../UI/KPICard';
import ChartContainer from '../Charts/ChartContainer';
import ActivityFeed from '../UI/ActivityFeed';

/**
 * Dashboard View Component
 * Shows overview with KPIs, charts, and recent activity
 */
function Dashboard() {
  const { kpiData, chartData } = useAppState();

  // KPI cards configuration
  const kpiCards = [
    {
      id: 'total-employees',
      title: 'Total Employees',
      value: kpiData.totalEmployees,
      icon: 'people',
      variant: 'primary'
    },
    {
      id: 'present-today',
      title: 'Present Today',
      value: kpiData.presentToday,
      icon: 'check_circle',
      variant: 'success'
    },
    {
      id: 'on-leave-today',
      title: 'On Leave Today',
      value: kpiData.onLeaveToday,
      icon: 'event_busy',
      variant: 'warning'
    },
    {
      id: 'attendance-rate',
      title: 'Attendance Rate',
      value: `${kpiData.attendanceRate}%`,
      icon: 'trending_up',
      variant: 'info'
    }
  ];

  return (
    <div className="dashboard">
      {/* View Header */}
      <div className="view__header">
        <div className="view__title">
          <h1>Dashboard</h1>
          <p>Overview of absence management and team availability</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpiCards.map((card) => (
          <KPICard
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            variant={card.variant}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <ChartContainer
          title="Absence Trends"
          type="line"
          data={chartData.absenceTrends}
        />
        <ChartContainer
          title="Leave Type Distribution"
          type="doughnut"
          data={chartData.leaveTypes}
        />
      </div>

      {/* Recent Activity */}
      <div className="dashboard__activity">
        <div className="card">
          <div className="card__body">
            <h3>Recent Activity</h3>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
