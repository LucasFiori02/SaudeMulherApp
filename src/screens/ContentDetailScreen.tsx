import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppCard } from '../components/AppCard';
import { educationalContents } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ContentDetail'>;
type IconName = keyof typeof Ionicons.glyphMap;

export function ContentDetailScreen({ navigation, route }: Props) {
  const content = educationalContents.find((item) => item.id === route.params.contentId) ?? educationalContents[0];

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity accessibilityRole="button" onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <AppCard style={styles.headerCard}>
          <View style={styles.iconWrap}>
            <Ionicons color={colors.primary} name={content.icon as IconName} size={30} />
          </View>
          <Text style={styles.category}>{content.category}</Text>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.readTime}>{content.readTime} de leitura</Text>
        </AppCard>

        <AppCard style={styles.articleCard}>
          {content.body.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>{paragraph}</Text>
          ))}
        </AppCard>

        <AppCard style={styles.noticeCard}>
          <Ionicons color={colors.primary} name="information-circle-outline" size={23} />
          <Text style={styles.noticeText}>
            Conteúdo educativo. Em caso de sintomas, dúvidas ou sinais de alerta, procure a UBS.
          </Text>
        </AppCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  articleCard: {
    gap: spacing.md
  },
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: spacing.xs
  },
  backText: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: '800'
  },
  category: {
    color: colors.secondary,
    fontSize: typography.small,
    fontWeight: '900',
    marginTop: spacing.md,
    textTransform: 'uppercase'
  },
  content: {
    gap: spacing.md,
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  headerCard: {
    alignItems: 'flex-start'
  },
  iconWrap: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.lg,
    height: 62,
    justifyContent: 'center',
    width: 62
  },
  noticeCard: {
    alignItems: 'flex-start',
    backgroundColor: colors.roseLight,
    flexDirection: 'row',
    gap: spacing.sm
  },
  noticeText: {
    color: colors.text,
    flex: 1,
    fontSize: typography.small,
    fontWeight: '800',
    lineHeight: 20
  },
  paragraph: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 23
  },
  readTime: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '700',
    marginTop: spacing.sm
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 31,
    marginTop: spacing.xs
  }
});
