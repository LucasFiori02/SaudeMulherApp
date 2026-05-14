import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'NewReminder'>;

const reminderTypes = ['Exame', 'Medicamento', 'Consulta', 'Ciclo'];

export function NewReminderScreen({ navigation }: Props) {
  const [selectedType, setSelectedType] = useState('Exame');
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity accessibilityRole="button" onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons color={colors.primary} name="arrow-back" size={20} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Header
          subtitle="Formulário visual para demonstrar o fluxo de criação."
          title="Novo lembrete"
        />

        <AppCard style={styles.formCard}>
          <Field label="Título" placeholder="Ex.: Consulta ginecológica" />
          <View style={styles.fieldRow}>
            <View style={styles.flex}>
              <Field label="Data" placeholder="20/05/2026" />
            </View>
            <View style={styles.flex}>
              <Field label="Horário" placeholder="09:00" />
            </View>
          </View>

          <Text style={styles.label}>Tipo de lembrete</Text>
          <View style={styles.typeGrid}>
            {reminderTypes.map((type) => {
              const isActive = type === selectedType;
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  key={type}
                  onPress={() => setSelectedType(type)}
                  style={[styles.typeChip, isActive && styles.typeChipActive]}
                >
                  <Text style={[styles.typeText, isActive && styles.typeTextActive]}>{type}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </AppCard>

        {submitted ? (
          <AppCard style={styles.confirmCard}>
            <Ionicons color={colors.primary} name="checkmark-circle" size={30} />
            <Text style={styles.confirmText}>
              Lembrete criado na simulação. O armazenamento real poderá ser conectado depois.
            </Text>
          </AppCard>
        ) : null}

        <PrimaryButton
          icon="checkmark"
          onPress={() => setSubmitted(true)}
          title="Criar lembrete"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  confirmCard: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    flexDirection: 'row',
    gap: spacing.sm
  },
  confirmText: {
    color: colors.text,
    flex: 1,
    fontSize: typography.small,
    fontWeight: '800',
    lineHeight: 20
  },
  content: {
    gap: spacing.md,
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  field: {
    gap: spacing.xs
  },
  fieldRow: {
    flexDirection: 'row',
    gap: spacing.md
  },
  flex: {
    flex: 1
  },
  formCard: {
    gap: spacing.md
  },
  input: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    color: colors.text,
    fontSize: typography.body,
    minHeight: 50,
    paddingHorizontal: spacing.md
  },
  label: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: '900'
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  typeChip: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.pill,
    borderWidth: 1,
    flexBasis: '47%',
    minHeight: 42,
    justifyContent: 'center',
    paddingHorizontal: spacing.sm
  },
  typeChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  typeText: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '800'
  },
  typeTextActive: {
    color: colors.surface
  }
});
