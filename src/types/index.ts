type TIconButton = {
   name?: keyof typeof import('@utils').icons;
   size?: number;
   color?: string;
} & Pick<import('react-native').TouchableOpacityProps, 'activeOpacity' | 'onPress' | 'style'>;
