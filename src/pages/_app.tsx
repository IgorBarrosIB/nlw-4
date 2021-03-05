import '../styles/global.css';

import { ChallengeProvider } from '../context/ChallengesContext';


function MyApp({ Component, pageProps }) {

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
