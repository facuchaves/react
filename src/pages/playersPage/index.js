import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import { getPlayers } from "../../services/playersService";

export const PlayersPage = ({ props }) => {
  //const { someAttributeFromProps } = props;

  const rows/*: GridRowsProp*/ = getPlayers();

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
