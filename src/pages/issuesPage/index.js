import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
// import { useIssues } from "../../hooks/useIssues";
import SimpleCard from "../../components/players";
import { useSelector, useDispatch, connect } from "react-redux";
import { clickPlayer } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";

export const IssuesPage = ({ props }) => {
  const { t } = useTranslation();

  //const { someAttributeFromProps } = props;

  const dispatch = useDispatch();

  dispatch(clickPlayer());

  // const rows/*: GridRowsProp*/ = useIssues();

  const ISSUES = gql`
  query GetIssues{
    repository(owner:"facebook", name:"react") {
      issues(last:1, states:CLOSED) {
        edges {
          node {
            title
            url
            body
            number
            state
            comments(first:1) {
              edges { 
                node { 
                  body 
                } 
              }
            }
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

  const {loading, error, data} = useQuery(ISSUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const rows = data.repository.issues.edges.map( edge => ({ id: edge.node.number, issueTitleCol: edge.node.title }) );
  
  const columns/*: GridColDef[]*/ = [
    { field: 'issueTitleCol', headerName: t('issue.title'), width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
      {/* <SimpleCard player={rows[0]}></SimpleCard> */}
    </div>
  );

};

const stateIssue = (state) => ({ isClicked: state.isClicked })

export default connect(stateIssue)(IssuesPage);