import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  elevation: 1,
  activeOpacity: 0.8,
})`
  padding: 10px;
  background-color: ${({theme}) => theme.PRIMARY_COLOR};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
