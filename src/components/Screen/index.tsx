import { View, type ViewProps } from 'react-native';
import { tv } from 'tailwind-variants';

import { useAppSafeAreaInsets } from '@/hooks';

// API Ref: https://www.tailwind-variants.org/docs/composing-components
export const tvScreen = tv({
  base: 'flex-1 bg-screen text-fg',
});

const Screen = ({ children, className, ...rest }: ViewProps) => {
  const insets = useAppSafeAreaInsets();

  return (
    <View
      className={tvScreen({ class: className })}
      // TODO: replace with NativeWind's safe area utils when available
      // Ref: https://github.com/marklawlor/nativewind/commit/4acc98867e1a4a30f5ee0c24f717711cbebfc78e#diff-dc3faaf8a34abb936a579259b6f0c64819c10df9e5d1a33e69bfd3a6e3cac9a5
      style={{ paddingTop: insets.top }}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Screen;
