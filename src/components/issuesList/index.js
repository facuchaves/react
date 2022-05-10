import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";
import { useLocation } from "wouter";
import { constants } from "../../constants/router.constants";
import { Box, LinearProgress } from "@material-ui/core";
import ErrorIcon from '@mui/icons-material/Error';

const IssuesList = ({ query }) => {
  const { t } = useTranslation();
  
  // eslint-disable-next-line no-unused-vars
  const [ location , setLocation ] = useLocation();
  console.log("query : " , query)
  const ISSUES = getIssuesQuery();
  const {loading, error, data} = useQuery(ISSUES,{
    // variables: {repo: 'facebook/react', state: 'OPEN', q: ''}
    variables: { q: "repo:" + query.repo + " is:issue is:" + query.state + " " + query.q }
  });

  if (loading) return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );

  if (error) return <ErrorIcon/>;

  const columns/*: GridColDef[]*/ = [
    { field: 'title', headerName: t('issue.title'), width: 150 },
  ];
  
  const rows = mapDataToRow(data);

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <DataGrid 
        test-id="listOfIssuesTestId"
        rows={rows} 
        columns={columns} 
        onRowClick={ gridRowParams => { setLocation( constants.router.issue_prefix + gridRowParams.id) } }
       />
    </div>
  );

};

const mapDataToRow = data => {
  return data.search.nodes.map( node => {
    return { 
      id: node.number,
      title: node.title,
      body: node.body,
    }
  })
}

const getIssuesQuery = () => {
  return gql`
        query GetIssues($q:String!){
          search(query: $q, type: ISSUE, first: 10) {
            nodes {
              ... on Issue {
                number
                title
                body
              }
            }
          }
        }
      `;
}

const mapStateToProps = state => {
  return state.issuesStore
} 

export default connect(mapStateToProps)(IssuesList);