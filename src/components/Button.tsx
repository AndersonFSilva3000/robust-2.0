'use client'

import Arrow from '../../public/assets/Arrow.png'
import Image from 'next/image'

type Props = {
  childrean?: string
  isArrow?: boolean
}

export const Button = ({ childrean, isArrow }: Props) => {
  return (
    <button className="relative hover:opacity-70 transition-all font-bebasNeue">
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
        />
      </svg>
      <span className="absolute top-2 left-6 text-2xl text-white">
        {childrean}
      </span>
      {isArrow && (
        <Image
          src={Arrow}
          alt="Arrow button"
          className="inline absolute top-3 right-7 max-w-[18px]"
        />
      )}
    </button>
  )
}
