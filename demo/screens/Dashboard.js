import React, { useState, useEffect, Component } from 'react';
import {StyleSheet, SafeAreaView, Image, Text, View, Pressable, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Tab, Header } from 'react-native-elements';
import axios from 'axios'


export default function DashboardScreen({ navigation }){

    useEffect(()=>{
      loadTestCases()
    }, [])

    const [record, recordCheck] = useState(false)
    const [alerttxt, alertCheck] = useState(null)

    const [listName, arrayInfo] = useState([])

    const loadTestCases = () => {
    alertCheck('Please wait..')
    axios.get('http://virtualstack.pythonanywhere.com/api/readdata')
    .then(function(response){
      console.log(response.data.record)
      arrayInfo(response.data.record)
      recordCheck(true)
      alertCheck(null)

    }).catch(error =>{
      recordCheck(false)
      alertCheck('Error connecting! check your network connection or try again')
    })
  }

    return (
      <SafeAreaView>
          <View style={styles.container}>
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', size: 32}}
        centerComponent={{ text: 'Genetic-ANN', style: { color: '#fff', fontSize: 25 } }}
        rightComponent={{ icon: 'home', color: '#fff', size: 32 }}
      />
      <View>
        <View style={styles.wrapflexBtn}>
        <View style={styles.flexBtn}>
     <Pressable
          style={styles.pressableBtn}
          title="History"
          onPress={loadTestCases}
      >
      <Text style={styles.pressableTxtLeft}>History</Text>
      </Pressable>
     </View>
     <View style={styles.flexBtn}>
      <Pressable
          style={styles.pressableBtn}
          onPress={() => navigation.navigate('uploadImage')}
      >
      <Text style={styles.pressableTxtRight}>Upload Image</Text>
      </Pressable>
     </View>
        </View>
    </View>

    <View style={{marginTop:5}}>
    <Text style={styles.alerttxt}>{alerttxt}</Text>
      {record ?
        <FlatList
         keyExtractor={(item) => item.id}
         data={listName}
         renderItem={({item}) => (
          <View style={{marginTop:10}}>
          <Text style={styles.itemList}>{item.status}</Text>
          <Image 
          source={{uri: 'https://virtualstack.pythonanywhere.com/static/images/another test img/'+item.filename}} 
          style={{ borderRadius:5, width: '75%', height: 250, alignSelf:'center'}}
          />
          </View>
         )}
         />

      : <Text style={styles.alerttxt}></Text>
      }

       </View>

       </View>
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerName:{
  color:'#2196F3',
  fontWeight:'bold',
  marginTop:50,
  padding: 10,
  fontSize:30,
  },

  itemwrapper:{
    marginTop:10
  },

  wrapflexBtn:{
    flexDirection:'row',
  },

  flexBtn:{
    flex: 1,
    // textAlign:'left',
  },

  pressableBtn:{
    padding: 10,
    backgroundColor:'#2196F3',
    margin:2,
    elevation: 3,
  },

  pressableTxtLeft:{
    textAlign: 'left',
    color: '#fff',
    fontSize: 22,
  },
  alerttxt:{
    textAlign: 'center',
    fontSize: 20,
    padding:5
  },
  pressableTxtRight:{
    textAlign: 'right',
    color: '#fff',
    fontSize: 22,
  },
  itemList:{
    fontSize:24,
    color:"green",
    padding:8,
    marginTop:5,
    textAlign:"center",
    backgroundColor: '#eee'

  },

  container: {
    backgroundColor: '#fff',
    height: "100%",

    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
