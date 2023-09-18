import React from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      console.error(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


