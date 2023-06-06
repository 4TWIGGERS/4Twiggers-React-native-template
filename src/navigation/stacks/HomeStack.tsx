import { createStackNavigator } from '@react-navigation/stack';

import { home } from '@screens';

import config from '../config';

const Stack = createStackNavigator();

const HomeStack = () => {
   return (
      <Stack.Navigator screenOptions={config.screenOptionsDefault}>
         <Stack.Screen name='HomeScreen' component={home.HomeScreen} />
      </Stack.Navigator>
   );
};

export default HomeStack;
