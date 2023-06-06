import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@utils';
import { Header } from '@components';

const FeedDetailsScreen = () => {
   const navigation = useNavigation<FeedStackNavigationProp>();

   return (
      <View style={styles.container}>
         <Header
            variant='none'
            title='Feed Details'
            left={{ name: 'back', size: 20, onPress: () => navigation.goBack() }}
         />
         <View style={styles.inner}>
            <Text style={styles.text}>Feed details screen</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
   },
   inner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
   },
   text: {
      fontSize: 16,
      color: colors.dark,
   },
});

export default FeedDetailsScreen;
