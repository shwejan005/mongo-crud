import { TrashIcon } from 'lucide-react'
import React from 'react'

function Remove() {
  return (
    <button className='text-red-600 hover:cursor-pointer'>
      <TrashIcon size={24} />
    </button>
  )
}

export default Remove