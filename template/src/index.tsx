import React from 'react';
import Routes from './routes'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { themes } from './global/themes';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../src/reducers/index'

function AppNavigation() {

    // const deviceTheme = useColorScheme()
    //const theme = deviceTheme ? themes[deviceTheme] : themes.light
    const theme = themes

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Provider store={store} >
                    <ThemeProvider theme={theme} >
                        <Routes />
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default AppNavigation;
