import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './stacks';

const Root = () => {
   return (
      <NavigationContainer>
         <RootStack />
      </NavigationContainer>
   );
};

export default Root;
