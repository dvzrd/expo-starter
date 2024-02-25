// default colors:
// - colors css: src/styles/colors.css
// - hsl colors ref: https://www.smashingmagazine.com/2021/07/hsl-colors-css/

// android colors:
// - attr: https://developer.android.com/reference/android/R.attr
// - color: https://developer.android.com/reference/android/R.color

// ios colors:
// - standard colors: https://developer.apple.com/documentation/uikit/uicolor/standard_colors
// - ui element colors: https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors

const platformColors = {
  border: {
    default: 'hsl(var(--border))',
    ios: 'separatorColor',
    android: '?attr/colorControlNormal',
  },
  input: {
    default: 'hsl(var(--input))',
    ios: 'tertiarySystemFill',
    android: '?android:attr/editTextColor',
  },
  ring: {
    default: 'hsl(var(--ring))',
    ios: 'systemBlue',
    android: '?attr/colorControlActivated',
  },
  background: {
    default: 'hsl(var(--background))',
    ios: 'systemBackgroundColor',
    android: '?attr/colorBackground',
  },
  foreground: {
    default: 'hsl(var(--foreground))',
    ios: 'labelColor',
    android: '?attr/colorOnBackground',
  },
  primary: {
    DEFAULT: {
      default: 'hsl(var(--primary))',
      ios: 'systemBlue',
      android: '?attr/colorPrimary',
    },
    fg: {
      default: 'hsl(var(--primary-foreground))',
      ios: 'label',
      android: '?attr/textColorPrimary',
    },
  },
  secondary: {
    DEFAULT: {
      default: 'hsl(var(--secondary))',
      ios: 'systemGray2',
      android: '?attr/colorSecondary',
    },
    fg: {
      default: 'hsl(var(--secondary-foreground))',
      ios: 'secondaryLabel',
      android: '?attr/textColorSecondary',
    },
  },
  accent: {
    DEFAULT: {
      default: 'hsl(var(--accent))',
      ios: 'systemGreen',
      android: '?attr/colorAccent',
    },
    fg: {
      default: 'hsl(var(--accent-foreground))',
      ios: 'label',
      android: '?android:attr/textColorPrimaryInverse',
    },
  },
  muted: {
    DEFAULT: {
      default: 'hsl(var(--muted))',
      ios: 'systemGray2',
      android: '?attr/colorBackgroundFloating',
    },
    fg: {
      default: 'hsl(var(--muted-foreground))',
      ios: 'secondaryLabel',
      android: '?attr/textColorSecondary',
    },
  },
  destructive: {
    DEFAULT: {
      default: 'hsl(var(--destructive))',
      ios: 'systemRed',
      android: '?android:color/holo_red_dark',
    },
    fg: {
      default: 'hsl(var(--destructive-foreground))',
      ios: 'white',
      android: '?attr/colorOnPrimary',
    },
  },
  card: {
    DEFAULT: {
      default: 'hsl(var(--card))',
      ios: 'secondarySystemBackground',
      android: '?attr/colorSurface',
    },
    fg: {
      default: 'hsl(var(--card-foreground))',
      ios: 'label',
      android: '?attr/textColorPrimary',
    },
  },
  popover: {
    DEFAULT: {
      default: 'hsl(var(--popover))',
      ios: 'secondarySystemBackground',
      android: '?attr/colorBackgroundFloating',
    },
    fg: {
      default: 'hsl(var(--popover-foreground))',
      ios: 'label',
      android: '?attr/textColorPrimary',
    },
  },
};

export default platformColors;
