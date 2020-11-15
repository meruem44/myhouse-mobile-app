import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createStackNavigator();

const HouseRoutes: React.FC = () => {
  return (
      <Navigator 
      screenOptions={{
        headerShown: false
    }}
    initialRouteName-="Home"
      >
          <Screen name="Home" component={Home} />
          <Screen name="Details" component={Details} />
          <Screen name="Favorites" component={Favorites} />
      </Navigator>
  );
}

export default HouseRoutes;