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
  base: 'transition-colors duration-200 ease-in-out',
  variants: {
    color: {
      primary: 'text-primary',
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
