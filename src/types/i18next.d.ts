import '@i18n';

declare module 'i18next' {
   interface CustomTypeOptions {
      returnNull: false;
      jsonFormat: 'v3';
   }
}
