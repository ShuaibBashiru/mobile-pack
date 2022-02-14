
import React, {useState, useEffect, Component } from 'react';
import {StyleSheet, FlatList, LisHeaderComponent, ListFooterComponent, Image, ImageBackground, TouchableWithoutFeedback, TextInput, ScrollView, SafeAreaView, View, Text, Alert, Pressable, Platform, StatusBar} from 'react-native';
import firestore from '@react-native-firebase/firestore'


export default function Homescreen({ navigation }){
  useEffect(()=>{
    loadList()
  }, [])

  const loadList =()=>{
    setUserData(lists)
  }
    const readRecord = require('../json/data.json')
    const lists = readRecord.records


    const [search, getSearch] = useState('')
    const [surname, getSurname] = useState('')
    const [firstname, getFirstname] = useState('')
    const [email, getEmail] = useState('')
    const [phone, getPhone] = useState('')
    const [speciality, getSpeciality] = useState('')
    const [place_of_practice, getPlace_of_practice] = useState('')
    const [consent, getConsent] = useState('')
    const [userState, getuserState] = useState('')
    const [showForm, setShow] = useState(false)
    const [showButton, setButton] = useState(false)
    const [userData, setUserData] = useState('')
    const [jsonUserdata, setjsonUserdata] = useState('')
    const [newuserdata, setnewuserdata] = useState('')
    const [foundRecord, setfoundRecord] = useState(false)
    const [item_id, setItemId] = useState(0)
    const [note, setNote] = useState('')



 
    const searchlist = ()=> {
      if (search=='' || search.length < 1) {
        setnewuserdata('')
        setNote("")
        setButton(true)
      } else {
        const newdata = userData.filter(item => String(item.firstname).startsWith(search.toLowerCase()) 
        || String(item.surname).toLowerCase().startsWith(search.toLowerCase()))
        if (newdata != '') {
        setnewuserdata(newdata)
        setNote("Please confirm your search from the list below to continue")
        }else{
        setButton(true)
        setnewuserdata('')
        setNote("Not found, continue searching or register")

        }
      }
    
    }

    const verify = (item) =>{
      if (item.length != '') {
        getSurname(newuserdata[0].surname)
        getFirstname(newuserdata[0].firstname)
        getEmail(newuserdata[0].email)
        getPhone(newuserdata[0].phone)
        getSpeciality(newuserdata[0].specialty)
        getPlace_of_practice(newuserdata[0].place_of_practice)
        setShow(true)
      }else{
        setButton(true)
        setNote("Not found, continue searching or register")
      }
      }
      // this.props.navigation.navigate('Home')
    const confirmForm = (text) =>{
      if (surname.length < 2) {
    
        Alert.alert("Error", "Please provide a valid Surname")
      }else if (firstname.length < 2) {
        Alert.alert("Error", "Please provide a valid Firstname")
      }else if (email.length < 12) {
        Alert.alert("Error", "Please provide a valid email address")
      }else if (phone.length < 11) {
        Alert.alert("Error", "Please provide a valid phone number")
      }else if (speciality.length < 2) {
        Alert.alert("Error", "Please provide a valid Speciality")
      }else if (place_of_practice.length < 2) {
        Alert.alert("Error", "Please provide a valid place of practice")
      } else {
        saveData()
        // Alert.alert(
        //   "Confirmation",
        //   "Is the information provided correct and valid?",
        //   [
        //     { text: "Cancel",
        //     onPress: () => Alert.alert('Cancelled', 'Please review and try again'),
        //     style: "cancel"},

        //     { text: "Yes, submit",
        //     onPress: () => saveData(),
        //     // onPress: () => signUp(),
        //     },
        //   ]
        //   )
        
      }
    }

    
    const saveData =()=> {
      const formData1 =
        {
        surname: surname,
        firstname: firstname,
        email: email,
        phone: phone,
        speciality: speciality,
        place_of_practice: place_of_practice
      }
      try {
        let snapShot = firestore()
        .collection('participants')
        .add({
          formData1
        })  
      } catch (error) {
        alert(error)
        console.log(error)
      }
    
  
    }
    const signUp = (text) =>{
      const formData = [
        {
        surname: surname,
        firstname: firstname,
        email: email,
        phone: phone,
        speciality: speciality,
        place_of_practice: place_of_practice
        }
      ]
      navigation.replace('SuccessPage', formData[0])
    }

    const showFormNewForm =(text) => {
      setShow(true)
      getSurname('')
      getFirstname('')
      getEmail('')
      getPhone('')
    }

    return (
              <View style={styles.container}>
            {showForm==false?
                <View style={styles.div3}>
                  <Image source={require('../assets/img/logo4.png')} style={{ width: '95%', height:150, alignSelf:'center'}} resizeMode={'center'}></Image>
                <View style={styles.wrapText}>
                <Text style={styles.title}>Kindly search your information or Register</Text>

                <Text style={styles.formLabel}>Search</Text>
                      <TextInput placeholder='Search by name or Register'
                       style={styles.controlFieldSearch}
                       autoCapitalize= "none"
                       onChangeText={search => getSearch(search)}
                       defaultValue={search}
                       onKeyPress={searchlist}
                       />
                <Text style={styles.inputNote}>{note}</Text>
                 <FlatList 
                 data={newuserdata}
                 keyExtractor={(item, index) => index.toString()}
                 renderItem={({item})=> (
                    <TouchableWithoutFeedback onPress={()=> verify(item)}>
                   <Text style={styles.listItems}>{item.surname} {item.firstname} {item.email}</Text>
                    </TouchableWithoutFeedback>
                   )}
                   
                   />
                </View>
                {/* {showButton==false? 
                  null 
                : */}
                <View style={styles.wrapText}>
                <Pressable style={styles.pressableBtn} onPress={showFormNewForm}>
                  <Text style={styles.pressableBtnTxt}>Click here to register</Text>
                </Pressable>
                </View>
                {/* } */}
                </View>
          :
      <View style={styles.div3}>
        <ScrollView>
        <Image source={require('../assets/img/logo4.png')} style={{ width: '95%', height:150, alignSelf:'center'}} resizeMode={'center'}></Image>
           <View style={styles.wrapText}>
                <Text style={styles.instruction}>Please complete and review the information below. </Text>
            </View>
        <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Surname</Text>
            <TextInput placeholder='Surname'
             style={styles.controlField}
             autoCapitalize= "sentences"
            onChangeText={surname => getSurname(surname)}
            defaultValue={surname}
             />
    </View>
    <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Firstname</Text>
            <TextInput placeholder='Firstname'
             style={styles.controlField}
             autoCapitalize= "sentences"
            onChangeText={firstname => getFirstname(firstname)}
            defaultValue={firstname}
             />
    </View>
    <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Email</Text>
            <TextInput placeholder='Email address'
             style={styles.controlFieldNoCap}
             autoCapitalize= "none"
            onChangeText={email => getEmail(email)}
            defaultValue={email}
             />
    </View>
    <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Phone number</Text>
            <TextInput placeholder='Phone number'
            keyboardType ='numeric'
             style={styles.controlField}
             autoCapitalize= "none"
            onChangeText={phone => getPhone(phone)}
            defaultValue={phone}
             />
    </View>
    <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Speciality</Text>
            <TextInput placeholder='Speciality'
             style={styles.controlField}
             autoCapitalize= "words"
            onChangeText={speciality => getSpeciality(speciality)}
            defaultValue={speciality}
             />
    </View>
    <View style={styles.wrapText}>
          <Text style={styles.formLabel}>Place of practice</Text>
            <TextInput placeholder='Place of practice'
             style={styles.controlField}
             autoCapitalize= "words"
            onChangeText={place_of_practice => getPlace_of_practice(place_of_practice)}
            defaultValue={place_of_practice}
             />
    </View>

    <View style={styles.wrapText}>
        <Pressable style={styles.pressableBtn} onPress={confirmForm}>
          <Text style={styles.pressableBtnTxt}>Submit registration</Text>
        </Pressable>
        </View>
        </ScrollView>
      </View>
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
  title: {
    fontSize: 20,
    marginBottom: 5,
    marginBottom: 10,
    color: '#008852',
    textAlign: 'center'
  },
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding:10,
  },
  cancel:{
    backgroundColor: 'red',
  },
  textMiddle: {
    textAlign: 'center',
    fontSize: 44,
    color: 'red',
    padding: 5,
    fontStyle: 'italic'
    
  },

  div1:{
    flex: 1.5,
    flexDirection: "column",
    alignItems: 'center'
  
  },

  div3:{
    flex: 4.5,
    flexDirection: "column",

  },

  listItems:{
    backgroundColor: '#eee',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5,
    fontSize: 20,
    textTransform: 'uppercase'
  },


  image:{
    flex: 1, 
  },
  wrapText:{
    margin: 15,
  },
  formLabel:{
    fontSize: 22,
    marginBottom: 5,
  },
  inputNote:{
    fontSize: 16,
    marginBottom: 5,
    color: '#008852'
  },
  controlField:{
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 7,
    borderRadius: 4,
    fontSize: 22,
    textTransform: 'capitalize'
  },
  controlFieldNoCap:{
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 7,
    borderRadius: 4,
    fontSize: 22,

  },
  controlFieldSearch:{
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 7,
    borderRadius: 4,
    fontSize: 22,
  },
  instruction:{
    color: "#2196f3",
    fontSize: 18,
    // textAlign: 'center',
  },
  BtnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
  },

  pressableBtn:{
    width: '100%',
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
