import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <div className="aboutUs">
	      <p>We provide you list of Batman TV Shows.</p>
	      <p>Keep visiting every day for latest updates.</p>
	      <p>Write us your requirements / suggestions from <Link href="/contact"><a>Contact</a></Link> section.</p>
	  </div>    
    </Layout>
  );
}