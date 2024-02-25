import { FontAwesome } from '@expo/vector-icons';

// Icons: https://icons.expo.fyi/
const Icon = ({
  name,
  color,
  size = 28,
  ...rest
}: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
  size?: number;
}) => <FontAwesome color={color} name={name} size={size} {...rest} />;

export default Icon;
