import styled from 'styled-components';
import AddEntityForm from './AddEntityForm';

export const modalBoxStyle = {
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

export const StyledAddEntityForm = styled(AddEntityForm)`
  width: 80%;
  padding: 20px;
  display: inline;
  margin: 0 auto;
`;
