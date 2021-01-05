import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      
      source={
    
        require("./assets/me.png")
        
      
      }
      />
      <Text style={{fontSize:22}}>Name: Aida</Text>
      <Text style={{fontSize:22}}>Address: Sterling, VA</Text>
      <Text style={{fontSize:22}}>Education: BS in Computer Science</Text>
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
