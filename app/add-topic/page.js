'use client'
import React from 'react'

function AddTopic() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  function handleSubmit (e) {
    e.preventDefault();
    if (!title || !desc) alert("Please fill all the fields");
  }
  return (
    <form className='flex flex-col gap-2'>
      <input onChange={(e)=> settitle(e.target.value)} className='border border-slate-400 mt-2 p-3 mx-5' type='text' placeholder='Title' required/>
      <input onChange={(e)=> settitle(e.target.desc)} className='border border-slate-400 mt-2 p-3 mx-5' type='text' placeholder='Description' />
      <button className='bg-green-400 text-white p-3 hover:cursor-pointer w-fit mx-auto rounded'>Add Topic</button>
    </form>
  )
}

export default AddTopic