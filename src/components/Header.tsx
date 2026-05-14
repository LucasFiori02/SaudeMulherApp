import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '../theme/theme';

type HeaderProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
};

export function Header({ title, subtitle, right }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    marginBottom: spacing.lg
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: spacing.xs
  },
  textBlock: {
    flex: 1
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 34
  }
});
