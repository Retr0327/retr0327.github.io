import dynamic from 'next/dynamic';
import Jumbotron from '@components/pages/Home/Jumbotron';
import Waves from '@components/pages/Home/Waves/Waves';

const Experiences = dynamic(() => import('@components/pages/Home/Experiences'));

function Home() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          boxShadow: 'var(--mantine-shadow-md)',
          backgroundColor: 'var(--mantine-color-body)',
          minHeight: '100vh',
        }}
      >
        <Jumbotron />
        <Waves height={40} width={150} />
        <Experiences />
      </div>
    </>
  );
}

export default Home;
