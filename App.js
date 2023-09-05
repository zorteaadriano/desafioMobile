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
import RepositoriesScreen from './src/components/RepositoriesScreen';

const Stack = createNativeStackNavigator();

function CustomHeader() {
  return (
    <View style={{ shadowOpacity: 0}}>
      <Icon
        name='menu'
        color='#333'
        size={30}
      />
    </View>
  );
}

function CustomHeaderRight() {
  return (
    <View style={{ height: 30, shadowOpacity: 0, elevation: 0, right: 50}}>
      <Icon
        name='turned-in'
        color='#333'
        size={20}
      />
    </View>
  );
}

function CustomHeaderLeft() {
  return (
    <View style={{ height: 30, width: 60, shadowOpacity: 0, elevation: 0, left: 0}}>
      <Icon
        name='keyboard-arrow-left'
        color='#333'
        size={30}
      />
    </View>
  );
}



function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={{backgroundColor: '#fff', flex: 1}}>
        <Stack.Navigator screenOptions={{ headerShown: true, headerTransparent: true, headerStyle: { elevation: 0 }, backgroundColor: '#fff' }}>
          <Stack.Screen 
            name="SearchScreen" 
            component={SearchScreen} 
            options={{
              headerShadowVisible: false,
              headerTitleContainerStyle: { position: 'absolute'},
              headerRight: () =>  (
                <Icon
                  name='account-circle'
                  color='#333'
                  size={40}
                />),
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTitle: '',
              headerLeft: () => <CustomHeader />, 
              backgroundColor: 'white'
            }}
          />
          <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} 
            options={{
              headerShadowVisible: false,
              headerTitle: '',
              headerRight: () => <CustomHeaderRight />,
              headerLeft: () => <CustomHeaderLeft />,
              backgroundColor: 'white'
            }}
            
          />

          <Stack.Screen name="RepositoriesScreen" component={RepositoriesScreen} 
            options={{
              headerShadowVisible: false,
              headerTitle: 'Repositories',
              headerRight: null,
              headerLeft: () => <CustomHeaderLeft />,
              headerStyle: {
                backgroundColor: '#fff'
              },
              
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
