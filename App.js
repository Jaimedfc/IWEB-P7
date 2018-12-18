import React from 'react';
import ReduxProvider from './AppReactRedux/redux/ReduxProvider';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider style={styles.container} key='ReduxProvider'/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
