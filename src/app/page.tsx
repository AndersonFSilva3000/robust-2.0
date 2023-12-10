import { Header } from '@/components/Header'
import { InitialSection } from '@/components/Home-Section'

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/assets/Frame1.png')] bg-right bg-no-repeat">
        <Header />
        <InitialSection />
      </div>
    </>
  )
}
