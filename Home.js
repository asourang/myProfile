//step1: imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text,Image, View , StyleSheet} from 'react-native';

//Step2: custom components
 const Home = () => {
    return (
        <View style={styles.container}>
          <Image source={require("./assets/me.png")}/>
          <Text style={{fontSize:22}}>Name: Aida</Text>
          <Text style={{fontSize:22}}>Address: Sterling, VA</Text>
          <Text style={{fontSize:22}}>Education: BS in Computer Science</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
    
     
 //Step3: Export
 export default Home;

 //Step4: Style
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
