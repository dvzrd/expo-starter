import { Stack } from 'expo-router';

const SettingsLayout = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: 'Settings',
      }}
    />
  </Stack>
);

export default SettingsLayout;
