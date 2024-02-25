import View, { type IView } from '@/components/View';

const ListScreen = ({ children, ...rest }: IView) => (
  <View className="items-center justify-center" {...rest}>
    {children}
  </View>
);

export default ListScreen;
