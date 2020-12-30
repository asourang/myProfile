import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:96}}>Profile</Text>
      <Text style={{fontSize:40}}>Name: Aida</Text>
      <Text style={{fontSize:40}}>Address: Sterling, VA</Text>
      <Text style={{fontSize:40}}>Education: BS in Computer Science</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
