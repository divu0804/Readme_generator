import type { NextPage } from 'next'
import { Hero } from '~/components/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? '', ['common', 'home'])),
  },
})

export default Home
