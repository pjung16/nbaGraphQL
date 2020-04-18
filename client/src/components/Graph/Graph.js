import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

function Graph({ graphOptions }) {

  return (
    <div className="graph-container">
      {/* {Array.isArray(graphOptions.series) && graphOptions.series.length ? */}
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
      {/* : null} */}
    </div>
  );
}

export default Graph;
