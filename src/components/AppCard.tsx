import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { colors, radius, shadow, spacing } from '../theme/theme';

type AppCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function AppCard({ children, style, onPress }: AppCardProps) {
  if (onPress) {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.88}
        onPress={onPress}
        style={[styles.card, style]}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.md,
    ...shadow
  }
});
