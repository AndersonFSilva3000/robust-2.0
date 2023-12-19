import Image from 'next/image'
import Arrow from '../../../public/assets/Arrow.png'
import React from 'react'

export type Props = {
  title: string
  description: string
  button?: string
  src: string
}

export async function PlansSection({ title, description, button, src }: Props) {
  return (
    <div className="w-80 p-6 flex flex-col hover:bg-bgSecundary group">
      <img src={src} alt={title} className="max-h-20 max-w-[80px]" />
      <h4 className="text-3xl text-white font-bebasNeue my-3">{title}</h4>
      <p className="text-lg text-white mb-5 max-w-[274px]">{description}</p>
      <div className="mt-auto">
        <button
          className="relative hover:opacity-70 transition-all font-bebasNeue"
          id="teste"
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
