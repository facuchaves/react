import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

export const PlayersPage = ({ props }) => {
  //const { someAttributeFromProps } = props;

  const rows/*: GridRowsProp*/ = [
    { id: 1, playerNameCol: 'Jugador 1', playerScoreCol: 'Score 1' },
    { id: 2, playerNameCol: 'Jugador 2', playerScoreCol: 'Score 2' },
    { id: 3, playerNameCol: 'Jugador 3', playerScoreCol: 'Score 3' },
  ];

  const columns/*: GridColDef[]*/ = [
    { field: 'playerNameCol', headerName: 'Player Name', width: 150 },
    { field: 'playerScoreCol', headerName: 'Player Score', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );

};
