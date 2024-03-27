import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Top = styled.div`
  display: flex;
  gap: 100px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 7px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
`;
