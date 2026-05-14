import { Platform } from 'react-native';

export const colors = {
  background: '#FBF4EB',
  surface: '#FFFFFF',
  roseLight: '#FBD9E5',
  primary: '#C43A4A',
  secondary: '#C56682',
  peach: '#E7A48C',
  fertile: '#A7C7A3',
  fertileSoft: '#DDEBD8',
  text: '#3E2E32',
  muted: '#7D6A6F',
  border: '#F0D9D3',
  warning: '#9F5A38',
  dangerSoft: '#F8CDD0'
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 22,
  xl: 30,
  xxl: 40
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999
};

export const shadow =
  Platform.OS === 'web'
    ? {
        boxShadow: '0 8px 16px rgba(95, 44, 53, 0.08)'
      }
    : {
        shadowColor: '#5F2C35',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 3
      };

export const typography = {
  title: 28,
  subtitle: 18,
  body: 15,
  small: 13,
  tiny: 11
};
