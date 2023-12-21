'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import { Button } from '../Button'

export const Header = () => {
  return (
    <header
      className="
      flex
      items-center
      justify-between
      pt-4
      font-bebasNeue
      xl:text-2xl
      text-white
      px-20
      md:px-10 max-sm:px-5
      "
    >
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo Robust" className="max-sm:max-w-fit" />
        </Link>
      </div>

      <div className="flex items-center gap-7">
        <div className="flex items-center gap-7 max-sm:hidden">
          <Link href="#teste">Sobre</Link>
          <Link href="#">Serviços</Link>
          <Link href="#">Preços</Link>
          <Link href="#">Equipamentos</Link>
        </div>
        <div>
          <Button childrean="Registres-se" />
        </div>
      </div>
    </header>
  )
}
