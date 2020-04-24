import Link from 'next/link';
import Head from 'next/Head';

const linkStyle = {
	marginRight : 15
}

const Header = () => (

  <div>
    <Head>
        <title>Next JS Export Demo</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;