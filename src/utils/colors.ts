import { platformColor, platformSelect } from 'nativewind/theme';

import platformColorsConfig from '../config/colors';

// - platformSelect:
//   - https://www.nativewind.dev/v4/customization/theme#platformselect
//   - https://reactnative.dev/docs/platform-specific-code
// - platformColor:
//   - https://www.nativewind.dev/v4/customization/colors
//   - https://reactnative.dev/docs/platformcolor

type PlatformColors = {
  default: string;
  ios: string;
  android: string;
};

type ColorConfig = {
  DEFAULT: PlatformColors;
  fg: PlatformColors;
};

const isColorConfig = (config: any): config is ColorConfig =>
  config.DEFAULT !== undefined;

export const getPlatformColors = (key: keyof typeof platformColorsConfig) => {
  const colors = platformColorsConfig[key];
  const defaultColors = colors as PlatformColors;

  if (isColorConfig(colors)) {
    return {
      DEFAULT: platformSelect({
        default: colors.DEFAULT.default,
        ios: platformColor(colors.DEFAULT.ios),
        android: platformColor(colors.DEFAULT.android),
      }),
      fg: platformSelect({
        default: colors.fg.default,
        ios: platformColor(colors.fg.ios),
        android: platformColor(colors.fg.android),
      }),
    };
  }

  return platformSelect({
    default: defaultColors.default,
    ios: platformColor(defaultColors.ios),
    android: platformColor(defaultColors.android),
  });
};

export default getPlatformColors;
