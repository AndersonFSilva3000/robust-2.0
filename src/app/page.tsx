import { Header } from '@/components/Header'
import { MarqueeSection } from '@/components/Header/Marquee'
import { InitialSection } from '@/components/Home-Section'
import { DifferentialSection } from '@/components/Differential/Differential-section'
import { PlansSection } from '@/components/Plans/Plans-section'
import { FamilySection } from '@/components/Family/Section-family'
import { ContactSection } from '@/components/Contact/Contact-section'

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
      <div className="bg-[url('../../public/assets/Frame2.png')] bg-left bg-no-repeat bg-contain">
        <FamilySection />
      </div>
      <ContactSection />
    </>
  )
}
