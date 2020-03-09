import React from 'react';
import { Text, View } from 'react-native';


export default () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      <Text >Learn <a href='https://reactnative.dev/docs/flexbox'>this </a></Text>
    </View>
  );
}
