import { createTheme } from '@mui/material';
import ThemeSettings from './themeSettings';

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeSettings.THEME_COLORS.primary,
    },
    secondary: {
      main: ThemeSettings.THEME_COLORS.secondary,
    },
    text: {
      primary: ThemeSettings.THEME_COLORS.textPrimary,
      secondary: ThemeSettings.THEME_COLORS.textSecondary,
    },
    background: {
      default: ThemeSettings.THEME_COLORS.background,
      paper: ThemeSettings.THEME_COLORS.background,
    },
  },
  typography: {
    fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
    h1: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title01,
    },
    h2: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title02,
    },
    h3: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title03,
    },
    h4: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
    },
    body1: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.body01,
    },
    body2: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.body02,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState?.variant === 'contained' && {
            backgroundColor: 'transparent',
            '@media (max-width: 1535px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.body01_small,
            },
            '@media (max-width: 600px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.body01_mobile,
            },
            border: `1px solid transparent`,
            fontFamily: `${ThemeSettings.THEME_FONTS.secondary}, sans-serif`,
            fontSize: ThemeSettings.THEME_FONT_SIZES.body01,
            fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.semiBold,
            width: `auto`,
            padding: `.3vw 1.5vw`,
            borderColor:
              ownerState?.datatype === 'secondary'
                ? ThemeSettings.THEME_COLORS.white
                : ThemeSettings.THEME_COLORS.black,
            color:
              ownerState?.datatype === 'secondary'
                ? ThemeSettings.THEME_COLORS.textSecondary
                : ThemeSettings.THEME_COLORS.textPrimary,
            '&:hover': {
              backgroundColor:
                ownerState?.datatype === 'secondary'
                  ? ThemeSettings.THEME_COLORS.white
                  : ThemeSettings.THEME_COLORS.black,
              color:
                ownerState?.datatype === 'secondary'
                  ? ThemeSettings.THEME_COLORS.textPrimary
                  : ThemeSettings.THEME_COLORS.textSecondary,
            },
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.title01,
          lineHeight: '105%',
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title01_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title01_mobile,
          },
          fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
          fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.bold,
        }),
        h2: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.title02,
          lineHeight: '105%',
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title02_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title02_mobile,
          },
          fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
          fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.bold,
        }),
        h3: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.title03,
          lineHeight: '105%',
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title03_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title03_mobile,
          },
          fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
          fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.bold,
        }),
        h4: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
          lineHeight: '105%',
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title04_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title04_mobile,
          },
          fontFamily: `${ThemeSettings.THEME_FONTS.secondary}, sans-serif`,
          fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.regular,
        }),
        body1: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.body01,
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body01_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body01_mobile,
          },
          display:
            ownerState?.datatype === 'inline-strong'
              ? `inline`
              : `inline-block`,
          lineHeight: '120%',
          fontWeight:
            ownerState?.component === 'strong' || ownerState?.datatype === 'inline-strong'
              ? ThemeSettings.THEME_FONT_WEIGHTS.bold
              : ThemeSettings.THEME_FONT_WEIGHTS.regular,
        }),
        body2: ({ ownerState }) => ({
          color:
            ownerState?.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.textSecondary
              : ThemeSettings.THEME_COLORS.textPrimary,
          fontSize: ThemeSettings.THEME_FONT_SIZES.body02,
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body02_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body02_mobile,
          },
          lineHeight: '120%',
          fontStyle:
            ownerState?.datatype === 'italic'
              ? `italic`
              : `none`,
          fontWeight:
            ownerState?.component === 'strong'
              ? ThemeSettings.THEME_FONT_WEIGHTS.bold
              : ThemeSettings.THEME_FONT_WEIGHTS.regular,
        }),
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.datatype === 'videoContainer' && {
            alignItems: 'center',
            borderRadius: `15px`,
            justifyContent: 'center',
            maxWidth: ownerState?.maxWidth ? 'unset' : 1200,
            overflow: 'hidden',
            aspectRatio: '16 / 9',
          }),
          ...(ownerState.datatype === 'videoControls' && {
            backgroundColor: 'rgba(0,0,0,0.3)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }),
          ...(ownerState.datatype === 'image-container' && {
            '& img': {
              objectFit: `contain`,
              width: `100%`
            }
          }),
        }),
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'top',
        disableInteractive: true,
        PopperProps: {
          container: document.fullscreenElement ?? document.body,
        },
      },
    },
  },
});

export { theme };
