import { PiggyBank } from 'lucide-react'
import React from 'react'

interface LogoProps{
  showPiggyBank: boolean;
}

function Logo({showPiggyBank = true}: { showPiggyBank?: boolean }) {
  return (
    <a href="/" className='flex items-center gap-2'>
        {showPiggyBank &&
        <PiggyBank className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]'/>}
        <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl sm:text-3xl font-bold leading-tight tracking-tighter text-transparent'>Expense - Tracker</p>
    </a>
  )
}

export default Logo
