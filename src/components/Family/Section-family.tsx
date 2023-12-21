import Image from 'next/image'

import person from '../../../public/assets/pngwing2.png'

export function FamilySection() {
  return (
    <section className="xl:px-20 xl:py-0 md:py-20 md:px-10 max-sm:px-5">
      <div className="flex gap-8 md:justify-center md:items-center max-sm:justify-center max-sm:text-center">
        <Image
          src={person}
          alt="Casal treinando"
          width={434}
          height={532}
          className="pt-16 xl:h-auto xl:block md:hidden max-sm:hidden"
        />
        <div>
          <h3 className="xl:text-6xl xl:text-start md:text-[2.8rem] md:text-center text-white font-bungeeOutline max-sm:text-[23px] max-sm:mt-10">
            faça parte{' '}
            <span className="font-bebasNeue xl:text-6xl md:text-5xl max-sm:text-2xl ">
              da família
            </span>
          </h3>
          <p className="text-white mt-7 xl:text-lg xl:text-start md:text-base md:text-center">
            Nossa academia tem milhares de clientes satisfeitos com resultados
            surpreendentes. Junte-se a nós e comece a transformar seu corpo
            agora!
          </p>
          <div className="flex max-sm:flex-col gap-12 mt-[70px] text-white xl:text-start md:text-center max-sm:mb-10">
            <div>
              <h4 className="font-bebasNeue xl:text-6xl md:text-4xl max-sm:text-xl">
                +15
              </h4>
              <p className="xl:text-lg md:text-base">
                Unidades na cidade de São Paulo.
              </p>
            </div>
            <div>
              <h4 className="font-bebasNeue xl:text-6xl md:text-4xl max-sm:text-xl">
                +2000
              </h4>
              <p className="xl:text-lg md:text-base">
                Alunos matriculados em nossas unidades.
              </p>
            </div>
            <div>
              <h4 className="font-bebasNeue xl:text-6xl md:text-4xl max-sm:text-xl">
                +100
              </h4>
              <p className="xl:text-lg md:text-base">
                Professores altamente qualificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
