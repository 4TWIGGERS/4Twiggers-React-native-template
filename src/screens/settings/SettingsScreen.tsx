import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@utils';
import { Header } from '@components';

const SettingsScreen = () => {
   const navigation = useNavigation<SettingsStackNavigationProp>();

   return (
      <View style={styles.container}>
         <Header
            variant='none'
            title='Settings'
            left={{ name: 'menu', size: 20, onPress: () => navigation.toggleDrawer() }}
            right={{ name: 'search', size: 18, onPress: () => null }}
         />
         <View style={styles.inner}>
            <Text style={styles.text}>Settings screen</Text>
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

export default SettingsScreen;
