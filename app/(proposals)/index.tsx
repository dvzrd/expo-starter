import { View } from 'react-native';

import Link from '@/components/Link';
import Screen from '@/components/Screen';

const proposals = [
  {
    id: '1',
    title: 'Proposal 1',
  },
  {
    id: '2',
    title: 'Proposal 2',
  },
  {
    id: '3',
    title: 'Proposal 3',
  },
];

const ProposalsList = () => (
  <View className="w-full items-center justify-center gap-2">
    {proposals.map(({ id, title }) => (
      <Link key={id} href={`/${id}`} className="w-full text-center text-xl">
        {title}
      </Link>
    ))}
  </View>
);

const ProposalsView = () => (
  <Screen className="items-center justify-center">
    <ProposalsList />
  </Screen>
);

export default ProposalsView;
