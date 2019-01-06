import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { blue } from '../utils/colors';

export default function Pagination ({ currentNum, total }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Question {currentNum} out of {total}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 0,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '700',
    color: blue,
  },
});