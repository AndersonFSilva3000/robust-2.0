import { getData } from '@/servises/api'
import { PlansCards, PropsPlans } from './Plans-cards'

export async function PlansSection() {
  const data = await getData('plans')

  return (
    <section className="bg-bgSecundary xl:px-20 md:px-10 max-sm:px-5">
      <h3 className="xl:text-7xl md:text-5xl font-bebasNeue text-white text-center pt-20 pb-14 max-sm:text-2xl">
        nossos planos
      </h3>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 md:grid-flow-dense items-end gap-10 pb-20">
        {data &&
          data.map((card: PropsPlans) => (
            <PlansCards
              key={card.title}
              url={card.url}
              title={card.title}
              subTitle={card.subTitle}
              prince={card.prince}
              recommended={card.recommended}
            />
          ))}
      </div>
    </section>
  )
}
