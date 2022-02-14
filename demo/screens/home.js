
import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Pressable} from 'react-native';

  export default function Homescreen({ navigation }){
      
    return (
      <SafeAreaView>
      <View style={styles.container}>

          <View style={styles.wrapper}>
          <View>
          <Text style={styles.welcomeText}>Genetic-ANN</Text>
          </View>
        <View style={styles.imgContainer}>
          <Image 
          source={require('../img/face.jpeg')} 
          style={{ width: '80%', height: 300, alignSelf:'center'}}
          />
        </View>
        <View style={styles.btnCenter}>
         <Pressable
          style={styles.getStartedBtn}
          onPress={() => navigation.navigate('Dashboard')}
            >
            <Text style={styles.BtnText}>Get started</Text>
            </Pressable>
        </View>
          </View>
          </View>
          </SafeAreaView>
    )
}


const styles = StyleSheet.create({
welcomeText:{
  color:'#ffffff',
  padding: 10,
  fontSize:25,
  marginBottom:20,
  textAlign: 'center',
  },
  btnCenter:{
    marginTop:40,
    padding:30,

  },
  imgContainer: {
    marginTop: 20,
  },
  BtnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,

  },
  getStartedBtn:{
    padding: 10,
    backgroundColor:'#2196F3',
    margin:2,
    elevation: 3,
    
  },
  container: {
    backgroundColor: '#141518',
    height: "100%",
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  wrapper:{
      marginTop:70
  }
});
