import { Link as ExpoLink } from 'expo-router';
import { type TextProps } from 'react-native';

// TODO: Add proper Link types so inherited props can be passed down without errors
export interface ILink extends Omit<TextProps, 'href'> {
  href: string;
}

const Link = ({ children, className, href }: ILink) => {
  let tw =
    'text-blue-500 transition-colors duration-200 hover:text-blue-700 focus:text-blue-700 active:text-blue-900';

  if (className) {
    tw += ` ${className}`;
  }

  return (
    <ExpoLink href={href} className={tw}>
      {children}
    </ExpoLink>
  );
};

export default Link;
