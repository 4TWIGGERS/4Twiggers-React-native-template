import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import setDefaultProps from 'react-native-simple-default-props';

import '@i18n';

import { defaultFontFamily, fonts } from '@utils';
import Root from '@navigation';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App = () => {
   const [fontsLoaded] = useFonts(fonts);
   const [appIsReady, setAppIsReady] = useState(false);

   useEffect(() => {
      if (fontsLoaded) {
         // apply custom default font on Text and TextInput components globally
         setDefaultProps(Text, { style: { fontFamily: defaultFontFamily } });
         setDefaultProps(TextInput, {
            underlineColorAndroid: 'transparent',
            style: {
               fontFamily: defaultFontFamily,
            },
         });
         setAppIsReady(true);
      }
   }, [fontsLoaded]);

   useEffect(() => {
      if (appIsReady) {
         // artificially delay splash screen hide
         // to avoid white background for a brief moment
         setTimeout(SplashScreen.hideAsync, 500);
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }

   return (
      <View style={styles.flex}>
         <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={styles.flex}>
               <SafeAreaProvider>
                  <Root />
                  <StatusBar style='light' translucent backgroundColor='transparent' />
               </SafeAreaProvider>
            </GestureHandlerRootView>
         </QueryClientProvider>
      </View>
   );
};

const styles = StyleSheet.create({
   flex: {
      flex: 1,
   },
});

export default App;
