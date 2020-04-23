import Layout from '../../components/MyLayout';
//import fetch from 'isomorphic-unfetch';
import fetch from 'node-fetch';


function Post(props){
	return (
		<Layout>	
			<h1>{props.show.name}</h1>
		    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
		    {props.show.image ? <img src={props.show.image.medium} /> : null}
		</Layout>
	)
}

export const getStaticPaths = async () => {

	const files = [];

	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  	const data = await res.json();

  	const paths = data.map( single => ({
  		params : {
  			id : single.show.id.toString()
  		}
  	}));

  	return {
  		paths,
  		fallback: false
  	}

}

export async function getStaticProps({params : {id}}) {

	//console.log(`https://api.tvmaze.com/shows/${id}`, "params");

	// const {id} = 
	  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	  const show = await res.json();

	  return { 
	  	props : {
	  	  show : show
	  	}
	  };

}

// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//     {props.show.image ? <img src={props.show.image.medium} /> : null}
//   </Layout>
// );


// Post.getStaticProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };

export default Post;
