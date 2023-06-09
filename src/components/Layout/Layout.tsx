
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useAuth from '@/hooks/auth';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const pathnames = ['/signin', '/signup'];
  useAuth();

  if (pathnames.includes(pathname)) {
    return (
      <Box>
        {children}
      </Box>
    );
  } else {
    return (
      <>
        <Header />
        <Box
          sx={{
            borderTop: "1px solid #ebebeb",
            borderBottom: "1px solid #ebebeb"
          }}
        >
          {children}
        </Box>
        <Footer />
      </>
    );

  }
};
export default Layout;
