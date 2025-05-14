import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <nav className='flex justify-between items-center max-w-2xl mx-auto px-4 py-3 md:px-0'>
        <Link href="/"><h1 className='text-2xl md:text-4xl font-bold'>SK-<span className='text-primary'>Blog</span></h1></Link>
        <ModeToggle/>
    </nav>
  )
}

export default Header
