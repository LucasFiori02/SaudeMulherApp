import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, spacing, typography } from '../theme/theme';

type SectionTitleProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionTitle({ title, actionLabel, onActionPress }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel && onActionPress ? (
        <TouchableOpacity accessibilityRole="button" onPress={onActionPress}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: '700'
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
    marginTop: spacing.lg
  },
  title: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '800'
  }
});
