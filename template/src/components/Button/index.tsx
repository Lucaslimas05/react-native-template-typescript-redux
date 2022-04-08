import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { Container, Title } from './styles';

type ButtonType = {
    title: string;
    onPress: () => void
    containerStyle?: ViewStyle
}

const Button: React.FC<ButtonType> = ({ onPress, title, containerStyle }) => {
    return (
        <Container
            style={containerStyle ?? {}}
            onPress={onPress} >
            <Title>{title}</Title>
        </Container>
    )
}

export default Button;