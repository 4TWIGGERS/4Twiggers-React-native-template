module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         [
            'module-resolver',
            {
               root: ['./src'],
               extensions: ['.js', '.jsx', '.ts', '.tsx'],
               alias: {
                  '@assets': './assets',
                  '@components': './src/components',
                  '@i18n': './src/i18n',
                  '@hooks': './src/hooks',
                  '@navigation': './src/navigation',
                  '@screens': './src/screens',
                  '@store': './src/store',
                  '@utils': './src/utils',
               },
            },
         ],
         'react-native-reanimated/plugin',
      ],
   };
};
