import Head from "next/head"

const Detail = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja list | Detail</title>
      </Head>
      <h1>Detail page</h1>
      <p>{ninja.name}</p>
      <p>{ninja.username}</p>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const ninjas = await res.json()

  const paths = ninjas.map((ninja) => ({
    params: { id: ninja.id.toString() },
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const ninja = await res.json()
  return {
    props: {
      ninja
    }
  }
}
export default Detail