import { getData } from '@/servises/api'
import { PlansSection, Props } from './Plans-Section'

export async function PlansCards() {
  const data = await getData()

  return (
    <section className=" px-[80px] pt-40" id="teste">
      <h3 className="font-bebasNeue text-7xl text-white text-center">
        <span className="font-bungeeOutline text-[68px] mr-7">nossos</span>
        diferenciais
      </h3>
      <div className="flex mt-28 gap-6">
        {data &&
          data.map((itens: Props) => (
            <PlansSection {...itens} key={itens.title} />
          ))}
      </div>
    </section>
  )
}
