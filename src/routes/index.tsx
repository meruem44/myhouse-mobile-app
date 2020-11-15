import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
};

export default Routes