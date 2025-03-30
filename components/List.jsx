import React from 'react'
import Remove from './Remove'
import Link from 'next/link'
import { Edit } from 'lucide-react'


function List() {
  return (
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
      <div>
        <h2 className='font-bold text-2xl'>Title</h2>
        <h4>Description</h4>
      </div>
      <div className='flex gap-2'>
        <Remove />
        <Link href={'/edit-topic'}><Edit /></Link>
      </div>
    </div>
  )
}

export default List