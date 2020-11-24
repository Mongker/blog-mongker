import { wrapper } from '../redux/store'
import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
