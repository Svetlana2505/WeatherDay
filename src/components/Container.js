import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: ${({ margin }) => margin || '0 auto'};

  @media screen and (min-width: 360px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 60px;
    width: 1024px;
  }
`;

export const Container = props => {
  return <StyledContainer {...props} />;
};
