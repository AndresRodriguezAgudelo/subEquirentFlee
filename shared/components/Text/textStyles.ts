// textStyles.ts
const textStyleKeys = [
  'Heading 1',
  'Heading 2',
  'Heading 3',
  'Heading 4',
  'Heading 5',
  'Heading 6',
  'Body Large',
  'Body Medium',
  'Body Small',
  'Body Extra Small',
  'Subtitle 1',
  'Subtitle 2',
  'Subtitle 3',
  'Feature Accent',
  'Highligth Standard',
  'Highligth Accent',
  'Caption Large',
  'Caption Medium',
  'Caption Small',
  'Caption Accent / SemiBold',
  'Content Accent',
  'Caption Standard',
  'Hero Bold',
  'Overline',
] as const;

type TextStyleKey = (typeof textStyleKeys)[number];

type TextStyle = {
  fontFamily?: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  textTransform?: string;
  color?: string;
};

type TypeTextStyles = {
  // eslint-disable-next-line prettier/prettier
  [key in TextStyleKey]: TextStyle;
};

// Configuraciones de estilos
const textStyleConfig: Record<string, Partial<TextStyle>> = {
  'Heading 1': { fontSize: '3rem', lineHeight: '1.2' },
  'Heading 2': { fontSize: '2.5rem', lineHeight: '1.2' },
  'Heading 3': { fontSize: '2rem', lineHeight: '1.2' },
  'Heading 4': { fontSize: '2rem', lineHeight: '1.2', fontWeight: '600' },
  'Heading 5': { fontSize: '1.5rem', lineHeight: '1.3' },
  'Heading 6': { fontSize: '1.25rem', lineHeight: '1.4' },

  'Body Large': { fontSize: '1.125rem', lineHeight: '1.6' },
  'Body Medium': { fontSize: '1rem', lineHeight: '1.6' },
  'Body Small': { fontSize: '0.875rem', lineHeight: '1.6' },
  'Body Extra Small': { fontSize: '0.75rem', lineHeight: '1.6' },

  'Feature Accent': {
    fontSize: '1.5rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  'Highligth Standard': {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  'Highligth Accent': {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    fontWeight: '600',
  },
  'Subtitle 1': { fontSize: '1.125rem', lineHeight: '1.5' },
  'Subtitle 2': { fontSize: '1rem', lineHeight: '1.5' },
  'Subtitle 3': { fontSize: '0.875rem', lineHeight: '1.5' },
  'Caption Large': { fontSize: '0.875rem', lineHeight: '1.4' },
  'Caption Medium': { fontSize: '0.75rem', lineHeight: '1.4' },
  'Caption Small': { fontSize: '0.625rem', lineHeight: '1.4' },

  'Caption Accent': {
    fontSize: '0.875rem',
    lineHeight: '1.4',
    color: 'white',
  },

  whiteText: {
    color: 'white',
  },

  'Caption Standard': {
    fontSize: '0.875rem',
    lineHeight: '1.4',
  },
  'Content Accent': {
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: '600',
  },
  'Hero Bold': { fontSize: '4rem', lineHeight: '1.1' },
  Overline: {
    fontSize: '0.75rem',
    lineHeight: '1.6',
    textTransform: 'uppercase',
  },
};

// Generador de estilos de texto
export const textStyles: TypeTextStyles = textStyleKeys.reduce((acc, key) => {
  const [styleType, fontFamilyWeight] = key.split(' / ');
  const fontWeightMap: Record<string, string> = {
    Bold: 'bold',
    SemiBold: '600',
    Regular: 'normal',
  };

  const fontWeight = fontWeightMap[fontFamilyWeight] || 'normal';

  acc[key] = {
    fontWeight: textStyleConfig[styleType]?.fontWeight || fontWeight,
    fontSize: textStyleConfig[styleType]?.fontSize || '1rem',
    lineHeight: textStyleConfig[styleType]?.lineHeight || '1.5',
    textTransform: textStyleConfig[styleType]?.textTransform,
  };

  return acc;
}, {} as TypeTextStyles);
