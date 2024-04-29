import dynamic from 'next/dynamic';
import Jumbotron from '@views/Home/Jumbotron';
import Waves from '@views/Home/Waves/Waves';

const Experiences = dynamic(() => import('@views/Home/Experiences'));

function Home() {
  return (
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
  );
}

export default Home;
