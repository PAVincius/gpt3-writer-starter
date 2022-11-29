import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import TextboxButton from './textBox';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Healthcare Tool | Ey!Icare</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Ey! I care</h1>
          </div>
          <div className="header-subtitle">
            <h2>The Future of Healthcare with AI: A smarter, more personalized way to stay healthy.</h2>
          </div>
        </div>
        <TextboxButton/>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
