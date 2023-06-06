import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { icons } from '@utils';

const IconButton = ({
   name,
   size = 24,
   color,
   activeOpacity = 0.5,
   onPress,
   style,
}: TIconButton) => (
   <View pointerEvents={!onPress ? 'box-only' : 'auto'}>
      {name && (
         <TouchableOpacity
            onPress={onPress}
            hitSlop={size / 4}
            activeOpacity={activeOpacity}
            style={[{ width: size, height: size }, styles.wrapper, style]}>
            <Image
               source={icons[name]}
               resizeMode='contain'
               style={[styles.image, { tintColor: color }]}
            />
         </TouchableOpacity>
      )}
   </View>
);

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      width: '100%',
      height: '100%',
   },
});

export default IconButton;
