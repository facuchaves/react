import React from "react";
import {Issue} from "../../components/issue";
import {gql, useQuery} from "@apollo/client";
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from "@material-ui/core";
import ErrorIcon from '@mui/icons-material/Error';

export const IssuePage = props => {
  const { id } = props.params;

  const ISSUE = getIssueQuery()
  const {loading, error, data} = useQuery(ISSUE,{
    variables : {
      number_of_issue: Number(id)
    }
  })

  if (loading) return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );

  if (error) return <ErrorIcon/>;

  const issue = { 
      id: data.repository.issue.number,
      title: data.repository.issue.title,
      body: data.repository.issue.body,
      comments: data.repository.issue.comments.edges.map( commentEdge => ({body:commentEdge.node.body})),
    }
  
  return (
    <div style={{ height: 300, width: '100%' }}>
      <Issue issue={issue}></Issue>
    </div>
  );

};

const getIssueQuery = () => {
    
  return gql`
      query GetIssue($number_of_issue:Int!){
        repository(owner:"facebook", name:"react") {
          issue (number: $number_of_issue) {
            title
            url
            body
            number
            state
            comments(first:5) {
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

}