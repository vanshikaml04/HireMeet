import React from 'react'
import { ModeToggle } from './ModeToggle'
import { UserRoundCheck } from 'lucide-react'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import DashboardBtn from './DashboardBtn'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <div className='flex h-16 items-center px-4 container mx-auto'>
            {/* LEFT SIDE* */}
            <Link href='/' className='flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity'>
            <UserRoundCheck className='size-8 text-orange-500' />
<span className='bg-gradient-to-r from-orange-500 to-rose-400 bg-clip-text text-transparent'>HireMeet</span>



            </Link>

            {/* Right side* */}
            <SignedIn>
                <div className='flex items-center space-x-4 ml-auto'>
                    <DashboardBtn/>
                    <ModeToggle />
                    <UserButton/>

                </div>
            </SignedIn>
        </div>

    </nav>
  )
}

export default Navbar