import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors, icons } from '@utils';
import { IconButton } from '@components';

import HomeStack from './HomeStack';
import FeedStack from './FeedStack';
import NotificationsStack from './NotificationsStack';
import SettingsStack from './SettingsStack';

import config from '../config';

type TTab = {
   name: string;
   label?: string;
   icon?: keyof typeof icons;
   component: () => JSX.Element;
};

const SCREEN_OPTIONS = {
   ...config.screenOptionsDefault,
   tabBarActiveTintColor: colors.light,
   tabBarInactiveTintColor: colors.grey,
   tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: colors.primary,
   },
};

const Tab = createBottomTabNavigator();

const TabStack = () => {
   const { t } = useTranslation();

   const tabs = useMemo<TTab[]>(
      () => [
         { name: 'HomeStack', component: HomeStack, label: t('home'), icon: 'home' },
         { name: 'FeedStack', component: FeedStack, label: t('feed'), icon: 'feed' },
         {
            name: 'NotificationsStack',
            component: NotificationsStack,
            label: t('notifications'),
            icon: 'bell',
         },
         {
            name: 'SettingsStack',
            component: SettingsStack,
            label: t('settings'),
            icon: 'settings',
         },
      ],
      []
   );

   return (
      <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
         {tabs.map(({ name, component, icon }, index) => (
            <Tab.Screen
               key={index}
               name={name}
               component={component}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color }) => <IconButton name={icon} size={18} color={color} />,
               }}
            />
         ))}
      </Tab.Navigator>
   );
};

export default TabStack;
