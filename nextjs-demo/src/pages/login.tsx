import { useAuth } from 'hooks';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login();
      console.log('Redirect to dashboard');
      router.push('/about');
    } catch (error) {
      console.log('failed to login', error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={() => router.push('/about')}>Go to About</button>
    </div>
  );
}
