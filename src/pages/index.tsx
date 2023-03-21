import { Box } from '@mantine/core';
import { NextPageWithControl } from 'types';
import Footer from '@components/common/Footer';
import HomeLayout from '@components/layout/Home';
import Waves from '@components/pages/Home/Waves';
import Jumbotron from '@components/pages/Home/Jumbotron';
import Experience from '@components/pages/Home/Experience';

const Home: NextPageWithControl = () => (
  <>
    <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
      <Jumbotron />
      <Waves height={40} width={150} />
      <Experience />
    </Box>
    <Footer />
  </>
);

Home.control = {
  Layout: (props) => <HomeLayout>{props.children}</HomeLayout>,
};

export default Home;
