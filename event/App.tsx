import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Tab, Header } from 'react-native-elements';
import AppContainer from './routes/navigator'


export default function App() {
  
  return (
    
    <AppContainer />

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

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Alert } from 'react-native';
// import { Tab, Header } from 'react-native-elements';
// import Navigator from './routes/navigator'


// export default function App() {
  
//   return (
    
//     <Navigator />

//   );
// }

// const styles = StyleSheet.create({
//   headerName:{
//   color:'#2196F3',
//   fontWeight:'bold',
//   marginTop:50,
//   padding: 10,
//   fontSize:30,
//   },
//   itemwrapper:{
//     marginTop:10
//   },


//   container: {
//     backgroundColor: '#fff',
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
