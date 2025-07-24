import React from 'react';

function ChartContainer({ title, type, data }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>Chart ({type}) - Integration needed</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ChartContainer;
