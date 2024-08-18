'use client'
{/* eslint-disable react/no-unescaped-entities */}
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {

  const path = usePathname()

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md relative z-10'>

      <ul className='hidden md:flex gap-6'>

        <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path=='/home' && 'text-purple-400 font-bold'}`} >
          <Link href='/home'>
            Home
          </Link>
        </li>

        <li className={`hover:text-purple-400 hover:font-bold transition-all cursor-pointer ${path=='/home' && 'text-purple-400 font-bold'}`} >
          <Link href='/pricing'>
            Pricing
          </Link>
        </li>

      </ul>
      <UserButton/>
    </div>
  )
}
