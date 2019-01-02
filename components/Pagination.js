import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, white } from '../utils/helpers';

export default function Pagination ({ page, total }) {
  return (
    <View>
      <View>
        <Text>`${page}/${total}`</Text>
      </View>
    </View>
  )
}