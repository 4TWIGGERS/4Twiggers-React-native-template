import React from 'react';
import { View, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { icons } from '@utils';

type TIcon = {
   name?: keyof typeof icons;
   size?: number;
   color?: string;
   style?: StyleProp<ViewStyle>;
};

const Icon = ({ name, size = 24, color, style }: TIcon) =>
   name ? (
      <View style={[styles.wrapper, style]}>
         <Image
            source={icons[name]}
            resizeMode='contain'
            style={{ width: size, height: size, tintColor: color }}
         />
      </View>
   ) : null;

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default Icon;
