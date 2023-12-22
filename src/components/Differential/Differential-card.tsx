import Image from 'next/image'
import Arrow from '../../../public/assets/Arrow.png'
import React from 'react'

export type Props = {
  title: string
  description: string
  button?: string
  src: string
}

export async function DifferentialCard({
  title,
  description,
  button,
  src
}: Props) {
  return (
    <div className="w-80 p-6 flex flex-col hover:bg-bgSecundary group max-sm:text-center max-sm:justify-center max-sm:items-center">
      <img src={src} alt={title} className="max-h-20 max-w-[80px]" />
      <h4 className="xl:text-3xl max-sm:text-lg text-white font-bebasNeue my-3">
        {title}
      </h4>
      <p className="xl:text-lg max-sm:text-base text-white mb-5 max-w-[274px]">
        {description}
      </p>
      <div className="mt-auto">
        <button
          className="
            relative
            font-bebasNeue
            transition
            ease-in-out
            delay-150
            hover:-translate-y-1
            hover:scale-110
            duration-300
            "
        >
          <svg
            width="152"
            height="44"
            viewBox="0 0 152 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H126.5L139.25 11L145.625 16.5L152 22V44H0V0Z"
              fill="#222222"
              className="group-hover:fill-secondary"
            />
          </svg>
          <span className="absolute top-2 left-1 max-w-[85px] max-h-[38px] leading-none text-base text-white">
            {button}
          </span>

          <Image
            src={Arrow}
            alt="Arrow button"
            className="inline absolute top-3 right-5 max-w-[18px]"
          />
        </button>
      </div>
    </div>
  )
}
