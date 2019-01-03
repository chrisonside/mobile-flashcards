import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, white } from '../utils/helpers';

export default function Pagination ({ currentNum, total }) {
  return (
    <View>
      <View>
        <Text>{currentNum}/{total}</Text>
      </View>
    </View>
  )
}