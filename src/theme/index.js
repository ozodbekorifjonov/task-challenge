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
};

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
};

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
};

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
};

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
};

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
};

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
};

const COMMON_COLORS = {
  black: '#000000',
  gray100: '#F5F5F7',
  gray50: '#FAFAFB',
};

const COLORS = {
  ...LINK_COLORS,
  ...SUCCESS_COLORS,
  ...WARNING_COLORS,
  ...ERROR_COLORS,
  ...NEUTRAL_COLORS,
  ...BRAND_COLORS,
  ...WHITE_COLORS,
  ...COMMON_COLORS,
};

const FONT_STYLES = {
  // Title Text
  '.title-h1': {
    fontSize: '3.5rem',
    fontWeight: '600',
    letterSpacing: '-0.0525rem',
  },
  '.title-h2': {
    fontSize: '3rem',
    fontWeight: '600',
    letterSpacing: '-0.045rem',
  },
  '.title-h3': {
    fontSize: '2.5rem',
    fontWeight: '600',
    letterSpacing: '-0.0375rem',
  },
  '.title-h4': {
    fontSize: '2rem',
    fontWeight: '600',
    letterSpacing: '-0.03rem',
  },
  '.title-h5': {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-0.0225rem',
  },
  // Subtitle Text
  '.subtitle-h1': {
    fontSize: '2rem',
    fontWeight: '600',
    letterSpacing: '-0.03rem',
  },
  '.subtitle-h2': {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-0.0225rem',
  },
  '.subtitle-h3': {
    fontSize: '1.25rem',
    fontWeight: '600',
    letterSpacing: '-0.01875rem',
  },
  '.subtitle-h4': {
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '-0.015rem',
  },
  '.subtitle-h5': {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '-0.01313rem',
  },
  // Menu Text
  '.menu-h1-semibold': {
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '-0.015rem',
  },
  '.menu-h2-semibold': {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '-0.01313rem',
  },
  '.menu-h1-medium': {
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.015rem',
  },
  '.menu-h2-medium': {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '-0.01313rem',
  },
  // Tab Text
  '.tab-h1-semibold': {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-0.0225rem',
  },
  '.tab-h2-semibold': {
    fontSize: '1.25rem',
    fontWeight: '600',
    letterSpacing: '-0.01875rem',
  },
  '.tab-h3-semibold': {
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '-0.015rem',
  },
  '.tab-h4-semibold': {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '-0.01313rem',
  },
  '.tab-h1-medium': {
    fontSize: '1.5rem',
    fontWeight: '500',
    letterSpacing: '-0.0225rem',
  },
  '.tab-h2-medium': {
    fontSize: '1.25rem',
    fontWeight: '500',
    letterSpacing: '-0.01875rem',
  },
  '.tab-h3-medium': {
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.015rem',
  },
  '.tab-h4-medium': {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '-0.01313rem',
  },
  // Button Text
  '.button-h1-semibold': {
    fontSize: '1.25rem',
    fontWeight: '600',
    letterSpacing: '-0.01875rem',
  },
  '.button-h2-semibold': {
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '-0.015rem',
  },
  '.button-h3-semibold': {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '-0.01313rem',
  },

  '.button-h1-medium': {
    fontSize: '1.25rem',
    fontWeight: '500',
    letterSpacing: '-0.01875rem',
  },
  '.button-h2-medium': {
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.015rem',
  },
  '.button-h3-medium': {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '-0.01313rem',
  },
  // Link text
  '.link-h1-medium': {
    fontSize: '1.25rem',
    fontWeight: '500',
    letterSpacing: '-0.01875rem',
  },
  '.link-h2-medium': {
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.015rem',
  },
  '.link-h3-medium': {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '-0.01313rem',
  },
  '.link-h1-regular': {
    fontSize: '1.25rem',
    fontWeight: '400',
    letterSpacing: '-0.01875rem',
  },
  '.link-h2-regular': {
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '-0.015rem',
  },
  '.link-h3-regular': {
    fontSize: '0.875rem',
    fontWeight: '400',
    letterSpacing: '-0.01313rem',
  },
  // Text
  '.text-p1': {
    fontSize: '1.125rem',
    fontWeight: '400',
    letterSpacing: '-0.01125rem',
  },
  '.text-p2': {
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '-0.01rem',
  },
  '.text-p3': {
    fontSize: '0.875rem',
    fontWeight: '400',
    letterSpacing: '-0.00875rem',
  },

};

module.exports = {
  COLORS,
  FONT_STYLES
};
