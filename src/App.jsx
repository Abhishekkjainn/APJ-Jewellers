import { useState } from 'react';
import './App.css';
import Mainpage from './mainpage';
import Loginpage from './loginpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <Mainpage /> */}
      <Loginpage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;
