import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';
import AddPlayerScreen from './Screens/AddPlayerScreen';
import EditPlayerScreen from './Screens/EditPlayerScreen';
import ViewPlayerScreen from './Screens/ViewPlayerScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddPlayer" component={AddPlayerScreen} />
        <Stack.Screen name="EditPlayer" component={EditPlayerScreen} />
        <Stack.Screen name="ViewPlayer" component={ViewPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
