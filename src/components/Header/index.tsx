'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import { Button } from '@/components/Button'

export const Header = () => {
  return (
    <header className="flex items-center justify-between mt-4 font-bebasNeue text-2xl text-white">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo Robust" />
        </Link>
      </div>

      <div className="flex items-center gap-7">
        <Link href="#">Sobre</Link>
        <Link href="#">Serviços</Link>
        <Link href="#">Preços</Link>
        <Link href="#">Equipamentos</Link>
        <Button childrean="Registres-se" />
      </div>
    </header>
  )
}
