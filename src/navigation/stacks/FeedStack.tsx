import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import { feed } from '@screens';

import config from '../config';

const Stack = createStackNavigator();

const FeedStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            ...config.screenOptionsDefault,
            ...TransitionPresets.SlideFromRightIOS,
         }}>
         <Stack.Screen name='FeedScreen' component={feed.FeedScreen} />
         <Stack.Screen name='FeedDetailsScreen' component={feed.FeedDetailsScreen} />
      </Stack.Navigator>
   );
};

export default FeedStack;
