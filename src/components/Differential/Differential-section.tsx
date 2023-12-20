import { getData } from '@/servises/api'
import { DifferentialCard, Props } from './Differential-card'

export async function DifferentialSection() {
  const data = await getData('differential')

  return (
    <section className=" px-[80px] pt-40 mb-36" id="teste">
      <h3 className="font-bebasNeue text-7xl text-white text-center">
        <span className="font-bungeeOutline text-[68px] mr-7">nossos</span>
        diferenciais
      </h3>
      <div className="flex mt-28 gap-6">
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
