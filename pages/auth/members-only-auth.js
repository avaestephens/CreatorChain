import MembersOnly from '../components/MembersOnly';
import PrivateRoute from '@/components/PrivateRoute';

const MembersOnlyPage = () => {
  return (
    <PrivateRoute>
      <MembersOnly />
    </PrivateRoute>
  );
};

export default MembersOnlyPage;