import View, { type IView } from '@/components/View';

const Screen = ({ children, ...rest }: IView) => (
  <View {...rest}>{children}</View>
);

export default Screen;
