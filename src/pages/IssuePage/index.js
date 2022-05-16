import React from "react";
import {Issue} from "../../components/Issue";
import {gql, useQuery} from "@apollo/client";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import styled from 'styled-components';

const IssueDiv = styled.div`
    width: '80%';
    padding: 20;
    display: 'inline';
    margin: '0 auto';
`;

const IssuePage = ({params}) => {
  const { id } = params;

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
    <IssueDiv>
      <Issue issue={issue}></Issue>
    </IssueDiv>
  );

};

const getIssueQuery = () => {
    
  return gql`
      query GetIssue($number_of_issue:Int!){
        repository(owner:"facebook", name:"react") {
          issue (number: $number_of_issue) {
            title
            body
            number
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


export default IssuePage