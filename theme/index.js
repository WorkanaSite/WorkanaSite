import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';
import {colors} from './colors';

const fonts = {mono: `'Menlo', monospace`};

const components = {
  Text: {
    baseStyle: {
      color: 'black',
      lineHeight: '1.7rem',
    },
  },
};
const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors,
  fonts,
  breakpoints,
  components,
  styles: {
    global: props => ({
      html: {
        bg: 'l_bg',
        scrollBehavior: 'smooth',
      },

      body: {
        fontFamily: 'body',
        color: 'l_text',
        transition: 'background-color 0.2s',
        lineHeight: 'calc(8px + 2ex)',
        height: '100%',
        bg: 'l_bg',
      },
      '*, *::before, &::after': {
        wordWrap: 'break-word',
      },
      '#__next': {
        minHeight: '100vh',
      },
      '::-webkit-scrollbar': {
        display: 'none',
      },
      '::-webkit-scrollbar-track-piece': {
        display: 'none',
      },
    }),
  },
});

export default theme;
