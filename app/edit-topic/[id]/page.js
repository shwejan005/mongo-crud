import React from 'react'

function EditTopic() {
  return (
    <form>
      <input className='border border-slate-400 mt-2 p-3 mx-5' type='text' placeholder='Title' required/>
      <input className='border border-slate-400 mt-2 p-3 mx-5' type='text' placeholder='Description' />
      <button className='bg-green-400 text-white p-3 hover:cursor-pointer w-fit mx-auto rounded'>Edit Topic</button>
    </form>
  )
}

export default EditTopic