import { Extrapolate } from 'react-native-reanimated';
import { StackCardStyleInterpolator, StackNavigationOptions } from '@react-navigation/stack';

export const fadeAnimation: StackCardStyleInterpolator = ({ current }) => ({
   cardStyle: { opacity: current.progress },
});

export const slideUpTransition: StackNavigationOptions = {
   gestureEnabled: true,
   gestureDirection: 'vertical',
   cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
         cardStyle: {
            transform: [
               {
                  translateY: current.progress.interpolate({
                     inputRange: [0, 1],
                     outputRange: [layouts.screen.height, 0],
                     extrapolate: Extrapolate.CLAMP,
                  }),
               },
               {
                  scale: next
                     ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.95],
                          extrapolate: Extrapolate.CLAMP,
                       })
                     : 1,
               },
               {
                  translateY: next
                     ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -layouts.screen.height / 4],
                          extrapolate: Extrapolate.CLAMP,
                       })
                     : 1,
               },
            ],
         },
         overlayStyle: {
            opacity: current.progress.interpolate({
               inputRange: [0, 1],
               outputRange: [0, 0.5],
               extrapolate: Extrapolate.CLAMP,
            }),
         },
      };
   },
};
