import React from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import Menu from '../Menu';
import Footer from '../Footer';

const PrimaryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <div>
        <Head>
          <title>Restaurant App</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
        </Head>
      </div>
      <div className="container">
        <Menu />
        <main>
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
            {!user && (
            <a
              style={{ margin: '5px' }}
              href="/api/auth/login"
              className="btn btn-primary"
            >
              Login
            </a>
            )}
            {user && (
            <>
              <img alt="" src={user.picture} width="38" className="rounded" />
              <a
                style={{ margin: '5px' }}
                href="/api/auth/logout"
                className="btn btn-primary"
              >
                Logout
                {' '}
                {user.email}
              </a>
            </>
            )}
          </div>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
