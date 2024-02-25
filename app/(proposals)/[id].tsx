import { useGlobalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import Icon from '@/components/Icon';
import Link from '@/components/Link';
import Screen from '@/components/Screen';

const ProposalDetailsView = () => {
  const { id } = useGlobalSearchParams();

  return (
    <Screen>
      <View
        accessibilityRole="menubar"
        className="flex flex-row items-center justify-between gap-4 bg-gray-300 p-4"
      >
        <Link href="/" className="flex flex-1 items-center gap-2 font-semibold">
          <Icon name="chevron-left" size={12} /> Proposals
        </Link>
        <Text
          accessibilityRole="header"
          className="flex-1 text-center font-bold"
        >
          Proposal {id}
        </Text>
        <View className="flex-1" />
      </View>
    </Screen>
  );
};

export default ProposalDetailsView;
