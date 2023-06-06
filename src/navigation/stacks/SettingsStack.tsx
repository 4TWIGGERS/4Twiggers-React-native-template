import { createStackNavigator } from '@react-navigation/stack';

import { settings } from '@screens';

import config from '../config';

const Stack = createStackNavigator();

const SettingsStack = () => {
   return (
      <Stack.Navigator screenOptions={config.screenOptionsDefault}>
         <Stack.Screen name='SettingsScreen' component={settings.SettingsScreen} />
      </Stack.Navigator>
   );
};

export default SettingsStack;
