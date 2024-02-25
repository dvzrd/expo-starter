import { useGlobalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import Link from '@/components/Link';
import Screen from '@/components/Screen';

const ProposalDetailsView = () => {
  const { id } = useGlobalSearchParams();

  return (
    <Screen>
      <Text className="bg-gray-600 p-4 text-white">Proposal {id} Details</Text>
      <Link href="/" className="bg-gray-400 p-4 text-red-500">
        Go Back
      </Link>
    </Screen>
  );
};

export default ProposalDetailsView;
