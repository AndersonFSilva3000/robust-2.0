import { getData } from '@/servises/api'
import { PlansCards, PropsPlans } from './Plans-cards'

export async function PlansSection() {
  const data = await getData('plans')

  return (
    <section className="bg-bgSecundary px-[80px]">
      <h3 className="text-7xl font-bebasNeue text-white text-center pt-20 pb-14">
        nossos planos
      </h3>
      <div className="flex items-end gap-10 pb-20">
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
