import { useContext } from 'react';
import {
  type EdgeInsets,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

export const useAppSafeAreaInsets = (): EdgeInsets => {
  const insets = useContext(SafeAreaInsetsContext);

  if (!insets) {
    throw new Error(
      'useAppSafeAreaInsets must be used within a SafeAreaProvider', // Expo Router will wrap routes in a SafeAreaProvider
    );
  }

  return insets;
};
