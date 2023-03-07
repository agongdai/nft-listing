const paletteBase = {
  black: '#000',
  white: '#FAFAFA',

  primaryMain: '#304FFE',
  primaryDark: '#0026CA',
  primaryAzure: '#7A7CFF',
  primaryLight: '#C8E0FC',
  primaryExtraLight: '#E4EDF7',

  secondaryMain: '#D32F2F',
  secondaryDark: '#9A0007',
  secondaryAzure: '#FF6659',
  secondaryLight: '#ffcdd2',
  secondaryExtraLight: '#ffebee',

  grayDark: '#1B2026',
  grayLight: '#6C7384',
  grayLighter: '#B3BAC1',
  grayExtraLight: '#E1E3E7',
  graySuperLight: '#F0F0F1',

  successMain: '#00838F',
  successLight: '#e0f7fa',

  warningMain: '#FDB951',
  warningDark: '#FD9A0F',

  errorMain: '#D32F2F',
  errorDark: '#9A0007',
  errorLight: '#ffcdd2',
};

const palette = {
  ...paletteBase,

  textPrimary: paletteBase.grayDark,

  disabledText: paletteBase.grayLighter,
  disabledBg: paletteBase.grayExtraLight,
};

export default palette;
