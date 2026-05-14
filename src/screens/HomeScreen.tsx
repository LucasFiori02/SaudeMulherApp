import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { cycleSummary, featuredContent, healthTip } from '../data/mockData';
import { MainTabParamList, RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = BottomTabScreenProps<MainTabParamList, 'Home'>;
type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
type IconName = keyof typeof Ionicons.glyphMap;

const quickActions: Array<{
  label: string;
  icon: IconName;
  route: keyof MainTabParamList;
}> = [
  { label: 'Registrar sintoma', icon: 'add-circle-outline', route: 'Sintomas' },
  { label: 'Ver ciclo', icon: 'calendar-outline', route: 'Ciclo' },
  { label: 'Lembretes', icon: 'alarm-outline', route: 'Lembretes' },
  { label: 'Conteúdos', icon: 'book-outline', route: 'Conteudos' }
];

export function HomeScreen({ navigation }: Props) {
  const rootNavigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Que bom ter você por aqui. Vamos cuidar da sua saúde com leveza?"
          title={`Olá, ${cycleSummary.greetingName}`}
        />

        <AppCard style={styles.periodCard}>
          <View style={styles.periodIcon}>
            <Ionicons color={colors.surface} name="calendar" size={28} />
          </View>
          <View style={styles.periodText}>
            <Text style={styles.cardOverline}>Próxima menstruação</Text>
            <Text style={styles.periodDate}>{cycleSummary.nextPeriod}</Text>
            <Text style={styles.mutedText}>
              Estimativa em {cycleSummary.daysUntilNextPeriod} dias
            </Text>
          </View>
        </AppCard>

        <SectionTitle title="Resumo do ciclo" />
        <AppCard>
          <View style={styles.statsRow}>
            <Metric label="ciclos registrados" value={`${cycleSummary.registeredCycles}`} />
            <Metric label="duração média" value={cycleSummary.averageCycle} />
            <Metric label="status" value={cycleSummary.status} />
          </View>
        </AppCard>

        <SectionTitle title="Para hoje" />
        <AppCard style={styles.tipCard}>
          <Ionicons color={colors.primary} name="bulb-outline" size={24} />
          <View style={styles.flex}>
            <Text style={styles.cardTitle}>{healthTip.title}</Text>
            <Text style={styles.bodyText}>{healthTip.text}</Text>
          </View>
        </AppCard>

        <AppCard
          onPress={() => rootNavigation.navigate('ContentDetail', { contentId: featuredContent.id })}
          style={styles.recommendedCard}
        >
          <View style={styles.recommendedBadge}>
            <Ionicons color={colors.primary} name="sparkles-outline" size={16} />
            <Text style={styles.recommendedBadgeText}>Recomendado</Text>
          </View>
          <Text style={styles.cardTitle}>{featuredContent.title}</Text>
          <Text style={styles.bodyText}>{featuredContent.description}</Text>
        </AppCard>

        <SectionTitle title="Acessos rápidos" />
        <View style={styles.quickGrid}>
          {quickActions.map((action) => (
            <AppCard
              key={action.label}
              onPress={() => navigation.navigate(action.route)}
              style={styles.quickCard}
            >
              <Ionicons color={colors.primary} name={action.icon} size={24} />
              <Text style={styles.quickText}>{action.label}</Text>
            </AppCard>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: spacing.xs
  },
  cardOverline: {
    color: colors.surface,
    fontSize: typography.tiny,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 22
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  flex: {
    flex: 1
  },
  metric: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.md,
    flex: 1,
    minHeight: 82,
    padding: spacing.sm
  },
  metricLabel: {
    color: colors.muted,
    fontSize: typography.tiny,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 4,
    textAlign: 'center'
  },
  metricValue: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center'
  },
  mutedText: {
    color: '#FFF4F4',
    fontSize: typography.small,
    marginTop: 4
  },
  periodCard: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    flexDirection: 'row',
    gap: spacing.md
  },
  periodDate: {
    color: colors.surface,
    fontSize: 26,
    fontWeight: '900',
    lineHeight: 31
  },
  periodIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.lg,
    height: 58,
    justifyContent: 'center',
    width: 58
  },
  periodText: {
    flex: 1
  },
  quickCard: {
    alignItems: 'center',
    flexBasis: '47%',
    gap: spacing.sm,
    minHeight: 104,
    justifyContent: 'center'
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md
  },
  quickText: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: '800',
    lineHeight: 18,
    textAlign: 'center'
  },
  recommendedBadge: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.roseLight,
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: 4,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs
  },
  recommendedBadgeText: {
    color: colors.primary,
    fontSize: typography.tiny,
    fontWeight: '900'
  },
  recommendedCard: {
    marginTop: spacing.md
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  tipCard: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md
  }
});
