const LINK_COLORS = {
  link100: '#0071E3',
  link90: '#1A80E6',
  link80: '#338DE9',
  link70: '#4D9CEC',
  link60: '#66AAEE',
  link50: '#80B8F1',
  link40: '#99C6F4',
  link30: '#B3D5F7',
  link20: '#CCE3F9',
  link10: '#E6F1FD',
} as const;

const SUCCESS_COLORS = {
  success100: '#1AB759',
  success90: '#31BF6A',
  success80: '#48C57A',
  success70: '#5FCD8B',
  success60: '#76D49B',
  success50: '#8DDBAC',
  success40: '#A3E2BD',
  success30: '#BBEACE',
  success20: '#D1F1DE',
  success10: '#E9F8EF',
} as const;

const WARNING_COLORS = {
  warning100: '#FB8700',
  warning90: '#FC931A',
  warning80: '#FC9F33',
  warning70: '#FDAB4D',
  warning60: '#FDB766',
  warning50: '#FDC380',
  warning40: '#FDCF99',
  warning30: '#FEDBB3',
  warning20: '#FEE7CC',
  warning10: '#FFF3E6',
} as const;

const ERROR_COLORS = {
  error100: '#D23232',
  error90: '#D74747',
  error80: '#DB5B5B',
  error70: '#E07070',
  error60: '#E48484',
  error50: '#E99999',
  error40: '#EDADAD',
  error30: '#F2C2C2',
  error20: '#F6D6D6',
  error10: '#FBEBEB',
  error8: '#FCEFEF',
} as const;

const NEUTRAL_COLORS = {
  neutral100: '#1D1D1F',
  neutral90: '#343436',
  neutral80: '#4A4A4C',
  neutral70: '#616163',
  neutral60: '#777779',
  neutral50: '#8D8D8E',
  neutral40: '#A5A5A5',
  neutral30: '#BCBCBC',
  neutral20: '#D2D2D2',
  neutral10: '#E9E9E9',
  neutral8: '#EDEDED',
} as const;

const BRAND_COLORS = {
  brand100: '#4E0F8A',
  brand90: '#602796',
  brand80: '#713FA1',
  brand70: '#8457AE',
  brand60: '#956FB9',
  brand50: '#A787C5',
  brand40: '#B89FD0',
  brand30: '#CAB7DC',
  brand20: '#DCCFE8',
  brand10: '#EEE7F4',
  brand8: '#F1ECF6',
} as const;

const WHITE_COLORS = {
  white100: '#FFFFFF',
  white90: '#ECECEC',
  white80: '#DADADA',
  white70: '#C7C7C7',
  white60: '#B5B5B5',
  white50: '#A2A2A2',
  white40: '#909090',
  white30: '#7D7D7D',
  white20: '#6B6B6B',
  white10: '#565656',
} as const;

const COMMON_COLORS = {
  black: '#000000',
  gray100: '#F5F5F7',
  gray50: '#FAFAFB',
  transparent: 'transparent',
} as const;

export const COLORS = {
  ...LINK_COLORS,
  ...SUCCESS_COLORS,
  ...WARNING_COLORS,
  ...ERROR_COLORS,
  ...NEUTRAL_COLORS,
  ...BRAND_COLORS,
  ...WHITE_COLORS,
  ...COMMON_COLORS,
};
