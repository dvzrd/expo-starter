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

const ProposalsView = () => (
  <Screen className="items-center justify-center">
    {proposals.map(({ id, title }) => (
      <Link key={id} href={`/${id}`}>
        {title}
      </Link>
    ))}
  </Screen>
);

export default ProposalsView;
