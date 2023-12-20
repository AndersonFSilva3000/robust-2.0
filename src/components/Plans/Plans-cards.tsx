export type PropsPlans = {
  url: string
  title: string
  subTitle: string
  prince?: number
  recommended: boolean
}

export function PlansCards({
  url,
  title,
  subTitle,
  prince,
  recommended
}: PropsPlans) {
  const parceToBrl = (amout = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amout)
  }

  if (!recommended) {
    return (
      <div className="bg-bgCardPlans">
        <img src={url} alt={title} className="w-full" />
        <h4 className="bg-black text-white font-bebasNeue px-3 py-5 text-4xl">
          {title}
        </h4>
        <div className="px-6 py-3 flex justify-between items-center">
          <p className="text-2xl text-colorPlans">
            {subTitle}
            {prince ? (
              <span className="block text-white font-bold">
                {parceToBrl(prince)}
              </span>
            ) : (
              ''
            )}
          </p>
          <button
            className="
              text-lg
              font-bold
             text-colorPlans
              border-solid border
             border-buttonPlan
              rounded-full
              px-2 py-3
              transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110 duration-300
              "
          >
            SELECIONAR
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bgCardPlans">
      <span className="block bg-bgPlanRecommended text-[18px] text-white text-center py-2 font-bold">
        RECOMENDADO POR USUÁRIOS
      </span>
      <img src={url} alt={title} className="w-full" />
      <h4 className="bg-bgPlanRecommended text-white font-bebasNeue px-3 py-5 text-4xl">
        {title}
      </h4>
      <div className="px-6 py-3 flex justify-between items-center">
        <p className="text-2xl text-colorPlans">
          {subTitle}
          {prince ? (
            <span className="block text-white font-bold">
              {parceToBrl(prince)}
            </span>
          ) : (
            ''
          )}
        </p>
        <button
          className="
           text-lg font-bold
         text-colorPlanRecommended
           border-solid
           border
         border-borderPlanRecommended
           rounded-full
           px-2 py-3
           transition ease-in-out delay-150
           hover:-translate-y-1 hover:scale-110 duration-300
           "
        >
          SELECIONAR
        </button>
      </div>
    </div>
  )
}
