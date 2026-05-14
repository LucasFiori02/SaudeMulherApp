import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { cycleCalendar, cycleSummary } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

type DayType = 'empty' | 'normal' | 'period' | 'fertile' | 'today';

function getDayType(day: number): DayType {
  if (cycleCalendar.currentDay === day) {
    return 'today';
  }

  if ([...cycleCalendar.periodDays, ...cycleCalendar.previousPeriodDays].includes(day)) {
    return 'period';
  }

  if (cycleCalendar.fertileDays.includes(day)) {
    return 'fertile';
  }

  return 'normal';
}

export function CycleScreen() {
  const calendarCells = Array.from(
    { length: cycleCalendar.firstWeekdayOffset + cycleCalendar.daysInMonth },
    (_, index) => {
      const day = index - cycleCalendar.firstWeekdayOffset + 1;
      return day > 0 ? { day, type: getDayType(day) } : { day: null, type: 'empty' as DayType };
    }
  );

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Uma visão simples do mês, com estimativas de menstruação e período fértil."
          title="Ciclo menstrual"
        />

        <AppCard>
          <View style={styles.calendarHeader}>
            <Text style={styles.month}>{cycleCalendar.month}</Text>
            <Ionicons color={colors.primary} name="calendar-outline" size={24} />
          </View>
          <View style={styles.weekRow}>
            {weekDays.map((day, index) => (
              <Text key={`${day}-${index}`} style={styles.weekDay}>{day}</Text>
            ))}
          </View>
          <View style={styles.calendarGrid}>
            {calendarCells.map((cell, index) => (
              <View key={`${cell.day ?? 'empty'}-${index}`} style={styles.dayCellWrap}>
                {cell.day ? (
                  <View style={[styles.dayCell, styles[cell.type]]}>
                    <Text style={[styles.dayText, cell.type !== 'normal' && styles.activeDayText]}>
                      {cell.day}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.dayCell} />
                )}
              </View>
            ))}
          </View>
          <View style={styles.legendRow}>
            <Legend color={colors.primary} label="Menstruação" />
            <Legend color={colors.fertile} label="Período fértil" />
            <Legend color={colors.peach} label="Hoje" />
          </View>
        </AppCard>

        <SectionTitle title="Informações do ciclo" />
        <View style={styles.infoGrid}>
          <Info label="Última menstruação" value={cycleSummary.lastPeriod} />
          <Info label="Próxima menstruação" value={cycleSummary.nextPeriod} />
          <Info label="Duração média do ciclo" value={cycleSummary.averageCycle} />
          <Info label="Duração média da menstruação" value={cycleSummary.averagePeriod} />
        </View>

        <SectionTitle title="Análise do ciclo" />
        <AppCard>
          <View style={styles.analysisRow}>
            <Analysis label="Mais curto" value={cycleSummary.shortestCycle} />
            <Analysis label="Mais longo" value={cycleSummary.longestCycle} />
            <Analysis label="Média recente" value={cycleSummary.lastCyclesAverage} />
          </View>
        </AppCard>

        <SectionTitle title="Entenda seu ciclo" />
        <AppCard style={styles.explainCard}>
          <InfoText
            icon="refresh-circle-outline"
            text="O ciclo menstrual é contado do primeiro dia da menstruação até o dia anterior à próxima."
            title="Ciclo menstrual"
          />
          <InfoText
            icon="flower-outline"
            text="O período fértil é uma estimativa dos dias com maior chance de ovulação."
            title="Período fértil"
          />
          <InfoText
            icon="pulse-outline"
            text="Cólica leve pode ser comum, mas dor intensa ou com febre precisa de avaliação."
            title="Cólica"
          />
        </AppCard>
      </ScrollView>
    </SafeAreaView>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <AppCard style={styles.infoCard}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </AppCard>
  );
}

function Analysis({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.analysisItem}>
      <Text style={styles.analysisValue}>{value}</Text>
      <Text style={styles.analysisLabel}>{label}</Text>
    </View>
  );
}

function InfoText({ icon, title, text }: { icon: keyof typeof Ionicons.glyphMap; title: string; text: string }) {
  return (
    <View style={styles.infoTextRow}>
      <View style={styles.infoTextIcon}>
        <Ionicons color={colors.primary} name={icon} size={20} />
      </View>
      <View style={styles.flex}>
        <Text style={styles.infoTextTitle}>{title}</Text>
        <Text style={styles.infoTextBody}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeDayText: {
    color: colors.surface,
    fontWeight: '900'
  },
  analysisItem: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.md,
    flex: 1,
    minHeight: 76,
    justifyContent: 'center',
    padding: spacing.sm
  },
  analysisLabel: {
    color: colors.muted,
    fontSize: typography.tiny,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center'
  },
  analysisRow: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  analysisValue: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center'
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm
  },
  calendarHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  dayCell: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: radius.pill,
    justifyContent: 'center',
    width: 38
  },
  dayCellWrap: {
    alignItems: 'center',
    flexBasis: '14.285%',
    marginBottom: spacing.sm
  },
  dayText: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: '700'
  },
  empty: {
    backgroundColor: 'transparent'
  },
  explainCard: {
    gap: spacing.md
  },
  fertile: {
    backgroundColor: colors.fertile
  },
  flex: {
    flex: 1
  },
  infoCard: {
    flexBasis: '47%',
    minHeight: 104
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md
  },
  infoLabel: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '700',
    lineHeight: 18
  },
  infoTextBody: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 19,
    marginTop: 3
  },
  infoTextIcon: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.md,
    height: 40,
    justifyContent: 'center',
    width: 40
  },
  infoTextRow: {
    flexDirection: 'row',
    gap: spacing.md
  },
  infoTextTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800'
  },
  infoValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 23,
    marginTop: spacing.sm
  },
  legendDot: {
    borderRadius: radius.pill,
    height: 10,
    width: 10
  },
  legendItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },
  legendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.sm
  },
  legendText: {
    color: colors.muted,
    fontSize: typography.tiny,
    fontWeight: '700'
  },
  month: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '900'
  },
  normal: {
    backgroundColor: colors.background
  },
  period: {
    backgroundColor: colors.primary
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  today: {
    backgroundColor: colors.peach
  },
  weekDay: {
    color: colors.muted,
    flex: 1,
    fontSize: typography.tiny,
    fontWeight: '900',
    textAlign: 'center'
  },
  weekRow: {
    flexDirection: 'row'
  }
});
