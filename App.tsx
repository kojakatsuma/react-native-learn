import React from 'react';
import { Text, View, Linking } from 'react-native';


export default () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      <Text >Learn</Text>
      <Text onPress={() => Linking.openURL('https://reactnative.dev/docs/flexbox')}>this</Text>
    </View>
  );
}
