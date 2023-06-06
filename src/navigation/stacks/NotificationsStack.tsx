import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import { notifications } from '@screens';

import config from '../config';

const Stack = createStackNavigator();

const NotificationsStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            ...config.screenOptionsDefault,
            ...TransitionPresets.ModalPresentationIOS,
         }}>
         <Stack.Screen name='NotificationsScreen' component={notifications.NotificationsScreen} />
         <Stack.Screen
            name='NotificationDetailsScreen'
            component={notifications.NotificationDetailsScreen}
         />
      </Stack.Navigator>
   );
};

export default NotificationsStack;
