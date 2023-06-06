import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@utils';
import { IconButton } from '@components';

const NotificationDetailsScreen = () => {
   const navigation = useNavigation<NotificationsStackNavigationProp>();

   return (
      <View style={styles.container}>
         <View style={styles.inner}>
            <Text style={styles.text}>Notification details screen</Text>
         </View>
         <View style={styles.closeButton}>
            <IconButton name='close' size={18} onPress={() => navigation.goBack()} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
   },
   closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
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

export default NotificationDetailsScreen;
