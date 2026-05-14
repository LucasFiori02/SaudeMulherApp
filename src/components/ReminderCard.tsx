import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Reminder } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';
import { AppCard } from './AppCard';

type IconName = keyof typeof Ionicons.glyphMap;

type ReminderCardProps = {
  reminder: Reminder;
};

export function ReminderCard({ reminder }: ReminderCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.iconWrap}>
        <Ionicons color={colors.primary} name={reminder.icon as IconName} size={22} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{reminder.title}</Text>
        <Text style={styles.meta}>{reminder.date} • {reminder.time}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{reminder.type}</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.roseLight,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs
  },
  badgeText: {
    color: colors.primary,
    fontSize: typography.tiny,
    fontWeight: '800'
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md
  },
  content: {
    flex: 1
  },
  iconWrap: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.md,
    height: 44,
    justifyContent: 'center',
    width: 44
  },
  meta: {
    color: colors.muted,
    fontSize: typography.small,
    marginTop: 4
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800'
  }
});
