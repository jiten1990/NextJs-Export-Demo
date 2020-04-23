import Layout from '../components/MyLayout';
import Link from 'next/link';
//import fetch from 'isomorphic-unfetch';

import fetch from 'node-fetch';

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getStaticProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;

function Index({ shows }) {
  return (
  	<Layout>
  	<h1>Batman TV Shows</h1>
    <ul>
  		{shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      shows: data.map(entry => entry.show)
    },
  }
}

export default Index
