import { Auth } from 'components/common';
import { useAuth } from 'hooks';
import { LayoutProps } from 'models/common';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { profile, logout } = useAuth();
  async function handleLogoutClick() {
    try {
      await logout();
      console.log('Redirect to login page');
      router.push('/login');
    } catch (error) {
      console.log('failed to get logout', error);
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLogoutClick}>Logout</button>

      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>

      <div>{children}</div>
    </Auth>
  );
}
