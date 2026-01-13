import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
          <img src="/logo.svg" className='h-20' />
        </Link>
        <div className="flex gap-4">
          <Button variant="outline">Login</Button>
        </div>
      </nav>
    </>
  )
}

export default Header