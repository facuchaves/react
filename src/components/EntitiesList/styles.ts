import styled from 'styled-components';
import AddEntity from '../AddEntity';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const StyledAddEntity = styled(AddEntity)`
  width: '80%';
  padding: 20;
  display: 'inline';
  margin: '0 auto';
`;
