import Image from 'next/image'

import person from '../../../public/assets/pngwing2.png'

export function FamilySection() {
  return (
    <section className="px-20">
      <div className="flex gap-8 justify-center items-center">
        <Image
          src={person}
          alt="Casal treinando"
          width={434}
          height={532}
          className="pt-16"
        />
        <div>
          <h3 className="text-6xl text-white font-bungeeOutline">
            faça parte <span className="font-bebasNeue">da família</span>
          </h3>
          <p className="text-white mt-7 text-lg">
            Nossa academia tem milhares de clientes satisfeitos com resultados
            surpreendentes. Junte-se a nós e comece a transformar seu corpo
            agora!
          </p>
          <div className="flex gap-12 mt-[70px] text-white">
            <div>
              <h4 className="font-bebasNeue text-6xl">+15</h4>
              <p className="text-lg">Unidades na cidade de São Paulo.</p>
            </div>
            <div>
              <h4 className="font-bebasNeue text-6xl">+2000</h4>
              <p className="text-lg">Alunos matriculados em nossas unidades.</p>
            </div>
            <div>
              <h4 className="font-bebasNeue text-6xl">+100</h4>
              <p className="text-lg">Professores altamente qualificados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
