import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/home';
import DashboardScreen from '../screens/Dashboard';
import CameraScreen from '../screens/camera';
import UploadImageScreen from '../screens/uploadImage';

const screens = {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerShown: false }
    },
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: { headerShown: false }

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