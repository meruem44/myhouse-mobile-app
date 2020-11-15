import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HouseRoutes from './House.routes';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

import { Octicons } from '@expo/vector-icons';
import { colors } from '../styles';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
      <Navigator
        tabBarOptions={{
            style: {
                height: 62,
                backgroundColor: colors.bg,
                borderColor: colors.bg,
                elevation: 5
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20
              },
              labelStyle: {
                fontFamily: 'font500',
                fontSize: 14,
                marginTop: 5
              },
              inactiveTintColor: colors.gray,
              activeTintColor: colors.secundary
        }}
      >
          <Screen 
          name="HouseRoutes" 
          component={HouseRoutes} 
          options={{
              tabBarLabel: "Home",
              tabBarIcon:({ focused, color, size }) => (
                <Octicons 
                    name="home"
                    size={size}
                    color={focused ? colors.secundary : color}
                />
              )
          }}
          />

        <Screen 
          name="Favorites" 
          component={Favorites} 
          options={{
              tabBarLabel: "Favoritos",
              tabBarIcon:({ focused, color, size }) => (
                <Octicons 
                    name="heart"
                    size={size}
                    color={focused ? colors.secundary : color}
                />
              )
          }}
          />

        <Screen 
          name="Profile" 
          component={Profile} 
          options={{
              tabBarLabel: "Perfil",
              tabBarIcon:({ focused, color, size }) => (
                <Octicons 
                    name="person"
                    size={size}
                    color={focused ? colors.secundary : color}
                />
              )
          }}
          />
      </Navigator>
  );
}

export default AppRoutes;