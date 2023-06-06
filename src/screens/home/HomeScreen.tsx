import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@utils';
import { Button, Header } from '@components';

const HomeScreen = () => {
   const navigation = useNavigation<HomeStackNavigationProp>();

   return (
      <View style={styles.container}>
         <Header
            variant='none'
            title='Home'
            left={{ name: 'menu', size: 20, onPress: () => navigation.toggleDrawer() }}
            right={{ name: 'user', size: 20, onPress: () => null }}
         />
         <View style={styles.inner}>
            <Button variant='primary' size='md' onPress={() => navigation.navigate('FeedStack')}>
               <Text style={styles.labelPrimary}>Go to feed</Text>
            </Button>
            <Button
               variant='primary'
               size='md'
               style={styles.mt24}
               onPress={() => navigation.navigate('NotificationsStack')}>
               <Text style={styles.labelPrimary}>Go to notifications</Text>
            </Button>
            <Button
               variant='primary'
               size='md'
               style={styles.mt24}
               onPress={() => navigation.navigate('SettingsStack')}>
               <Text style={styles.labelPrimary}>Go to settings</Text>
            </Button>
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
      justifyContent: 'center',
      paddingHorizontal: 24,
   },
   mt24: {
      marginTop: 24,
   },
   labelPrimary: {
      fontSize: 16,
      color: colors.light,
   },
});

export default HomeScreen;
