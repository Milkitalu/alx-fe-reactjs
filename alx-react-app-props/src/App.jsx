import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <UserContext.Provider value= {userData}>
        <ProfilePage userData={userData} />;
      </UserContext.Provider>
    </div>
  );
      
}

export default App;