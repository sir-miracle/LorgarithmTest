import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './src/navigation/root_navigation/RootNav';
import { Provider } from 'react-redux';
import store from './src/data_storage/store';

export default function App() {


  return (
    <Provider store={store}>

      <NavigationContainer>
        <StatusBar
          barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={'black'}
          animated={true} />
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
}
