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
      <div className="bg-bgCardPlans xl:max-w-none md:max-w-[284px] md:justify-self-center">
        <img src={url} alt={title} className="w-full" />
        <h4 className="bg-black text-white font-bebasNeue px-3 py-5 xl:text-4xl md:text-2xl">
          {title}
        </h4>
        <div className="px-6 py-3 flex justify-between items-center">
          <p className="xl:text-2xl md:text-lg text-colorPlans">
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
              xl:text-lg
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
    <div
      className="
      bg-bgCardPlans
      md:justify-self-center
      xl:col-auto
      xl:max-w-none
      md:col-span-2
      md:max-w-[284px]"
    >
      <span
        className="
        block
        bg-bgPlanRecommended
        xl:text-[18px]
        text-white
        text-center
        py-2
        font-bold"
      >
        RECOMENDADO POR USUÁRIOS
      </span>
      <img src={url} alt={title} className="w-full" />
      <h4 className="bg-bgPlanRecommended text-white font-bebasNeue px-3 py-5 xl:text-4xl md:text-2xl">
        {title}
      </h4>
      <div className="px-6 py-3 flex justify-between items-center">
        <p className="xl:text-2xl md:text-lg text-colorPlans">
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
           xl:text-lg font-bold
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
