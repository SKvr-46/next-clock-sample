import { Clock } from "@/component/Clock"
import { Layout } from "@/component/Layout"
import { Footer } from "@/component/Footer"
import { Meta } from "@/component/Meta"

const Home = () => {

  return (
    <div>
      <Meta
      pageTitle={"NEON CLOCK"}
      />
      <Layout>
        <Clock/>
      </Layout>
      <Footer/>
    </div>

  )
}

export default Home