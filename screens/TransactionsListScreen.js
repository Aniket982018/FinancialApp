import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50, date: '2023-08-01' },
  { id: '2', name: 'Rent', amount: 1000, date: '2023-08-01' },
  { id: '3', name: 'Utilities', amount: 150, date: '2023-08-01' },
];

export default function TransactionsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
          >
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>${item.amount}</Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    item: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    amount: {
      fontSize: 16,
      color: '#4CAF50',
    },
    date: {
      fontSize: 12,
      color: '#999',
      marginTop: 4,
    },
  });