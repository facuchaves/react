import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useEntity from '../../hooks/useEntity';
import Entity from '../../components/Entity';

const EntityDiv = styled.div`
  width: '80%';
  padding: 20;
  display: 'inline';
  margin: '0 auto';
`;

const EntityPage = ({id}: {id: string}) => {
  const {loading, error, entity} = useEntity(parseInt(id, 10));

  if (loading)
    return (
      <Box sx={{width: '100%'}}>
        <LinearProgress />
      </Box>
    );

  if (error) return <ErrorIcon />;

  return (
    <EntityDiv>
      <Entity entity={entity} />
    </EntityDiv>
  );
};

EntityPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EntityPage;
