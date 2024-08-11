import WelcomeMessage from '../components/WelcomeMessage.js';
import Header from '../components/Header.js';
import MainContent from '../components/MainContent.js';
import Footer from '../components/Footer.js';
import UserProfile from '../components/UserProfile.js'
function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;
