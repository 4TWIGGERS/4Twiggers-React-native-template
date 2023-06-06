import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { colors } from '@utils';

const VARIANTS = {
   primary: {
      borderWidth: 0,
      borderColor: 'transparent',
      backgroundColor: colors.primaryDark,
   },
   outline: {
      borderWidth: 2,
      borderColor: colors.primaryDark,
      backgroundColor: 'transparent',
   },
};

const SIZES = {
   xs: { height: 32 },
   sm: { height: 36 },
   md: { height: 44 },
   lg: { height: 48 },
   xl: { height: 56 },
};

type TButtonProps = {
   size?: keyof typeof SIZES;
   variant?: keyof typeof VARIANTS;
} & TouchableOpacityProps;

const Button = ({
   size = 'md',
   variant = 'primary',
   activeOpacity = 0.5,
   children,
   style,
   ...rest
}: TButtonProps) => (
   <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.button, { ...SIZES[size], ...VARIANTS[variant] }, style]}
      {...rest}>
      {children}
   </TouchableOpacity>
);

const styles = StyleSheet.create({
   button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      borderRadius: 100,
   },
});

export default Button;
