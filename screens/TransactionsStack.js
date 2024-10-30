import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './TransactionsListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Stack = createStackNavigator();

export default function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions List" component={TransactionsListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetailScreen} options={{ title: 'Transaction Details' }} />
    </Stack.Navigator>
  );
}