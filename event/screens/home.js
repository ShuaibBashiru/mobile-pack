
import React, { useState, useEffect, Component } from 'react';
import {StyleSheet, ImageBackground, TextInput, ScrollView, SafeAreaView, View, Text, Image, TouchableHighlight, TouchableOpacity, Pressable, Platform, StatusBar} from 'react-native';
  
export default function Homescreen({ navigation }){
    return (
                <View style={styles.container}>
        {/* <ImageBackground source={require('../assets/img/bg.jpg')} resizeMode="repeat" style={styles.image}> */}
        <View style={styles.div1}>
      <View style={{flex: 2, flexDirection: "row"}}>
      <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/img/logo1.png')} style={{ width: '60%', height: 80, alignSelf: "flex-start" }} resizeMode={'center'}></Image></View>
      <View style={{flex: 1, justifyContent: 'center'}}><TouchableOpacity onPress={()=> navigation.navigate('SynchronizePage')}><Image source={require('../assets/img/logo2.png')} style={{ width: '100%', height: 80, alignSelf: "flex-end"}} resizeMode={'center'}></Image></TouchableOpacity></View>
      </View>
      </View>
      <View style={styles.div2}>
      <Image source={require('../assets/img/logo3.png')} style={{width: '95%', height:100, alignSelf:'center'}} resizeMode={'center'}></Image>
      </View>
      <View style={styles.div3}>
      <Text style={styles.textMiddle}> Welcome </Text>

      <Image source={require('../assets/img/logo4.png')} style={{ width: '90%', height:200, alignSelf:'center'}} resizeMode={'center'}></Image>
      </View>
      <View style={styles.div4}>
        <TouchableHighlight style={styles.pressableBtn} onPress={()=> navigation.navigate('Registration')}>
          <Text style={styles.pressableBtnTxt}>Click Here To Register</Text>
        </TouchableHighlight>
      </View>
      {/* </ImageBackground> */}
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fdfbc9',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  
  companyName:{
    padding: 5,
    fontSize: 24,
    color: '#2196f3',
  },

  wrapper:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding:10,
  },

  textMiddle: {
    textAlign: 'center',
    fontSize: 44,
    color: 'red',
    padding: 5,
    fontStyle: 'italic'
    
  },

  div1:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    borderTopWidth: 10,
    borderTopColor: '#008852',
    borderRadius: 4,
    // backgroundColor: 'blue'

  },
  div2:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    // backgroundColor: 'green'

  },
  div3:{
    flex: 2,
    flexDirection: "column",
    justifyContent: 'center'

  },
  div4:{
    flex: 0.5,
    flexDirection: "column",
    justifyContent: 'center'

  },
  
  image:{
    flex: 1, 
  },

  sloganTxt:{
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  imgContainer: {
    marginTop: 20,
  },
  BtnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
  },

  pressableBtn:{
    width: '90%',
    padding: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: '#008852',
    alignSelf:'center',
    elevation: 3,
    borderRadius: 5,
    shadowOpacity: 0.5,
  },
  pressableBtnTxt:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'none'
}

});
