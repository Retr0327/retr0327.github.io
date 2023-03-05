import { Box } from '@mantine/core';
import { NextPageWithControl } from 'types';
import Footer from '@components/common/Footer';
import HomeLayout from '@components/layout/Home';
import Jumbotron from '@components/pages/Home/Jumbotron';

const Home: NextPageWithControl = () => (
  <>
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Jumbotron />
    </Box>
    <Footer />
  </>
);

Home.control = {
  Layout: (props) => <HomeLayout>{props.children}</HomeLayout>,
};

export default Home;
