import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export function SplashScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logo}>
          <Ionicons color={colors.primary} name="heart" size={44} />
          <Ionicons color={colors.peach} name="sparkles" size={22} style={styles.sparkle} />
        </View>

        <Text style={styles.title}>Minha Saúde Feminina</Text>
        <Text style={styles.subtitle}>Cuidado, informação e autocuidado em um só lugar</Text>

        <View style={styles.quoteCard}>
          <Ionicons color={colors.secondary} name="leaf-outline" size={22} />
          <Text style={styles.quote}>Cuidar de você também é um gesto de força.</Text>
        </View>
      </View>

      <PrimaryButton
        icon="arrow-forward"
        onPress={() => navigation.replace('MainTabs')}
        title="Entrar no app"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.lg
  },
  hero: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: 38,
    height: 76,
    justifyContent: 'center',
    marginBottom: spacing.lg,
    width: 76,
    ...shadow
  },
  quote: {
    color: colors.text,
    flex: 1,
    fontSize: typography.body,
    fontWeight: '700',
    lineHeight: 21
  },
  quoteCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
    padding: spacing.md,
    width: '100%',
    ...shadow
  },
  sparkle: {
    position: 'absolute',
    right: 12,
    top: 10
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    maxWidth: 290,
    textAlign: 'center'
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 40,
    marginBottom: spacing.sm,
    textAlign: 'center'
  }
});
