/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import MyIcon from 'react-native-custom-icon';
import IcomoonConfig from './assets/Iconly/selection.json';

export const Iconly = props => {
  return (
    <MyIcon
      name={props.name}
      color={props.color}
      size={props.size}
      config={IcomoonConfig}
    />
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView>
      {/* <Text>Iconly</Text> */}
      {/* <Iconly name="ActivityBold" color="blue" size={50} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
