import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";
import { useLocation } from "wouter";
import { constants } from "../../constants/router.constants";

const IssuesList = ({ q , status }) => {
  const { t } = useTranslation();

  const [ setLocation ] = useLocation();

  const ISSUES = getIssuesQuery();
  const {loading, error, data} = useQuery(ISSUES,{
    variables: { state: status }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const columns/*: GridColDef[]*/ = [
    { field: 'title', headerName: t('issue.title'), width: 150 },
  ];
  
  const rows = mapDataToRow(data);

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        onRowClick={ gridRowParams => { setLocation( constants.router.issue_prefix + gridRowParams.id) } }
       />
    </div>
  );

};

const mapDataToRow = data => {
  return data.repository.issues.edges.map( issueEdge => {
    return { 
      id: issueEdge.node.number,
      title: issueEdge.node.title,
      body: issueEdge.node.body,
      comments: issueEdge.node.comments.edges.map( commentEdge => ({body:commentEdge.node.body})),
    }
  })
}

const getIssuesQuery = () => {
  return gql`
        query GetIssues($state:[IssueState!]){
          repository(owner:"facebook", name:"react") {
            issues(last:1, states:$state) {
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
}

const mapStateToProps = state => {
  console.log("mapStateToProps state : " , state)
  return state.searchIssues.query
} 

export default connect(mapStateToProps)(IssuesList);