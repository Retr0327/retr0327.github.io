import { Box } from '@mantine/core';
import type { NextPage } from 'next';
import Footer from '@components/common/Footer';
import Jumbotron from '@components/pages/Home/Jumbotron';

const Home: NextPage = () => (
  <>
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Jumbotron />
    </Box>
    <Footer />
  </>
);

export default Home;
