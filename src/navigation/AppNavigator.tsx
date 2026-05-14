import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContentDetailScreen } from '../screens/ContentDetailScreen';
import { ContentsScreen } from '../screens/ContentsScreen';
import { CycleScreen } from '../screens/CycleScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { NewReminderScreen } from '../screens/NewReminderScreen';
import { RemindersScreen } from '../screens/RemindersScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { SymptomDetailScreen } from '../screens/SymptomDetailScreen';
import { SymptomsScreen } from '../screens/SymptomsScreen';
import { colors, typography } from '../theme/theme';
import { MainTabParamList, RootStackParamList } from './types';

type IconName = keyof typeof Ionicons.glyphMap;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIcons: Record<keyof MainTabParamList, IconName> = {
  Home: 'home-outline',
  Ciclo: 'calendar-outline',
  Sintomas: 'pulse-outline',
  Conteudos: 'book-outline',
  Lembretes: 'alarm-outline',
  Apoio: 'heart-circle-outline'
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontSize: typography.tiny,
          fontWeight: '700',
          paddingBottom: 4
        },
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 74,
          paddingTop: 8
        },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            color={color}
            name={focused ? tabIcons[route.name].replace('-outline', '') as IconName : tabIcons[route.name]}
            size={size}
          />
        )
      })}
    >
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={CycleScreen} name="Ciclo" />
      <Tab.Screen component={SymptomsScreen} name="Sintomas" />
      <Tab.Screen component={ContentsScreen} name="Conteudos" options={{ title: 'Conteúdos' }} />
      <Tab.Screen component={RemindersScreen} name="Lembretes" />
      <Tab.Screen component={SupportScreen} name="Apoio" />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: colors.background },
          headerShown: false
        }}
      >
        <Stack.Screen component={SplashScreen} name="Splash" />
        <Stack.Screen component={MainTabs} name="MainTabs" />
        <Stack.Screen component={SymptomDetailScreen} name="SymptomDetail" />
        <Stack.Screen component={ContentDetailScreen} name="ContentDetail" />
        <Stack.Screen component={NewReminderScreen} name="NewReminder" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
