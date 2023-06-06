import { createStackNavigator } from '@react-navigation/stack';

import config from '../config';

import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();

const RootStack = () => {
   return (
      <Stack.Navigator screenOptions={config.screenOptionsDefault}>
         <Stack.Screen name='Root' component={DrawerStack} />
      </Stack.Navigator>
   );
};

export default RootStack;
