import {
   DrawerContentComponentProps,
   DrawerContentScrollView,
   DrawerItem,
   createDrawerNavigator,
} from '@react-navigation/drawer';

import { colors } from '@utils';

import TabStack from './TabStack';

import config from '../config';

const SCREEN_OPTIONS = {
   ...config.screenOptionsDefault,
   drawerStyle: {
      backgroundColor: colors.primary,
   },
};

const Drawer = createDrawerNavigator();

const drawerContent: (props: DrawerContentComponentProps) => React.ReactNode = (props) => (
   <DrawerContentScrollView {...props}>
      <DrawerItem
         label='Home'
         labelStyle={{ color: colors.light }}
         onPress={() => props.navigation.navigate('HomeStack')}
      />
      <DrawerItem
         label='Feed'
         labelStyle={{ color: colors.light }}
         onPress={() => props.navigation.navigate('FeedStack')}
      />
      <DrawerItem
         labelStyle={{ color: colors.light }}
         label='Notifications'
         onPress={() => props.navigation.navigate('NotificationsStack')}
      />
      <DrawerItem
         labelStyle={{ color: colors.light }}
         label='Settings'
         onPress={() => props.navigation.navigate('SettingsStack')}
      />
   </DrawerContentScrollView>
);

const DrawerStack = () => {
   return (
      <Drawer.Navigator drawerContent={drawerContent} screenOptions={SCREEN_OPTIONS}>
         <Drawer.Screen name='DrawerStack' component={TabStack} />
      </Drawer.Navigator>
   );
};

export default DrawerStack;
