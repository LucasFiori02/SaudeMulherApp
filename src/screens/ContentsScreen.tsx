import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';

import { ContentCard } from '../components/ContentCard';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { educationalContents } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing, typography } from '../theme/theme';

type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

const categories = ['Todos', ...Array.from(new Set(educationalContents.map((item) => item.category)))];

export function ContentsScreen() {
  const navigation = useNavigation<RootNavigation>();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredContents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return educationalContents.filter((content) => {
      const matchesCategory = activeCategory === 'Todos' || content.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${content.title} ${content.category} ${content.excerpt}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header
          subtitle="Conteúdos educativos em linguagem simples para apoiar decisões e cuidados."
          title="Conteúdos"
        />

        <View style={styles.searchBox}>
          <Ionicons color={colors.secondary} name="search-outline" size={20} />
          <TextInput
            onChangeText={setQuery}
            placeholder="Buscar tema"
            placeholderTextColor={colors.muted}
            style={styles.searchInput}
            value={query}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <TouchableOpacity
                accessibilityRole="button"
                key={category}
                onPress={() => setActiveCategory(category)}
                style={[styles.categoryChip, isActive && styles.categoryChipActive]}
              >
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <SectionTitle title="Artigos e orientações" />
        <View style={styles.list}>
          {filteredContents.map((content) => (
            <ContentCard
              content={content}
              key={content.id}
              onPress={() => navigation.navigate('ContentDetail', { contentId: content.id })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryChip: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.pill,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  categoryList: {
    gap: spacing.sm,
    paddingVertical: spacing.md
  },
  categoryText: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '800'
  },
  categoryTextActive: {
    color: colors.surface
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  list: {
    gap: spacing.md
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  searchBox: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 52,
    paddingHorizontal: spacing.md
  },
  searchInput: {
    color: colors.text,
    flex: 1,
    fontSize: typography.body
  }
});
