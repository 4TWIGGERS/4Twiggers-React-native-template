type RootStackParamList = {
   Root: undefined;
};

type DrawerStackParamList = {
   DrawerStack: undefined;
};

type TabStackParamList = {
   HomeStack: undefined;
   FeedStack: undefined;
   NotificationsStack: undefined;
   SettingsStack: undefined;
};

type HomeStackParamList = {
   HomeScreen: undefined;
};

type FeedStackParamList = {
   FeedScreen: undefined;
   FeedDetailsScreen: undefined;
};

type NotificationsStackParamList = {
   NotificationsScreen: undefined;
   NotificationDetailsScreen: undefined;
};

type SettingsStackParamList = {
   SettingsScreen: undefined;
};

type RootStackNavigationProp =
   import('@react-navigation/stack').StackNavigationProp<RootStackParamList>;

type DrawerTabStackNavigationProp = import('@react-navigation/native').CompositeNavigationProp<
   import('@react-navigation/drawer').DrawerNavigationProp<DrawerStackParamList>,
   import('@react-navigation/bottom-tabs').BottomTabNavigationProp<TabStackParamList>
>;

type HomeStackNavigationProp = import('@react-navigation/native').CompositeNavigationProp<
   import('@react-navigation/bottom-tabs').BottomTabNavigationProp<HomeStackParamList>,
   DrawerTabStackNavigationProp
>;

type FeedStackNavigationProp = import('@react-navigation/native').CompositeNavigationProp<
   import('@react-navigation/bottom-tabs').BottomTabNavigationProp<FeedStackParamList>,
   DrawerTabStackNavigationProp
>;

type NotificationsStackNavigationProp = import('@react-navigation/native').CompositeNavigationProp<
   import('@react-navigation/bottom-tabs').BottomTabNavigationProp<NotificationsStackParamList>,
   DrawerTabStackNavigationProp
>;

type SettingsStackNavigationProp = import('@react-navigation/native').CompositeNavigationProp<
   import('@react-navigation/bottom-tabs').BottomTabNavigationProp<SettingsStackParamList>,
   DrawerTabStackNavigationProp
>;
