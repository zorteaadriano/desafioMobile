// Navigation.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import SearchScreen from './SearchScreen';
import UserInfoScreen from './UserInfoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RepositoriesScreen from './RepositoriesScreen';
import { theme } from '../assets/styles/theme';

const Stack = createNativeStackNavigator();

function CustomHeader() {
  return (
    <View style={{ shadowOpacity: 0}}>
      <Icon
        name='menu'
        color={theme.colors.black}
        size={30}
      />
    </View>
  );
}
  
function CustomHeaderRight() {
  return (
    <View style={{ height: 30, shadowOpacity: 0, elevation: 0, right: 20}}>
      <Icon
        name='turned-in'
        color={theme.colors.black}
        size={20}
      />
    </View>
  );
}

function CustomHeaderLeft({ navigation }) {
  return (
    <View style={{ height: 30, width: 40, shadowOpacity: 0, elevation: 0, left: 0}}>
      <Icon
        name='keyboard-arrow-left'
        color={theme.colors.black}
        size={30}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
    
export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: { elevation: 0 },
          backgroundColor: '#fff',
        }}
      >
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShadowVisible: false,
            headerTitleContainerStyle: { position: 'absolute' },
            headerRight: () => <Icon name="account-circle" color={theme.colors.black} size={40} />,
            headerStyle: { backgroundColor: '#fff' },
            headerTitle: '',
            headerLeft: () => <CustomHeader />,
            backgroundColor: 'white',
          }}
        />
      
        <Stack.Screen
          name="UserInfoScreen"
          component={UserInfoScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: '',
            headerRight: () => <CustomHeaderRight />,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            backgroundColor: 'white',
          })}
        />
      
        <Stack.Screen
          name="RepositoriesScreen"
          component={RepositoriesScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: 'Repositories',
            headerRight: null,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#fff',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
      