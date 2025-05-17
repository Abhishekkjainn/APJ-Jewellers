import { useState, useEffect } from 'react';
import './App.css';
import Mainpage from './mainpage';
import Loginpage from './loginpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem('loggedIn');
    const storedUsername = localStorage.getItem('username');
    const storedIsAdmin = localStorage.getItem('isAdmin');

    if (storedLogin === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setIsAdmin(JSON.parse(storedIsAdmin || 'false'));
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Mainpage
          username={username}
          isAdmin={isAdmin}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Loginpage
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
          setIsAdmin={setIsAdmin}
        />
      )}
    </>
  );
}

export default App;
