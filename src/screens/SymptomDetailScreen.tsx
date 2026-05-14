import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { symptoms } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SymptomDetail'>;
type IconName = keyof typeof Ionicons.glyphMap;

export function SymptomDetailScreen({ navigation, route }: Props) {
  const symptom = symptoms.find((item) => item.id === route.params.symptomId) ?? symptoms[0];

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity accessibilityRole="button" onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Header subtitle={symptom.brief} title={symptom.title} />

        <AppCard style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons color={colors.primary} name={symptom.icon as IconName} size={30} />
          </View>
          <Text style={styles.description}>{symptom.description}</Text>
        </AppCard>

        <DetailList
          icon="warning-outline"
          items={symptom.attentionSigns}
          title="Sinais de atenção"
        />

        <DetailList
          icon="home-outline"
          items={symptom.homeCare}
          title="O que pode ser feito em casa"
        />

        <AppCard style={styles.warningCard}>
          <Ionicons color={colors.primary} name="information-circle-outline" size={24} />
          <Text style={styles.warningText}>
            Essas informações não substituem avaliação médica. Procure sempre a UBS para confirmação e acompanhamento.
          </Text>
        </AppCard>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailList({
  icon,
  items,
  title
}: {
  icon: keyof typeof Ionicons.glyphMap;
  items: string[];
  title: string;
}) {
  return (
    <AppCard style={styles.detailCard}>
      <View style={styles.detailHeader}>
        <Ionicons color={colors.primary} name={icon} size={22} />
        <Text style={styles.detailTitle}>{title}</Text>
      </View>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: spacing.xs,
    marginBottom: spacing.lg
  },
  backText: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: '800'
  },
  bullet: {
    backgroundColor: colors.secondary,
    borderRadius: radius.pill,
    height: 7,
    marginTop: 7,
    width: 7
  },
  content: {
    gap: spacing.md,
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  description: {
    color: colors.text,
    flex: 1,
    fontSize: typography.body,
    lineHeight: 22
  },
  detailCard: {
    gap: spacing.sm
  },
  detailHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xs
  },
  detailTitle: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '900'
  },
  heroCard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md
  },
  heroIcon: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.lg,
    height: 58,
    justifyContent: 'center',
    width: 58
  },
  listItem: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  listText: {
    color: colors.muted,
    flex: 1,
    fontSize: typography.body,
    lineHeight: 22
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  warningCard: {
    alignItems: 'flex-start',
    backgroundColor: colors.dangerSoft,
    borderColor: colors.roseLight,
    flexDirection: 'row',
    gap: spacing.sm
  },
  warningText: {
    color: colors.text,
    flex: 1,
    fontSize: typography.small,
    fontWeight: '800',
    lineHeight: 20
  }
});
