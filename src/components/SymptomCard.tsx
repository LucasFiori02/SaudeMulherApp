import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Symptom } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';
import { AppCard } from './AppCard';

type IconName = keyof typeof Ionicons.glyphMap;

type SymptomCardProps = {
  symptom: Symptom;
  onPress: () => void;
};

export function SymptomCard({ symptom, onPress }: SymptomCardProps) {
  return (
    <AppCard onPress={onPress} style={styles.card}>
      <View style={styles.iconWrap}>
        <Ionicons color={colors.primary} name={symptom.icon as IconName} size={22} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{symptom.title}</Text>
        <Text style={styles.brief}>{symptom.brief}</Text>
      </View>
      <Ionicons color={colors.secondary} name="chevron-forward" size={20} />
    </AppCard>
  );
}

const styles = StyleSheet.create({
  brief: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 19,
    marginTop: 3
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
    height: 46,
    justifyContent: 'center',
    width: 46
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800'
  }
});
