import React from 'react'

export default function SearchInput() {
  return (
    <div className='w-full hidden lg:flex border tm-base rounded bg-gray-400'>
      <input
        className='p-1.5 px-3 w-full rounded-l tm-base'
        placeholder='Quick search...'
        type='text'
      />
      <button className='w-12 rounded-r tm-base' type='button'>
        <i className='bx bx-search-alt-2 text-xl' />
      </button>
    </div>
  )
}
