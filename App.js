import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SearchScreen from './src/components/SearchScreen';
import UserInfoScreen from './src/components/UserInfoScreen';
import Menu from './src/assets/icons/menu.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

function CustomHeader() {
  return (
    <View style={{ height: 60,  shadowOpacity: 0, elevation: 0, paddingTop: 20 }}>
      <Icon
        name='menu'
        color='#333'
        size={30}
      />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="SearchScreen" 
            component={SearchScreen} 
            options={{
              headerShadowVisible: false,
              headerRight: () =>  (
                <Icon
                  name='account-circle'
                  color='#333'
                  size={40}
                />),
              headerTitleContainerStyle: {
                left: 30, 
                right: 30,
              },
              headerTitle: () => <CustomHeader />, // Use o componente personalizado
              
            }}
          />
          <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} 
           options={{
            headerShadowVisible: false,
           }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
