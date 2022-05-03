import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
// import { useIssues } from "../../hooks/useIssues";
import SimpleCard from "../../components/issue";
import { useSelector, useDispatch, connect } from "react-redux";
import { clickPlayer } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";

export const IssuePage = ({ props }) => {
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
          }
        }
      }
    }
  }
`;

  const {loading, error, data} = useQuery(ISSUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const rows = data.repository.issues.edges.map( issueEdge => {
    return { 
      id: issueEdge.node.number,
      title: issueEdge.node.title,
      body: issueEdge.node.body,
      comments: issueEdge.node.comments.edges.map( commentEdge => ({body:commentEdge.node.body})),
    }
  });
  
  const columns/*: GridColDef[]*/ = [
    { field: 'title', headerName: t('issue.title'), width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <SimpleCard issue={rows[0]}></SimpleCard>
    </div>
  );

};

const stateIssue = (state) => ({ isClicked: state.isClicked })

export default connect(stateIssue)(IssuePage);