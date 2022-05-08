import React from "react";
import {Issue} from "../../components/issue";
import {gql, useQuery} from "@apollo/client";

export const IssuePage = props => {
  const { id } = props.params;
  
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
      <Issue issue={issue}></Issue>
    </div>
  );

};
