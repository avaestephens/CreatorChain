import MembersOnly from '/pages/members-only';
import PrivateRoute from '/backend/PrivateRoute';

const MembersOnlyPage = () => {
  return (
    <PrivateRoute>
      <MembersOnly />
    </PrivateRoute>
  );
};

export default MembersOnlyPage;