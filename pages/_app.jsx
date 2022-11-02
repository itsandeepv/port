

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import '../styles/globals.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './components/Layout/Layout';


function MyApp({ Component, pageProps }) {
  return <Layout>
<div className="container">
    <Component {...pageProps} />

</div>
  </Layout> 
  
 
}

export default MyApp
