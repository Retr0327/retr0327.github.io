import localFont from 'next/font/local';

const greycliffCF = localFont({
  src: [
    { path: './GreycliffCF-Bold.woff2', weight: '700', style: 'normal' },
    { path: './GreycliffCF-Heavy.woff2', weight: '900', style: 'normal' },
  ],
});

export default greycliffCF;
