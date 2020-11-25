import { wrapper } from '../redux/store'
import 'antd/dist/antd.css';
import '../styles/index.css'
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
