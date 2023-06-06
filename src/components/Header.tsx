import { useMemo } from 'react';
import { StyleProp, Text, View, ViewStyle, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@utils';

import IconButton from './IconButton';

const VARIANTS = {
   none: { backgroundColor: colors.primary, titleColor: colors.light, iconColor: colors.light },
};

type THeaderProps = {
   variant?: keyof typeof VARIANTS;
   title?: string;
   left?: TIconButton;
   right?: TIconButton;
   style?: StyleProp<ViewStyle>;
};

const Header = ({ variant = 'none', title = '', left, right, style }: THeaderProps) => {
   const { backgroundColor, titleColor, iconColor } = useMemo(() => VARIANTS[variant], [variant]);

   return (
      <SafeAreaView edges={['top']} style={[{ backgroundColor }, styles.wrapper, style]}>
         <View style={styles.inner}>
            <View style={[styles.center]}>
               <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            </View>
            <IconButton activeOpacity={0.5} color={iconColor} {...left} />
            <IconButton activeOpacity={0.5} color={iconColor} {...right} />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: 16,
   },
   inner: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   center: {
      alignItems: 'center',
      justifyContent: 'center',
      ...StyleSheet.absoluteFillObject,
   },
   title: {
      fontSize: 18,
   },
});

export default Header;
