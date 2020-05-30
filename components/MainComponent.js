import * as React from 'react';
import Login from './HomeComponent';
import 'react-native-gesture-handler';
import About from './AboutComponent';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function Main()
{
return(
    <NavigationContainer>
    <Tab.Navigator initialRouteName="about" activeColor="#EE801E"
  inactiveColor="#D8D9DE"
  barStyle={{backgroundColor: '#000'}}
  >


        <Tab.Screen name="Home" component={About} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="About" component={About}
                options={{
                  tabBarLabel: 'Sign Up',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="wallet-membership" color={color} size={26} />
                  ),
                }}
        />


      </Tab.Navigator>
      </NavigationContainer>
  );

}
export default Main;
