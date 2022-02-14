
import React, {useState, useEffect, Component } from 'react';
import {StyleSheet, FlatList, LisHeaderComponent, TouchableHighlight, ListFooterComponent, Image, ImageBackground, TouchableWithoutFeedback, TextInput, ScrollView, SafeAreaView, View, Text, Alert, Pressable, Platform, StatusBar} from 'react-native';
import axios from 'axios'
export default function SuccessPageScreen({navigation, route}){
  useEffect(()=>{
    addRecord()
  }, [])
  const [progress, setProgress] = useState('')
  const [confirm, setConfirm] = useState(0)
  const [success, setSuccess] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [newrecord, setNewrecord] = useState('')

  const addRecord =()=> {
    setProgress('Please wait while submitting your details...')
    const form = new FormData()
    form.append('surname', navigation.getParam('surname'))
    form.append('firstname', navigation.getParam('firstname'))
    form.append('email', navigation.getParam('email'))
    form.append('phoneNumber', navigation.getParam('phone'))
    form.append('medicalSpeciality', navigation.getParam('speciality'))
    form.append('placeOfPractice', navigation.getParam('place_of_practice'))
    axios.post('https://events.latechnologiesltd.com/event/form/account', form)
    .then(function(response){
      if (response.data.status=='success') {
        setConfirm(1)
        setProgress(1)
        setMessage(response.data.msg)
      }else{
        setConfirm(2)
        setProgress(1)
        setMessage(response.data.msg)
      }

    }).catch(error =>{
      setConfirm(3)
      setProgress(1)
      addRecordJson()
      setMessage('Network Error, kindly check your network connection or try again')
    }) 
  }
  const addRecordJson =()=> {
    setNewrecord(navigation.getParam)
    console.log(newrecord)

  }
  

    return (
              <View style={styles.container}>
                <View style={styles.div1}>
              <Image source={require('../assets/img/logo4.png')} style={{ width: '95%', height:150, alignSelf:'center'}} resizeMode={'center'}></Image>
              </View>
                <View style={styles.div3}>
                  {confirm == 0 ? 
                  <Text style={styles.progress}>{progress}</Text>
                  :
                    <View>
                      {confirm == 1?
                      <View>
                         <Text style={styles.textMiddleHeader}>Thanks, {navigation.getParam('surname')}!</Text>
                          <Text style={styles.textMiddle}>{message}</Text>
                      </View>
                    :
                    <View>
                         <Text style={styles.textMiddleHeaderError}>Oops!</Text>
                          <Text style={styles.textMiddleError}>{message}</Text>
                          <Text style={styles.textMiddleError}>{error}</Text>
                        <TouchableHighlight style={styles.pressableBtnInfo} onPress={()=> navigation.navigate('Registration')}>
                          <Text style={styles.pressableBtnTxtInfo}>Try again</Text>
                        </TouchableHighlight>
                      </View>
                    }
                    </View>
    
                  }

                </View>
                {confirm == 1?
                <View style={styles.div4}>
        <TouchableHighlight style={styles.pressableBtn} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.pressableBtnTxt}>Close this page</Text>
        </TouchableHighlight>
      </View>
      :
      null
      }
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
  

  wrapper:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding:10,
  },

  progress:{
    textAlign: 'center',
    fontSize: 25,
    color: '#008852',
    padding: 4,

  },
  textMiddleHeader: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#008852',
    textTransform: 'capitalize'
    
  },
  textMiddleHeaderError: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'red',
    textTransform: 'capitalize'
    
  },
  textMiddle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#008852',
    padding: 4,
    
  },
  textMiddleError: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    
  },

  div1:{
    flex: 2,
    flexDirection: "column",
    alignItems: 'center',
  },

  div3:{
    flex: 3,
    flexDirection: "column",
  },
  div4:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'

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
  pressableBtnTxtInfo:{
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'none'
},
pressableBtnInfo:{
  width: '50%',
  padding: 10,
  paddingTop: 13,
  paddingBottom: 13,
  backgroundColor: 'yellow',
  // backgroundColor: '#0d6efd',
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
