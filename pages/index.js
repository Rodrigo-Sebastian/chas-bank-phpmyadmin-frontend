import Link from 'next/link';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Bank</h1>
      <nav>
        <ul>
          <li>
            <Link href="/create-user">
              <p>Create User</p>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;