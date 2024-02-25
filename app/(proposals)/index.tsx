import { Link } from 'expo-router';

import ListScreen from '@/components/Screen/List';

const ProposalsView = () => (
  <ListScreen>
    <Link href="/1">Proposal 1</Link>
    <Link href="/2">Proposal 2</Link>
    <Link href="/3">Proposal 3</Link>
  </ListScreen>
);

export default ProposalsView;
