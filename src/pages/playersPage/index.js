import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import { usePlayers } from "../../hooks/usePlayers";
import SimpleCard from "../../components/players";
import { useSelector, useDispatch, connect } from "react-redux";
import { clickPlayer } from "../../redux/actions";

export const PlayersPage = ({ props }) => {
  //const { someAttributeFromProps } = props;

  const dispatch = useDispatch();

  dispatch(clickPlayer());

  const rows/*: GridRowsProp*/ = usePlayers();
  
  const columns/*: GridColDef[]*/ = [
    { field: 'playerNameCol', headerName: 'Player Name', width: 150 },
    { field: 'playerScoreCol', headerName: 'Player Score', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
      <SimpleCard player={rows[0]}></SimpleCard>
    </div>
  );

};

const statePlayer = (state) => ({ isClicked: state.isClicked })

export default connect(statePlayer)(PlayersPage);