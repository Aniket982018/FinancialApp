import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50 },
  { id: '2', name: 'Rent', amount: 1000 },
  { id: '3', name: 'Utilities', amount: 150 },
];

export default function SummaryScreen() {
  const totalExpenses = transactions.reduce((total, item) => total + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.label}>Total Expenses:</Text>
      <Text style={styles.total}>${totalExpenses}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      color: '#888',
    },
    total: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#4CAF50',
      marginTop: 8,
    },
  });