import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './src/routes';

// AsyncStorage.clear();

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Warning: AsyncStorage has been extracted',
]);

export default function App() {
  return <Routes />;
}
