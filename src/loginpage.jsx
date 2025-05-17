import { useState } from 'react';
import './App.css';

function Loginpage({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message

    try {
      const response = await fetch(
        `https://apjapi.vercel.app/authenticate/username=${username}/password=${password}`
      );
      const data = await response.json();

      if (data.success) {
        // Successful authentication, set the login state
        setIsLoggedIn(true);

        // Optionally, you can store user data in localStorage or a global state management solution (like Context API or Redux)
        // For now, let's just log the successful login data.
        console.log('Login successful:', data.data);
      } else {
        // Authentication failed, show the error message
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to authenticate. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginpage">
      {/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div className="error">{error}</div>} */}
      <div className="headingpage">
        <img src="/icon192x192.png" alt="main logo" className="logologin" />
      </div>
      <div className="logindiv">
        <div className="logindivhead">Login to Continue</div>
        <div className="logininp">
          <div className="labelinp">Enter Username</div>
          <input
            type="text"
            name="username"
            id="username"
            className="inputinp"
          />
        </div>
        <div className="logininp">
          <div className="labelinp">Enter Password</div>
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            className="inputinp"
          />
        </div>
        <div className="loginbutton">Login</div>
      </div>
    </div>
  );
}

export default Loginpage;
