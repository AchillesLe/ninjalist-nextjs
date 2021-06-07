import '../styles/globals.css'
import Layout from '../components/global/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await MyApp.getInitialProps(appContext)
//   return { ...appProps}
// }
export default MyApp
