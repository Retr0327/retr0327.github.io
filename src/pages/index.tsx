import { Box } from '@mantine/core';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import Footer from '@components/common/Footer';
import HomeLayout from '@components/layout/Home';
import Jumbotron from '@components/pages/Home/Jumbotron';

const Home: NextPageWithLayout = () => (
  <>
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Jumbotron />
    </Box>
    <Footer />
  </>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
