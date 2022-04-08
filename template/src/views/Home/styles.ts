import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
  justify-content: center;
  background-color: ${({theme}) => theme.BACKGROUND_COLOR};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #444ede;
`;
