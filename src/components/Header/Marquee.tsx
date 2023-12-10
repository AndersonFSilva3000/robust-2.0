import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import dumbbells from '../../../public/assets/icons8-barbell-64 1.png'

export const MarqueeSection = () => {
  return (
    <Marquee className="bg-bgSecundary">
      <div className="text-3xl flex items-center h-[56px] w-full text-white">
        <h3 className="font-bebasNeue flex items-center gap-11">
          <span>consultoria individual </span>
          <Image src={dumbbells} alt="Image dumbbells" />
          <span>+20 professores</span>
          <Image src={dumbbells} alt="Image dumbbells" />
          <span>treine da sua forma</span>
          <Image src={dumbbells} alt="Image dumbbells" />
          <span>+15 unidades</span>
          <Image src={dumbbells} alt="Image dumbbells" />
          <span>+montamos</span>
        </h3>
      </div>
    </Marquee>
  )
}
