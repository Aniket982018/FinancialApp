import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{transaction.name}</Text>
      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.value}>${transaction.amount}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: '#888',
      marginTop: 8,
    },
    value: {
      fontSize: 16,
      marginBottom: 8,
    },
  });