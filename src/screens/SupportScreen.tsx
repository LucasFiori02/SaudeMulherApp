import { Ionicons } from '@expo/vector-icons';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionTitle } from '../components/SectionTitle';
import { supportContacts } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';

type IconName = keyof typeof Ionicons.glyphMap;

export function SupportScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Canais e serviços que podem apoiar cuidado, prevenção e proteção."
          title="Apoio"
        />

        <SectionTitle title="Rede de cuidado" />
        <View style={styles.list}>
          {supportContacts.map((contact) => (
            <AppCard key={contact.id} style={styles.contactCard}>
              <View style={styles.iconWrap}>
                <Ionicons color={colors.primary} name={contact.icon as IconName} size={22} />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactDescription}>{contact.description}</Text>
                <Text style={styles.contactAction}>{contact.action}</Text>
              </View>
            </AppCard>
          ))}
        </View>

        <SectionTitle title="Violência contra a mulher" />
        <AppCard style={styles.violenceCard}>
          <View style={styles.violenceHeader}>
            <Ionicons color={colors.surface} name="shield-checkmark" size={24} />
            <Text style={styles.violenceTitle}>Você não precisa enfrentar isso sozinha</Text>
          </View>
          <Text style={styles.violenceText}>
            Busque ajuda se houver medo, ameaças, agressão física, violência sexual, controle da rotina,
            isolamento, humilhações ou impedimento de procurar apoio.
          </Text>
          <PrimaryButton
            icon="call"
            onPress={() => Alert.alert('Protótipo', 'Botão visual para ligação ao 180.')}
            style={styles.violenceButton}
            title="Ligar 180"
            variant="secondary"
          />
        </AppCard>

        <SectionTitle title="Quando buscar ajuda" />
        <AppCard style={styles.guidanceCard}>
          {[
            'Sintomas fortes, persistentes ou que mudaram de padrão.',
            'Sangramento intenso, dor pélvica forte, febre ou suspeita de gravidez.',
            'Dúvidas sobre exames preventivos, anticoncepcional ou menopausa.',
            'Qualquer situação de violência, ameaça ou medo.'
          ].map((item) => (
            <View key={item} style={styles.guidanceItem}>
              <View style={styles.bullet} />
              <Text style={styles.guidanceText}>{item}</Text>
            </View>
          ))}
        </AppCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bullet: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    height: 7,
    marginTop: 7,
    width: 7
  },
  contactAction: {
    color: colors.primary,
    fontSize: typography.small,
    fontWeight: '900',
    marginTop: spacing.xs
  },
  contactCard: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md
  },
  contactContent: {
    flex: 1
  },
  contactDescription: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 19,
    marginTop: 3
  },
  contactName: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '900'
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  guidanceCard: {
    gap: spacing.sm
  },
  guidanceItem: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  guidanceText: {
    color: colors.muted,
    flex: 1,
    fontSize: typography.body,
    lineHeight: 22
  },
  iconWrap: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.md,
    height: 44,
    justifyContent: 'center',
    width: 44
  },
  list: {
    gap: spacing.md
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  violenceCard: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  violenceButton: {
    marginTop: spacing.md
  },
  violenceHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm
  },
  violenceText: {
    color: '#FFF4F4',
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: spacing.md
  },
  violenceTitle: {
    color: colors.surface,
    flex: 1,
    fontSize: typography.subtitle,
    fontWeight: '900',
    lineHeight: 23
  }
});
