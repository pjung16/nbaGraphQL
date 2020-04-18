import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

function Graph({ graphOptions }) {

  return (
    <div className="graph-container">
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
    </div>
  );
}

export default Graph;
