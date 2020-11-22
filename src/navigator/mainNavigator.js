import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList177513Navigator from '../features/NotificationList177513/navigator';
import Settings177512Navigator from '../features/Settings177512/navigator';
import Settings177504Navigator from '../features/Settings177504/navigator';
import UserProfile177502Navigator from '../features/UserProfile177502/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList177513: { screen: NotificationList177513Navigator },
Settings177512: { screen: Settings177512Navigator },
Settings177504: { screen: Settings177504Navigator },
UserProfile177502: { screen: UserProfile177502Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
