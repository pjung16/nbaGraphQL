import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './Graph.css';

function Graph({ graphOptions, players }) {
  const menuItems = [
    { label: "PTS", value: "pts" },
    { label: "REB", value: "reb" },
    { label: "AST", value: "ast" },
    { label: "STL", value: "stl" },
    { label: "BLK", value: "blk" },
    { label: "FG%", value: "fg_pct" },
    { label: "3FG%", value: "fg3_pct" },
    { label: "FT%", value: "ft_pct" },
    { label: "TO", value: "turnover" },
  ]

  return (
    <div className="graph-container">
      <DropdownMenu items={menuItems} options={graphOptions} players={players} />
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
    </div>
  );
}

export default Graph;
