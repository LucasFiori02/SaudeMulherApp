import { Ionicons } from '@expo/vector-icons';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

import { colors, radius, spacing, typography } from '../theme/theme';

type IconName = keyof typeof Ionicons.glyphMap;

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  icon?: IconName;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({
  title,
  onPress,
  icon,
  variant = 'primary',
  style
}: PrimaryButtonProps) {
  const isGhost = variant === 'ghost';
  const isSecondary = variant === 'secondary';
  const iconColor = isGhost ? colors.primary : colors.surface;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.88}
      onPress={onPress}
      style={[
        styles.button,
        isSecondary && styles.secondary,
        isGhost && styles.ghost,
        style
      ]}
    >
      {icon ? <Ionicons color={iconColor} name={icon} size={19} /> : null}
      <Text style={[styles.text, isGhost && styles.ghostText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    borderWidth: 1
  },
  ghostText: {
    color: colors.primary
  },
  secondary: {
    backgroundColor: colors.secondary
  },
  text: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: '800'
  }
});
