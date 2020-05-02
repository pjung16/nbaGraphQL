(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a(85)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),s=(a(66),a(20)),i=a(22),o=(a(67),a(45)),m=a(46),u=a(59),d=a(47),p=a(26),E=a(58),v=a(19),h=(a(68),a(15)),f=a.n(h),y=a(16),g=a(11),b="ADD_PLAYER",_="DELETE_PLAYER";var N="CHANGE_GRAPH_DATATYPE",w="UPDATE_PLAYERS_DATA",O="ADD_PLAYER_TO_SERIES",k="DELETE_PLAYER_FROM_SERIES";function S(){var e=Object(v.a)(["\n  query PlayerQuery($playerIds: [ID!]) {\n    stats (playerIds: $playerIds, seasons: [2019]) {\n      min\n      pts\n      reb\n      ast\n      stl\n      blk\n      fg_pct\n      fg3_pct\n      ft_pct\n      turnover\n      player {\n        first_name\n        last_name\n        id\n      }\n      game {\n        date\n      }\n    }\n  }\n"]);return S=function(){return e},e}function A(){var e=Object(v.a)(["\n  query PlayerQuery($search: String!) {\n    activePlayerSearch (search: $search) {\n      id\n      first_name\n      last_name\n      position\n      height_feet\n      height_inches\n      weight_pounds\n      team{\n        full_name\n      }\n    }\n  }\n"]);return A=function(){return e},e}var C=f()(A()),P=f()(S()),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).organizePlayerStats=function(e){var t={};return e.forEach(function(e){t["".concat(e.player.first_name," ").concat(e.player.last_name)]?t["".concat(e.player.first_name," ").concat(e.player.last_name)].push(e):t["".concat(e.player.first_name," ").concat(e.player.last_name)]=[e]}),console.log(t),Object.entries(t).map(function(e){return{id:e[0],stats:e[1].sort(function(e,t){return e.game.date<t.game.date?-1:e.game.date>t.game.date?1:0}).slice(Math.max(e[1].length-8,1))}})},a.state={submitted:!1,search:""},a.handleSearchChange=a.handleSearchChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.playerClicked=a.playerClicked.bind(Object(p.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handleSearchChange",value:function(e){e.target.value.length,this.setState({search:e.target.value,submitted:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0})}},{key:"playerClicked",value:function(e){console.log(e.target)}},{key:"render",value:function(){var e=this,t=this.props.dispatch;return l.a.createElement("div",{className:"searchbar"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.search,onChange:this.handleSearchChange,placeholder:"Search player...",className:"search-field"})),l.a.createElement("input",{type:"submit",value:"Search",className:"add-button"})),this.state.submitted?l.a.createElement(y.b,{query:C,variables:{search:this.state.search}},function(a){var n=a.loading,r=a.error,c=a.data;return n?null:(r&&console.log(r),l.a.createElement("div",{className:"dropdown"},c.activePlayerSearch.map(function(a){return l.a.createElement(y.b,{key:a.id,query:P,variables:{playerIds:[a.id]}},function(n){var r=n.loading,c=n.error,s=n.data;if(r)return null;c&&console.log(c);var i={};s&&e.organizePlayerStats(s.stats).forEach(function(e){var t={name:e.id,type:"spline"};t.data=e.stats,i=t});return l.a.createElement("div",{key:a.id,className:"dropdown-item",onClick:function(){t(function(e){return{type:b,player:e}}(a)),t({type:O,options:i}),e.setState({search:"",submitted:!1})}},a.first_name," ",a.last_name,": ",a.team.full_name)})})))}):null)}}]),t}(n.Component),F=Object(g.b)()(x);var j=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",null,"NBA Stats"),l.a.createElement(F,null))};a(76);function T(){var e=Object(v.a)(["\n  query SeasonAverageQuery($playerId: ID!) {\n    season (season: 2019, playerIds: [$playerId]) {\n      games_played\n      min\n      pts\n      reb\n      ast\n      stl\n      blk\n      fg_pct\n      fg3_pct\n      ft_pct\n      turnover\n    }\n    player (id: $playerId) {\n      first_name\n      last_name\n      position\n      team {\n        full_name\n      }\n    }\n  }\n"]);return T=function(){return e},e}var D=f()(T());var I=Object(g.b)()(function(e){var t=e.player.id,a=e.color,n=e.dispatch,r=Object(i.g)();return l.a.createElement("div",null,l.a.createElement(y.b,{query:D,variables:{playerId:t}},function(e){var c=e.loading,i=e.error,o=e.data;if(c)return null;i&&console.log(i);var m=o.season[0],u=o.player;return console.log(a),l.a.createElement("div",{className:"player-stat-block",style:{borderColor:a}},l.a.createElement("div",{className:"player-stat-head",style:{borderColor:a}},l.a.createElement("div",null,"".concat(u.first_name," ").concat(u.last_name)),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("div",null,l.a.createElement(s.b,{key:t,to:{pathname:"/player/".concat(t),state:{background:r}}},l.a.createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5.00001 24C5.00001 24.5523 5.44772 25 6.00001 25H15C15.5523 25 16 24.5523 16 24C16 23.4477 15.5523 23 15 23H7.00001V15C7.00001 14.4477 6.55229 14 6.00001 14C5.44772 14 5.00001 14.4477 5.00001 15V24ZM13.4747 15.1111L5.2929 23.2929L6.70711 24.7071L14.8889 16.5253L13.4747 15.1111Z",fill:"white"}),l.a.createElement("path",{d:"M25 6.00001C25 5.44772 24.5523 5.00001 24 5.00001H15C14.4477 5.00001 14 5.44772 14 6.00001C14 6.55229 14.4477 7.00001 15 7.00001H23V15C23 15.5523 23.4477 16 24 16C24.5523 16 25 15.5523 25 15V6.00001ZM16.5253 14.8889L24.7071 6.70711L23.2929 5.2929L15.1111 13.4747L16.5253 14.8889Z",fill:"white"})))),l.a.createElement("div",{style:{marginLeft:"10px"},onClick:function(){n(function(e){return{type:_,player:e}}(t)),n(function(e){return{type:k,player:e}}("".concat(u.first_name," ").concat(u.last_name)))}},l.a.createElement("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("line",{x1:"0.707107",y1:"0.792893",x2:"19.799",y2:"19.8848",stroke:"white",strokeWidth:"2"}),l.a.createElement("line",{x1:"19.8071",y1:"0.707107",x2:"0.71523",y2:"19.799",stroke:"white",strokeWidth:"2"}))))),l.a.createElement("div",{className:"player-stat-row"},l.a.createElement("div",{className:"w-1/3",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Pts"),l.a.createElement("div",{className:"stat-num"},m.pts)),l.a.createElement("div",{className:"w-1/3",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Reb"),l.a.createElement("div",{className:"stat-num"},m.reb)),l.a.createElement("div",{className:"w-1/3",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Ast"),l.a.createElement("div",{className:"stat-num"},m.ast))),l.a.createElement("div",{className:"player-stat-row"},l.a.createElement("div",{className:"w-23",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Stl"),l.a.createElement("div",{className:"stat-num"},m.stl)),l.a.createElement("div",{className:"w-23",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Blk"),l.a.createElement("div",{className:"stat-num"},m.blk)),l.a.createElement("div",{className:"w-23",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"GP"),l.a.createElement("div",{className:"stat-num"},m.games_played)),l.a.createElement("div",{className:"w-3/10",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"Mins"),l.a.createElement("div",{className:"stat-num"},m.min))),l.a.createElement("div",{className:"player-stat-row"},l.a.createElement("div",{className:"w-27",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"FG%"),l.a.createElement("div",{className:"stat-num"},+(100*m.fg_pct).toFixed(2))),l.a.createElement("div",{className:"w-27",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"3FG%"),l.a.createElement("div",{className:"stat-num"},+(100*m.fg3_pct).toFixed(2))),l.a.createElement("div",{className:"w-27",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"FT%"),l.a.createElement("div",{className:"stat-num"},+(100*m.ft_pct).toFixed(2))),l.a.createElement("div",{className:"w-19",style:{borderColor:a}},l.a.createElement("div",{className:"stat-name"},"TO"),l.a.createElement("div",{className:"stat-num"},m.turnover))))}))});a(78);var L=function(e){var t=e.players;console.log(t);var a=["#67DBF9","#00E680","#A722E5","#FF4848","#FF8413","#FFEB38"];return l.a.createElement("div",{className:"player-stats-block"},t?t.map(function(e,t){return l.a.createElement(I,{key:e.player.id,player:e.player,color:a[t%6]})}):null)},R=Object(g.b)(function(e){return{players:(t=e.players,t)};var t})(L),B=a(39),G=a.n(B),M=a(53),Y=a.n(M),$=a(57);a(79);function q(){var e=Object(v.a)(["\n  query PlayerQuery($playerIds: [ID!]) {\n    stats (playerIds: $playerIds, seasons: [2019]) {\n      pts\n      reb\n      ast\n      stl\n      blk\n      fg_pct\n      fg3_pct\n      ft_pct\n      turnover\n      player {\n        first_name\n        last_name\n        id\n      }\n      game {\n        date\n      }\n    }\n  }\n"]);return q=function(){return e},e}var H=f()(q());var J=Object(g.b)()(function(e){var t=Object(n.useState)(),a=Object($.a)(t,2),r=(a[0],a[1]),c=e.dispatch,s=[];return l.a.createElement("div",null,l.a.createElement("select",{className:"dropdown-menu-container",onChange:function(e){var t;r(e.currentTarget.value),c((t=e.currentTarget.value,{type:N,graph:t})),c({type:w,stats:s})}},e.players.map(function(e){return l.a.createElement(y.b,{key:e.player.id,query:H,variables:{playerIds:[e.player.id]}},function(e){var t=e.loading,a=e.error,n=e.data;return t?null:(a&&console.log(a),n&&function(e){var t={};return e.forEach(function(e){t["".concat(e.player.first_name," ").concat(e.player.last_name)]?t["".concat(e.player.first_name," ").concat(e.player.last_name)].push(e):t["".concat(e.player.first_name," ").concat(e.player.last_name)]=[e]}),console.log(t),Object.entries(t).map(function(e){return{id:e[0],stats:e[1].sort(function(e,t){return e.game.date<t.game.date?-1:e.game.date>t.game.date?1:0}).slice(Math.max(e[1].length-8,1))}})}(n.stats).forEach(function(e){var t={name:e.id,type:"spline"};t.data=e.stats,s.push(t),console.log(s)}),null)})}),e.items.map(function(e){var t=e.label,a=e.value;return l.a.createElement("option",{key:a,value:a},t)})))});a(80);var Q=function(e){var t=e.graphOptions,a=e.players;return Array.isArray(a)&&a.length?l.a.createElement("div",{className:"graph-container"},l.a.createElement(J,{items:[{label:"PTS",value:"pts"},{label:"REB",value:"reb"},{label:"AST",value:"ast"},{label:"STL",value:"stl"},{label:"BLK",value:"blk"},{label:"FG%",value:"fg_pct"},{label:"3FG%",value:"fg3_pct"},{label:"FT%",value:"ft_pct"},{label:"TO",value:"turnover"}],options:t,players:a}),l.a.createElement(Y.a,{highcharts:G.a,options:t,containerProps:{style:{height:"100%"}}})):null},W=Object(g.b)(function(e){return{graphOptions:e.graphs,players:(t=e.players,t)};var t})(Q);a(81);var V=function(){return l.a.createElement("div",{className:"home"},l.a.createElement(j,null),l.a.createElement("div",{className:"blocks-container"},l.a.createElement(R,null),l.a.createElement(W,null)))},Z=a(54),z=a.n(Z);a(82);function U(){var e=Object(v.a)(["\n    query PlayerQuery($playerId: ID!) {\n      stats (playerIds: [$playerId], seasons: [2019]) {\n        min\n        pts\n        reb\n        ast\n        stl\n        blk\n        fg_pct\n        fg3_pct\n        ft_pct\n        turnover\n        game {\n          date\n        }\n      }\n      season (season: 2019, playerIds: [$playerId]) {\n        games_played\n        min\n        pts\n        reb\n        ast\n        stl\n        blk\n        fg_pct\n        fg3_pct\n        ft_pct\n        turnover\n      }\n      player (id: $playerId) {\n        first_name\n        last_name\n        position\n        team {\n          full_name\n        }\n      }\n    }\n  "]);return U=function(){return e},e}var K=f()(U());var X=function(){var e=Object(i.g)(),t=e.state&&e.state.background,a=Object(i.h)().id,n=Object(i.f)(),r=function(e){e.stopPropagation(),n.goBack()};return l.a.createElement("div",{className:"profile-container"},l.a.createElement(y.b,{query:K,variables:{playerId:a}},function(e){var a=e.loading,n=e.error,c=e.data;return a?null:(n&&console.log(n),console.log(c),c&&c.stats.sort(function(e,t){return e.game.date>t.game.date?-1:e.game.date<t.game.date?1:0}),l.a.createElement("div",{style:{position:"relative"}},t?l.a.createElement("div",{className:"close-button",onClick:r},l.a.createElement("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("line",{x1:"0.707107",y1:"0.792893",x2:"29.799",y2:"29.8848",stroke:"white","stroke-width":"2"}),l.a.createElement("line",{x1:"29.8071",y1:"0.707107",x2:"0.71523",y2:"29.799",stroke:"white","stroke-width":"2"}))):l.a.createElement(s.b,{to:{pathname:"/"},className:"home-button"},l.a.createElement("svg",{width:"42",height:"33",viewBox:"0 0 42 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M42 16.5H3M3 16.5L19.4458 2M3 16.5L19.4458 31",stroke:"white","stroke-width":"3"})),l.a.createElement("span",{style:{marginLeft:"10px"}},"Home")),l.a.createElement("div",{className:"player-name"},c.player.first_name," ",c.player.last_name),l.a.createElement("div",{className:"table-title"},"Season Averages"),l.a.createElement("div",{className:"season-average-table-container"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"GP"),l.a.createElement("th",null,"Min"),l.a.createElement("th",null,"Pts"),l.a.createElement("th",null,"Reb"),l.a.createElement("th",null,"Ast"),l.a.createElement("th",null,"Stl"),l.a.createElement("th",null,"Blk"),l.a.createElement("th",null,"FG%"),l.a.createElement("th",null,"3FG%"),l.a.createElement("th",null,"FT%"),l.a.createElement("th",null,"TO")),l.a.createElement("tr",null,c.season.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,e.games_played),l.a.createElement("td",null,e.min),l.a.createElement("td",null,e.pts),l.a.createElement("td",null,e.reb),l.a.createElement("td",null,e.ast),l.a.createElement("td",null,e.stl),l.a.createElement("td",null,e.blk),l.a.createElement("td",null,e.fg_pct),l.a.createElement("td",null,e.fg3_pct),l.a.createElement("td",null,e.ft_pct),l.a.createElement("td",null,e.turnover))})))),l.a.createElement("div",{className:"table-title"},"Previous Games"),l.a.createElement("div",{className:"previous-game-table-container"},l.a.createElement("table",null,l.a.createElement("tr",{className:"previous-game-table-header"},l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Min"),l.a.createElement("th",null,"Pts"),l.a.createElement("th",null,"Reb"),l.a.createElement("th",null,"Ast"),l.a.createElement("th",null,"Stl"),l.a.createElement("th",null,"Blk"),l.a.createElement("th",null,"FG%"),l.a.createElement("th",null,"3FG%"),l.a.createElement("th",null,"FT%"),l.a.createElement("th",null,"TO")),c.stats.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,z()(e.game.date).format("M/D/YY")),l.a.createElement("td",null,e.min),l.a.createElement("td",null,e.pts),l.a.createElement("td",null,e.reb),l.a.createElement("td",null,e.ast),l.a.createElement("td",null,e.stl),l.a.createElement("td",null,e.blk),l.a.createElement("td",null,e.fg_pct),l.a.createElement("td",null,e.fg3_pct),l.a.createElement("td",null,e.ft_pct),l.a.createElement("td",null,e.turnover))})))))}))};a(83);var ee=function(){return Object(i.f)(),l.a.createElement("div",{className:"modal-container"},l.a.createElement("div",{className:"modal"},l.a.createElement(X,null)))};var te=function(){var e=Object(i.g)(),t=e.state&&e.state.background;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.c,{location:t||e},l.a.createElement(i.a,{exact:!0,path:"/",children:l.a.createElement(V,null)}),l.a.createElement(i.a,{exact:!0,path:"/player/:id",children:l.a.createElement(X,null)})),t&&l.a.createElement(i.a,{path:"/player/:id",children:l.a.createElement(ee,null)}))},ae=(a(84),new(a(56).a)({uri:"/graphql"}));var ne=function(){return l.a.createElement(y.a,{client:ae},l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(te,null))))},le=a(25),re=a(28),ce={players:[],graphOptions:{graphDataType:"pts",chart:{backgroundColor:"#282C34",type:"line"},title:{text:"Player Stats Comparison",style:{color:"#ffffff"}},xAxis:{labels:{enabled:!1}},yAxis:{title:{text:"Points"}},tooltip:{shared:!0},legend:{itemStyle:{color:"#ffffff"}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:0}},series:[],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}};var se=Object(le.b)({graphs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce.graphOptions,t=arguments.length>1?arguments[1]:void 0,a=["#67DBF9","#00E680","#A722E5","#FF4848","#FF8413","#FFEB38"];switch(t.type){case"CHANGE_GRAPH_DATATYPE":var n=JSON.parse(JSON.stringify(e));return n.graphDataType=t.graph,console.log(t.graph),n.yAxis.title.text={pts:"Points",reb:"Rebounds",ast:"Assists",stl:"Steals",blk:"Blocks",fg_pct:"Field Goal Percentage",fg3_pct:"Three Point Field Goal Percentage",ft_pct:"Free Throw Percentage",turnover:"Turnovers"}[t.graph],n;case"UPDATE_PLAYERS_DATA":var l=JSON.parse(JSON.stringify(e));return l.series=t.stats,l.series.forEach(function(t,n){t.color=a[n%6],t.data=t.data.map(function(t){return t[e.graphDataType]})}),l;case"ADD_PLAYER_TO_SERIES":var r=JSON.parse(JSON.stringify(e));return t.options.data=t.options.data.map(function(t){return t[e.graphDataType]}),r.series=[].concat(Object(re.a)(r.series),[t.options]),r.series.forEach(function(e,t){e.color=a[t%6]}),r;case"DELETE_PLAYER_FROM_SERIES":var c=JSON.parse(JSON.stringify(e));return c.series=e.series.filter(function(e){return e.name!==t.player}),c.series.forEach(function(e,t){e.color=a[t%6]}),c;default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce.players,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLAYER":return[].concat(Object(re.a)(e),[t]);case"DELETE_PLAYER":var a=0;return e.forEach(function(e,n){e.player.id===t.player&&(a=n)}),[].concat(Object(re.a)(e.slice(0,a)),Object(re.a)(e.slice(a+1)));default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(le.c)(se);c.a.render(l.a.createElement(g.a,{store:ie},l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[61,1,2]]]);
//# sourceMappingURL=main.96ca1c71.chunk.js.map