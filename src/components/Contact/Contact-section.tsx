'use client'

import Image from 'next/image'
import imgInput from '../../../public/assets/input_contact.png'
import girl from '../../../public/assets/pngwing3.png'
import InputMask from 'react-input-mask'

export function ContactSection() {
  return (
    <section className="bg-bgSecundary xl:px-20 pt-14 pb-[150px] text-white md:px-10 max-sm:px-5 relative">
      <div className="xl:flex md:block">
        <div className="md:text-center xl:text-start">
          <div>
            <h3 className=" xl:text-[82px] font-bebasNeue xl:text-start md:text-center md:text-5xl md:mb-5">
              ENTRE EM CONTATO
            </h3>
            <p className="xl:text-2xl md:text-base">
              Matricule-se agora mesmo! Fale com um de nossos atendentes
            </p>
          </div>
          <div className="flex gap-8 py-8 xl:justify-start md:justify-center max-sm:flex-col">
            <div className="relative">
              <Image src={imgInput} alt="Imagem do input" />
              <input
                type="text"
                placeholder="NOME"
                className="
                  absolute
                  top-[10px]
                  left-1 w-52
                  text-white
                  bg-transparent
                  placeholder:text-white
                  pl-2
                  outline-none
                  "
              />
            </div>
            <div className="relative">
              <Image src={imgInput} alt="Imagem do input" />
              <InputMask
                mask={'(99) 99999-9999'}
                type="text"
                placeholder="TELEFONE"
                className="
                  absolute
                  top-[10px]
                  left-1 w-52
                  text-white
                  bg-transparent
                  placeholder:text-white
                  pl-2
                  outline-none
                  "
              />
            </div>
          </div>
          <button
            className="
            relative
            transition
            ease-in-out
            delay-150
            hover:-translate-y-1
            hover:scale-110
            duration-300
            "
          >
            <svg
              width="234"
              height="42"
              viewBox="0 0 234 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H234H203L234 21.84V42H190.5H0V0Z" fill="#FF3939" />
            </svg>
            <span className="text-lg absolute top-2 left-4 font-bold">
              SOLICITAR CONTATO
            </span>
          </button>
        </div>
        <div>
          <Image
            src={girl}
            alt="Imagem de uma garota treinando"
            className="absolute bottom-0 right-24 xl:block md:hidden max-sm:hidden"
          />
        </div>
      </div>
    </section>
  )
}
