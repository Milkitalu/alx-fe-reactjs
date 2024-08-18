import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.provider value= {userData}>
      <ProfilePage userData={userData} />;
    </UserContext.provider>
  );
      
}

export default App;