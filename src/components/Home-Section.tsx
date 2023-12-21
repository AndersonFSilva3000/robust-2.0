import { Button } from './Button'
import ImageMenTraining from '../../public/assets/pngwing1.png'
import Image from 'next/image'

export const InitialSection = () => {
  return (
    <section className="flex xl:items-center md:items-end text-white xl:px-20 md:px-10 max-sm:px-5 max-sm:my-10">
      <div className="xl:max-w-2xl md:mb-12">
        <h2 className="font-bebasNeue xl:text-[82px] xl:mt-[124px] md:text-5xl md:mt-16 max-sm:text-2xl max-sm:text-center">
          <span className="font-bungeeOutline xl:text-[78px] md:text-[2.8rem] md:mr-3 md:mb-2 max-sm:text-[23px] max-sm:mr-2">
            Aqui não se
          </span>
          treina fofo
        </h2>
        <p className="my-7 xl:text-[18px] md:text-base">
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
          className="xl:max-w-[614px] md:max-w-xs max-sm:hidden"
        />
      </div>
    </section>
  )
}
