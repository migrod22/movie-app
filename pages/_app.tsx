import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import store from '../components/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
