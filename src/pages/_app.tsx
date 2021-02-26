import '../styles/global.css';

import { ChallengeProvider } from '../context/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
