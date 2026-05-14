import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { ReminderCard } from '../components/ReminderCard';
import { SectionTitle } from '../components/SectionTitle';
import { reminders } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing } from '../theme/theme';

type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

export function RemindersScreen() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Organize consultas, exames, ciclo e cuidados da rotina."
          title="Lembretes"
        />

        <PrimaryButton
          icon="add-circle-outline"
          onPress={() => navigation.navigate('NewReminder')}
          title="Novo lembrete"
        />

        <SectionTitle title="Próximos lembretes" />
        <View style={styles.list}>
          {reminders.map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  list: {
    gap: spacing.md
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  }
});
