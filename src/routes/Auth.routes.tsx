import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Welcome" component={Welcome} />
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    );
};

export default AppRoutes;