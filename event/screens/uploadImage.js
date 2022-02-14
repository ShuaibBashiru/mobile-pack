import React, {useState, useEffect, Component } from 'react';
import {StyleSheet, SafeAreaView, Image, Button, Text, TextInput, View, Pressable, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Tab, Header } from 'react-native-elements';
import axios from 'axios'
import {launchCamera, launchImageLibrary} from "react-native-image-picker"
import * as ImagePicker from 'expo-image-picker'

export default function DashboardScreen({ navigation }){

    const [record, recordCheck] = useState(false)
    const [Images, setImages] = useState()
    const [alerttxt, alertCheck] = useState(null)

    const [listName, arrayInfo] = useState([])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== 'granted'){
                    Alert.alert('This action requires permission')
                }
                
            }
        })();
    }, [])

        const uploadImageFile =  async ()=> {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                height: 200,
                width:200,
            });
            console.log(result)

        if (!result.cancelled) {
        setImages(result.uri)
        recordCheck(true)
        }else{
        Alert.alert("You terminated the process")
        }
        }
        // onUploadProgress: uploadEvent => {
        //     this.progress='Progress : '+ Math.round(uploadEvent.loaded / uploadEvent.total * 100) + "%"
        // }
    
        const uploadImageUri = () => {
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
        centerComponent={{ text: 'Upload', style: { color: '#fff', fontSize: 25 } }}
        rightComponent={{ icon: 'home', color: '#fff', size: 32}}
      />
      <View>
        <View style={styles.wrapflexBtn}>
        <View style={styles.flexBtn}>
     <Pressable
          style={styles.pressableBtn}
          title="History"
          onPress={() => navigation.navigate('Dashboard')}
      >
      <Text style={styles.pressableTxtLeft}>Back</Text>
      </Pressable>
     </View>
     <View style={styles.flexBtn}>
      <Pressable
          style={styles.pressableBtn}
          onPress={uploadImageFile}
      >
      <Text style={styles.pressableTxtRight}>Choose Image</Text>
      </Pressable>
     </View>
        </View>
    </View>
    <View style={{marginTop:5}}>
       
        {/* { record==true ? */}
        <View>
            {
            Images && <Image source={{uri: Images}} style={{ borderRadius:5, width: '75%', height: 250, alignSelf:'center'}} />
            }
            <Pressable style={styles.pressableBtn2} onPress={uploadImageUri}>
            <Text style={styles.pressableTxtcenter}>Check age group</Text>
            </Pressable> 
        </View>
        {/* :  <Text style={styles.alerttxt}></Text>
    } */}

        </View>
    <View style={{marginTop:5}}>
    <Text style={styles.alerttxt}>{alerttxt}</Text>
    <ScrollView>
      { listName.map((item) =>{
     return(
      <View style={{marginTop:10}} key={item.id}>
      <Text style={styles.itemList}>{item.status}</Text>
      <Image 
      source={{ uri: 'https://virtualstack.pythonanywhere.com/static/images/'+item.filename }} 
      style={{ borderRadius:5, width: '75%', height: 250, alignSelf:'center' }}
      />
      </View>
     )
        })}
    </ScrollView>
      {/* {record ?
        <FlatList
         keyExtractor={(item) => item.id}
         data={listName}
         renderItem={({item}) => (
          <View style={{marginTop:10}}>
          <Text style={styles.itemList}>{item.status}</Text>
          <Image 
          source={{uri: 'https://virtualstack.pythonanywhere.com/static/images/'+item.filename}} 
          style={{ borderRadius:5, width: '75%', height: 250, alignSelf:'center'}}
          />
          </View>
         )}
         />

      : <Text style={styles.alerttxt}></Text>
      } */}

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
  pressableBtn2:{
    padding: 10,
    backgroundColor:'#2196F3',
    margin:10,
    elevation: 3,
  },
  pressableTxtcenter:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
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

  inputbox:{
        borderWidth: 1,
        height:40,
        margin:12,
        padding: 4,
        borderColor: "#eee",
        borderRadius:4,
        
  },
  container: {
    backgroundColor: '#fff',
    height: "100%",

    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
