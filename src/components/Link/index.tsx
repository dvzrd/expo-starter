import { Link as ExpoLink } from 'expo-router';
import { type TextProps } from 'react-native';
import { tv } from 'tailwind-variants';

// TODO: Add proper Link component types
export interface ILink extends Omit<TextProps, 'href'> {
  color?: 'primary';
  href: string;
}

// API Ref: https://www.tailwind-variants.org/docs/variants
export const tvLink = tv({
  base: 'transition-colors duration-200',
  variants: {
    color: {
      primary:
        'text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-900',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

const Link = ({ children, className, color, href }: ILink) => (
  <ExpoLink href={href} className={tvLink({ class: className, color })}>
    {children}
  </ExpoLink>
);

export default Link;
