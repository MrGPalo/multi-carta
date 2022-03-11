import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import PrimaryLayout from '../components/layouts/PrimaryLayout';

const MyApp = ({
  Component, pageProps, router, initialUser,
}) => (

  <UserProvider user={initialUser}>
    <PrimaryLayout>
      <main><h1>Tester</h1></main>
    </PrimaryLayout>
  </UserProvider>

);

export default MyApp;
