import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import { AppNavigator } from './src/navigation/AppNavigator';
import { colors } from './src/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
