import { Stack } from 'expo-router';

const ProposalsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Proposals',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Proposal Details',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProposalsLayout;
