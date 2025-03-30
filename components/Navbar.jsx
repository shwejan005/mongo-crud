import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='h-12 flex justify-center gap-32 items-center border-b'>
      <Link href={'/'} className='text-3xl'>CRUD APP</Link>
      <Link href={'/add-topic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar