import { View as NativeView, type ViewProps } from 'react-native';

import { useAppSafeAreaInsets } from '@/hooks/ui';

export interface IView extends ViewProps {
  // TODO: Add additional View props
}

const View = ({ children, className, ...rest }: IView) => {
  const insets = useAppSafeAreaInsets();

  let tw = 'flex flex-1 flex-col';

  if (className) {
    tw += ` ${className}`;
  }

  return (
    <NativeView
      className={tw}
      // TODO: replace with NativeWind's safe area utils when available
      // Ref: https://github.com/marklawlor/nativewind/commit/4acc98867e1a4a30f5ee0c24f717711cbebfc78e#diff-dc3faaf8a34abb936a579259b6f0c64819c10df9e5d1a33e69bfd3a6e3cac9a5
      style={{ paddingTop: insets.top }}
      {...rest}
    >
      {children}
    </NativeView>
  );
};

export default View;
