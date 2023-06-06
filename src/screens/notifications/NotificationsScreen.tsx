import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@utils';
import { Button, Header } from '@components';

const NotificationsScreen = () => {
   const navigation = useNavigation<NotificationsStackNavigationProp>();

   return (
      <View style={styles.container}>
         <Header
            variant='none'
            title='Notifications'
            left={{ name: 'menu', size: 20, onPress: () => navigation.toggleDrawer() }}
            right={{ name: 'search', size: 18, onPress: () => null }}
         />
         <View style={styles.inner}>
            <Button
               variant='primary'
               size='md'
               onPress={() => navigation.navigate('NotificationDetailsScreen')}>
               <Text style={styles.labelPrimary}>View notification</Text>
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
   labelPrimary: {
      fontSize: 16,
      color: colors.light,
   },
});

export default NotificationsScreen;
