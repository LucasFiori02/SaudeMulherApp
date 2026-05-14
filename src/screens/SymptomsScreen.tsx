import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionTitle } from '../components/SectionTitle';
import { SymptomCard } from '../components/SymptomCard';
import { symptoms } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

export function SymptomsScreen() {
  const navigation = useNavigation<RootNavigation>();
  const [modalVisible, setModalVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function closeModal() {
    setModalVisible(false);
    setSubmitted(false);
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Registre sinais do corpo e veja orientações educativas para cada queixa."
          title="Sintomas"
        />

        <PrimaryButton
          icon="add-circle-outline"
          onPress={() => setModalVisible(true)}
          title="Registrar sintoma"
        />

        <SectionTitle title="Queixas comuns" />
        <View style={styles.list}>
          {symptoms.map((symptom) => (
            <SymptomCard
              key={symptom.id}
              onPress={() => navigation.navigate('SymptomDetail', { symptomId: symptom.id })}
              symptom={symptom}
            />
          ))}
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <AppCard style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View style={styles.modalIcon}>
                <Ionicons color={colors.primary} name="create-outline" size={24} />
              </View>
              <View style={styles.modalTitleBlock}>
                <Text style={styles.modalTitle}>Registro visual</Text>
                <Text style={styles.modalSubtitle}>Protótipo sem salvamento real</Text>
              </View>
            </View>

            {submitted ? (
              <View style={styles.confirmBox}>
                <Ionicons color={colors.primary} name="checkmark-circle" size={34} />
                <Text style={styles.confirmTitle}>Sintoma registrado na simulação</Text>
                <Text style={styles.confirmText}>
                  Em uma versão futura, este registro poderá aparecer no histórico e no calendário.
                </Text>
              </View>
            ) : (
              <>
                <TextInput
                  placeholder="Sintoma observado"
                  placeholderTextColor={colors.muted}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Intensidade ou observações"
                  placeholderTextColor={colors.muted}
                  style={[styles.input, styles.textArea]}
                  multiline
                />
              </>
            )}

            <View style={styles.modalActions}>
              <PrimaryButton onPress={closeModal} title="Fechar" variant="ghost" />
              {!submitted ? (
                <PrimaryButton onPress={() => setSubmitted(true)} title="Simular registro" />
              ) : null}
            </View>
          </AppCard>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  confirmBox: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    gap: spacing.xs,
    padding: spacing.lg
  },
  confirmText: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 19,
    textAlign: 'center'
  },
  confirmTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800',
    textAlign: 'center'
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
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
  list: {
    gap: spacing.md
  },
  modalActions: {
    gap: spacing.sm,
    marginTop: spacing.md
  },
  modalCard: {
    gap: spacing.md,
    width: '100%'
  },
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md
  },
  modalIcon: {
    alignItems: 'center',
    backgroundColor: colors.roseLight,
    borderRadius: radius.md,
    height: 48,
    justifyContent: 'center',
    width: 48
  },
  modalOverlay: {
    backgroundColor: 'rgba(62,46,50,0.34)',
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.lg
  },
  modalSubtitle: {
    color: colors.muted,
    fontSize: typography.small,
    marginTop: 2
  },
  modalTitle: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '900'
  },
  modalTitleBlock: {
    flex: 1
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  textArea: {
    minHeight: 92,
    paddingTop: spacing.md,
    textAlignVertical: 'top'
  }
});
