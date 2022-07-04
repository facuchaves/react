import React from "react";
import {Entity} from "../../components/Entity";
import {gql, useQuery} from "@apollo/client";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import styled from 'styled-components';
import { useEntity } from "../../hooks/useEntity";

const EntityDiv = styled.div`
    width: '80%';
    padding: 20;
    display: 'inline';
    margin: '0 auto';
`;

const EntityPage = ({params}) => {
  const { id } = params;

  // if (loading) return (
  //   <Box sx={{ width: '100%' }}>
  //     <LinearProgress />
  //   </Box>
  // );

  // if (error) return <ErrorIcon/>;

  const entity = useEntity(id)
  
  return (
    <EntityDiv>
      <Entity entity={entity}></Entity>
    </EntityDiv>
  );

};

export default EntityPage