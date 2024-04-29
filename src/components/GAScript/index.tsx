import Script from 'next/script';

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SF3HJM8QQL');
`;

function GaScript() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SF3HJM8QQL" />
      <Script id="google-analytics" strategy="afterInteractive">
        {gaScript}
      </Script>
    </>
  );
}

export default GaScript;
