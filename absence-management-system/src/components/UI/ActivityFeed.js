// src/components/UI/ActivityFeed.js
import React from 'react';

function ActivityFeed() {
  const activities = [
    {
      id: 1,
      icon: 'person',
      message: 'John Doe marked absent today',
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: 'event',
      message: 'New leave request submitted by Jane Smith',
      time: '4 hours ago'
    },
    {
      id: 3,
      icon: 'check_circle',
      message: 'Sarah Wilson marked present',
      time: '6 hours ago'
    }
  ];

  return (
    <div className="activity-feed">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <span className="material-icons activity-icon">{activity.icon}</span>
          <div className="activity-content">
            <p className="activity-message">{activity.message}</p>
            <span className="activity-time">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;
