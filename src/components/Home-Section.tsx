import { Button } from './Button'
import ImageMenTraining from '../../public/assets/pngwing1.png'
import Image from 'next/image'

export const InitialSection = () => {
  return (
    <section className="flex text-white px-[80px]">
      <div className="max-w-2xl">
        <h2 className="font-bebasNeue text-[82px] mt-[124px]">
          <span className="font-bungeeOutline text-[78px]">Aqui não se</span>{' '}
          treina fofo
        </h2>
        <p className="my-7 text-[18px]">
          Transforme-se na nossa academia! Oferecemos equipamentos modernos,
          instrutores qualificados e aulas para todos os níveis. Alcance seus
          objetivos fitness conosco. Experimente hoje!
        </p>
        <Button childrean="Começar" isArrow />
      </div>
      <div>
        <Image
          src={ImageMenTraining}
          alt="Image men training"
          className="max-h-[614px]"
        />
      </div>
    </section>
  )
}
