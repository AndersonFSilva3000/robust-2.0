import { Header } from '@/components/Header'
import { MarqueeSection } from '@/components/Header/Marquee'
import { InitialSection } from '@/components/Home-Section'
import { DifferentialSection } from '@/components/Differential/Differential-section'
import { PlansSection } from '@/components/Plans/Plans-section'

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/assets/Frame1.png')] bg-right bg-no-repeat bg-contain">
        <Header />
        <InitialSection />
        <MarqueeSection />
      </div>
      <DifferentialSection />
      <PlansSection />
    </>
  )
}
