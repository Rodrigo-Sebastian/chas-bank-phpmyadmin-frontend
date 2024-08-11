/*
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AccountPage() {
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setToken(token);
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const token = parts.pop().split(';').shift();
      console.log(`Token: ${token}`); // Add this line to log the token
      return token;
    }
    return null;
  };

  const handleGetBalance = async () => {
    console.log('handleGetBalance called');
    if (!token) {
      console.error('Token is not defined or empty');
      return;
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    console.log('Request headers:', headers);
    try {
      const response = await fetch('http://localhost:3001/me/accounts', {
        method: 'POST',
        headers,
        body: JSON.stringify({ token }), // Send the token in the request body
      });
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data:', data);
      const balanceNumber = parseFloat(data.balance); // Convert the balance string to a number
      setBalance(balanceNumber);
      setError(null);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (token && !balance) {
      handleGetBalance();
    }
  }, [token, balance]);

  const handleDeposit = async () => {
    try {
      const response = await fetch('http://localhost:3001/me/accounts/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, amount }),
      });
      const data = await response.json();
      console.log('API response:', data);
      const newBalance = balance + parseFloat(amount); // Add the new amount to the current balance
      setBalance(newBalance);
      setAmount(0); // Reset the amount state to 0 after deposit
    } catch (error) {
      console.error(error); // Log any errors that occur
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
      <form>
        <label>
          Deposit amount:
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleDeposit}>
          Deposit
        </button>
      </form>
    </div>
  );
}

export default AccountPage;
*/
/*
import { useState, useEffect } from 'eact';
import { useRouter } from 'next/router';

function AccountPage() {
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setToken(token);
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const token = parts.pop().split(';').shift();
      console.log(`Token: ${token}`); // Add this line to log the token
      return token;
    }
    return null;
  };

  const handleGetBalance = async () => {
    console.log('handleGetBalance called');
    if (!token) {
      console.error('Token is not defined or empty');
      return;
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    console.log('Request headers:', headers);
    try {
      const response = await fetch('/me/accounts', {
        method: 'POST',
        headers,
        body: JSON.stringify({ token }), // Send the token in the request body
      });
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data:', data);
      const balanceNumber = parseFloat(data.balance); // Convert the balance string to a number
      setBalance(balanceNumber);
      setError(null);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (token &&!balance) {
      handleGetBalance();
    }
  }, [token, balance]);

  const handleDeposit = async () => {
    try {
      const response = await fetch('/me/accounts/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, amount }),
      });
      const data = await response.json();
      console.log('API response:', data);
      const newBalance = balance + parseFloat(amount); // Add the new amount to the current balance
      setBalance(newBalance);
      setAmount(0); // Reset the amount state to 0 after deposit
    } catch (error) {
      console.error(error); // Log any errors that occur
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account</h1>
      {error? (
        <p style={{ color: 'ed' }}>{error}</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
      <form>
        <label>
          Deposit amount:
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleDeposit}>
          Deposit
        </button>
      </form>
    </div>
  );
}

export default AccountPage;
*/
/*
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AccountPage() {
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setToken(token);
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const token = parts.pop().split(';').shift();
      console.log(`Token: ${token}`); // Add this line to log the token
      return token;
    }
    return null;
  };

  const handleGetBalance = async () => {
    try {
      const response = await fetch('http://localhost:3001/me/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Balance:', data.balance);
      } else {
        console.error('Error fetching balance:', data.message);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };
  
  useEffect(() => {
    if (token && !balance) {
      handleGetBalance();
    }
  }, [token, balance]);

  /*
  const handleDeposit = async () => {
    try {
      const response = await fetch('http://localhost:3001/me/accounts/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, amount }),
      });
      const data = await response.json();
      console.log('API response:', data);
      const newBalance = balance + parseFloat(amount); // Add the new amount to the current balance
      setBalance(newBalance);
      setAmount(0); // Reset the amount state to 0 after deposit
    } catch (error) {
      console.error(error); // Log any errors that occur
    }
  };*/

/*
  const handleDeposit = async () => {
    console.log('Token:', token);
    console.log('Amount:', amount);
    try {
      const response = await fetch('http://localhost:3001/me/accounts/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `token=${token}&amount=${amount}`,
      });
      const data = await response.json();
      console.log('API response:', data);
      const newBalance = balance + parseFloat(amount); // Add the new amount to the current balance
      setBalance(newBalance);
      setAmount(0); // Reset the amount state to 0 after deposit
    } catch (error) {
      console.error(error); // Log any errors that occur
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
      <form>
        <label>
          Deposit amount:
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleDeposit}>
          Deposit
        </button>
      </form>
    </div>
  );
}

export default AccountPage;

*/

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AccountPage() {
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setToken(token);
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const token = parts.pop().split(';').shift();
      console.log(`Token: ${token}`); // Add this line to log the token
      return token;
    }
    return null;
  };

  const handleGetBalance = async () => {
    try {
      const response = await fetch('http://localhost:3001/me/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Balance:', data.balance);
        setBalance(data.balance);
      } else {
        console.error('Error fetching balance:', data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      setError('Error fetching balance');
    }
  };

  useEffect(() => {
    if (token && !balance) {
      handleGetBalance();
    }
  }, [token, balance]);

  const handleDeposit = async () => {
    console.log('Token:', token);
    console.log('Amount:', amount);
    try {
      const response = await fetch('http://localhost:3001/me/accounts/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, amount }),
      });
      const data = await response.json();
      if (response.ok) {
        setBalance(balance + amount);
        setAmount(0); // Återställ beloppet efter en lyckad insättning
        alert('Money deposited successfully');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred while making the deposit');
    }
  };

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/login');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Account</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AccountPage;
