import { getData } from '@/servises/api'
import { DifferentialCard, Props } from './Differential-card'

export async function DifferentialSection() {
  const data = await getData('differential')

  return (
    <section className=" xl:px-20 xl:pt-40 mb-36 md:mt-36 md:px-10 max-sm:px-5">
      <h3 className="font-bebasNeue xl:text-7xl md:text-5xl text-white text-center max-sm:mt-10 max-sm:text-2xl">
        <span className="font-bungeeOutline xl:text-[68px] md:text-[2.8rem] md:mr-7 max-sm:mr-2 max-sm:text-[23px]">
          nossos
        </span>
        diferenciais
      </h3>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 mt-28 gap-6 max-sm:justify-center">
        {data &&
          data.map((itens: Props) => (
            <DifferentialCard
              key={itens.title}
              title={itens.title}
              description={itens.description}
              button={itens.button}
              src={itens.src}
            />
          ))}
      </div>
    </section>
  )
}
