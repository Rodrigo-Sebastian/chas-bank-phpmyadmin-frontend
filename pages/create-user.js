
import { useState } from 'react';

function CreateUserPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      if (data.message === 'User created successfully') {
        setCreated(true);
        setUsername(''); // clear username field
        setPassword(''); // clear password field
        window.location.href = '/'; // redirect to main page
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      {created? (
        <p>User created successfully! Redirecting to main page...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit">Create User</button>
        </form>
      )}
    </div>
  );
}

export default CreateUserPage;