

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
      console.log(`Token: ${token}`); 
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
