import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
// import { useIssues } from "../../hooks/useIssues";
import SimpleCard from "../../components/issue";
import { useSelector, useDispatch, connect } from "react-redux";
import { clickPlayer } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";

export const IssuePage = props => {
  const { t } = useTranslation();

  const { id } = props.params;
  
  const dispatch = useDispatch();

  dispatch(clickPlayer());

  // const rows/*: GridRowsProp*/ = useIssues();

  const ISSUES = gql`
  query GetIssue($number_of_issue:Int!){
    repository(owner:"facebook", name:"react") {
      issue (number: $number_of_issue) {
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
`;

  const {loading, error, data} = useQuery(ISSUES,{
    variables: { number_of_issue: Number(id) }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const issue = { 
      id: data.repository.issue.number,
      title: data.repository.issue.title,
      body: data.repository.issue.body,
      comments: data.repository.issue.comments.edges.map( commentEdge => ({body:commentEdge.node.body})),
    }
  
  return (
    <div style={{ height: 300, width: '100%' }}>
      <SimpleCard issue={issue}></SimpleCard>
    </div>
  );

};

const stateIssue = (state) => ({ isClicked: state.isClicked })

export default connect(stateIssue)(IssuePage);