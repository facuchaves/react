import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {gql, useQuery} from "@apollo/client";
import { useLocation } from "wouter";
import constants from "../../constants/router.constants";
import Box from '@mui/material/Box';
import { Grid, Paper } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

const IssuesList = ({ query }) => {
  const { t } = useTranslation();
  
  const skeletonArray = Array(10).fill('');

  // eslint-disable-next-line no-unused-vars
  const [ location , setLocation ] = useLocation();
  const ISSUES = getIssuesQuery();
  const {loading, error, data} = useQuery(ISSUES,{
    variables: { q: "repo:" + query.repo + " is:issue is:" + query.state + " " + query.q }
  });

  if (error) return (
      <IssueListWrapper>
        <Box sx={{ width: '100%' }}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
        </Box>
      </IssueListWrapper>

  )

  return (
        <IssueListWrapper>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('issue.title')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {( loading && ( skeletonArray.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton /></TableCell>
                </TableRow>
              )) ) ) 
              || 
              mapDataToRow(data).map((row) => (
                <TableRow sx={{cursor: 'pointer'}} key={row.id} test_id={'row-isssue-id'} test_issue_id={row.id} onClick={ () => { setLocation( constants.router.issue_prefix + row.id) } }>
                  <TableCell>{row.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </IssueListWrapper>
  );

};

const IssueListWrapper = ({children}) => {
  return(
  <Grid item xs={12}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' , height: 400, width: '100%' }}>
      <React.Fragment>
        {children}
      </React.Fragment>
    </Paper>
  </Grid>
  )
}

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