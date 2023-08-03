import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 380px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Container = props => {
  return <StyledContainer {...props} />;
};
