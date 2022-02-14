import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/home';
import RegistrationScreen from '../screens/registration';
import CameraScreen from '../screens/camera';
import UploadImageScreen from '../screens/uploadImage';
import SuccessPageScreen from '../screens/successpage';
import SynchronizePageScreen from '../screens/synchronize';

const screens = {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerShown: false }
    },

    Registration: {
      screen: RegistrationScreen,
      navigationOptions: { 
        headerShown: true, 
        title: 'Registration' }
    },

    SuccessPage: {
      screen: SuccessPageScreen,
      navigationOptions: { 
        headerShown: true, 
        title: 'Response' }
    },

    SynchronizePage: {
      screen: SynchronizePageScreen,
      navigationOptions: { 
        headerShown: true, 
        title: 'Syncronyze Online' }
    },


    Camera: {
        screen: CameraScreen,
        navigationOptions: { headerShown: false }
  
      },
      uploadImage: {
        screen: UploadImageScreen,
        navigationOptions: { headerShown: false }
  
      },
  };
  
const AppContainer = createStackNavigator(screens);
  
export default createAppContainer(AppContainer)