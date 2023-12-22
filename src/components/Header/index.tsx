'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import { Button } from '../Button'
import React from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isHoverAbout, setIsHoverAbout] = React.useState(false)
  const [isHoverPrice, setIsHoverPrice] = React.useState(false)
  const [isHoverService, setIsHoverService] = React.useState(false)
  const [isHoverEquipment, setIsHoverEquipment] = React.useState(false)

  return (
    <>
      <header
        className="
      flex
      items-center
      md:justify-between
      pt-4
      font-bebasNeue
      xl:text-2xl
      text-white
      px-20
      md:px-10 max-sm:px-5
      max-sm:justify-between
      "
      >
        <div
          className="cursor-pointer w-8 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="h-[2px] block w-full bg-white mb-1" />
          <span className="h-[2px] block w-full bg-white mb-1" />
          <span className="h-[2px] block w-full bg-white mb-1" />
        </div>
        <div className="max-sm:max-w-[50px]">
          <Link href="/">
            <Image src={Logo} alt="Logo Robust" />
          </Link>
        </div>

        <div className="flex items-center gap-7 max-sm:hidden">
          <Link
            href="#"
            className="relative"
            onMouseEnter={() => setIsHoverAbout(true)}
            onMouseLeave={() => setIsHoverAbout(false)}
          >
            Sobre
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-white transition-all duration-300 overflow-hidden ${
                isHoverAbout ? 'w-4' : 'w-0'
              }`}
            ></span>
          </Link>
          <Link
            href="#"
            className="relative"
            onMouseEnter={() => setIsHoverService(true)}
            onMouseLeave={() => setIsHoverService(false)}
          >
            Serviços
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-white transition-all duration-300 overflow-hidden ${
                isHoverService ? 'w-4' : 'w-0'
              }`}
            ></span>
          </Link>
          <Link
            href="#"
            className="relative"
            onMouseEnter={() => setIsHoverPrice(true)}
            onMouseLeave={() => setIsHoverPrice(false)}
          >
            Preços
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-white transition-all duration-300 overflow-hidden ${
                isHoverPrice ? 'w-4' : 'w-0'
              }`}
            ></span>
          </Link>
          <Link
            href="#"
            className="relative"
            onMouseEnter={() => setIsHoverEquipment(true)}
            onMouseLeave={() => setIsHoverEquipment(false)}
          >
            Equipamentos
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-white transition-all duration-300 overflow-hidden ${
                isHoverEquipment ? 'w-4' : 'w-0'
              }`}
            ></span>
          </Link>
          <Button childrean="Registres-se" />
        </div>
      </header>
      <div
        className={
          isOpen
            ? 'text-center text-white font-bebasNeue bg-bgSecundary bg-opacity-60 pt-2 mt-2 md:hidden transition-all duration-300'
            : 'max-sm:hidden md:hidden transition-all duration-300'
        }
      >
        <Link href="#" className="block pb-1 border-b-[1px]">
          Sobre
        </Link>
        <Link href="#" className="block py-1 border-b-[1px]">
          Serviços
        </Link>
        <Link href="#" className="block py-1 border-b-[1px]">
          Preços
        </Link>
        <Link href="#" className="block py-1 border-b-[1px]">
          Equipamentos
        </Link>
        <button
          className="relative
            transition
            ease-in-out
            delay-150
            hover:-translate-y-1
            hover:scale-110
            duration-300
            font-bebasNeue
            mt-1
            "
        >
          <svg
            width="100"
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
          <span className="absolute top-3 left-4 text-base text-white">
            registre-se
          </span>
        </button>
      </div>
    </>
  )
}
