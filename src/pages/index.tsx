import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { AtractionsBanner } from '../components/AtractionsBanner'
import { Divider } from '../components/Divider'
import { SwiperContent } from '../components/SwiperContent'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AtractionsBanner />
      <Divider />
      <SwiperContent />
    </>
  )
}