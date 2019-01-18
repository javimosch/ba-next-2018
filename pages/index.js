import '../styles/main.scss';
import Head from 'next/head'
import fetch from 'node-fetch';
import Navbar from 'components/HerokuNavbar';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {};
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
  	const json = await res.json()
  	return { stars: json.stargazers_count }
  }

  render() {
    return (
    <div>
	  	<Head>
	      <title>Home | MisitioBA</title>
	      <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
	    </Head>
    	<Navbar>
    		<h1>WI</h1> 
    	</Navbar>
  	</div>
    )
  }
}
