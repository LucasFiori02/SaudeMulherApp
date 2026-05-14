import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { EducationalContent } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';
import { AppCard } from './AppCard';

type IconName = keyof typeof Ionicons.glyphMap;

type ContentCardProps = {
  content: EducationalContent;
  onPress: () => void;
};

export function ContentCard({ content, onPress }: ContentCardProps) {
  return (
    <AppCard onPress={onPress} style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconWrap}>
          <Ionicons color={colors.primary} name={content.icon as IconName} size={21} />
        </View>
        <Text style={styles.readTime}>{content.readTime}</Text>
      </View>
      <Text style={styles.category}>{content.category}</Text>
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.excerpt}>{content.excerpt}</Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.xs
  },
  category: {
    color: colors.secondary,
    fontSize: typography.tiny,
    fontWeight: '800',
    textTransform: 'uppercase'
  },
  excerpt: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 19
  },
  iconWrap: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.md,
    height: 42,
    justifyContent: 'center',
    width: 42
  },
  readTime: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '700'
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 22
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs
  }
});
