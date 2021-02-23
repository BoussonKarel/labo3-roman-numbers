// Door te werken in een file index.tsx vinden we bij het inkaden van deze folder meteen de goede file (route)
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Settings from './Settings';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default AppStack;