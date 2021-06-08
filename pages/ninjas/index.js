import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Ninja.module.css'
const Ninjas = ({ ninjas }) => {

  return (
    <>
      <Head>
        <title>Ninja List | Ninja List</title>
        <meta name="keyword" content="ninja" />
      </Head>
      <div>
        <h1>All ninja</h1>
        { ninjas.map((ninja, key) => (
          <Link key={key} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const ninjas = await res.json()
  return {
    props: { ninjas }
  }
}

export default Ninjas;