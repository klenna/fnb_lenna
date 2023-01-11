/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Sidebar from 'components/block/sidebar'
import SimpleInput from '../../playground/input/simple-input'

const Header = dynamic(
  () => import('components/block/header'),
  { ssr: false },
)

const property = [
  {
    name: 'register',
    description: 'Fungsi dari <i className=\'text-primary\'>react-hook-form</i> untuk meregistrasi sebuah input',
    type: 'function',
    required: 'true',
  },
  {
    name: 'name',
    description: 'Unik id berupa string untuk menandai sebuah input <i>react-hook-form</i>',
    type: 'string',
    required: 'true',
  },
  {
    name: 'label',
    description: 'Label untuk input',
    type: 'string',
    required: 'false',
  },
  {
    name: 'errorMessage',
    description: 'Pesan error yang akan ditampilkan ketika input tidak sesuai dengan validasi',
    type: 'string',
    required: 'false',
  },
  {
    name: 'isError',
    description: 'State yang menentukan apakah nilai dari input valid atau tidak',
    type: 'boolean',
    required: 'false',
  },
  {
    name: 'placeholder',
    description: 'Placeholder yang akan ditampilkan ketika input kosong',
    type: 'string',
    required: 'false',
  },
  {
    name: 'disabled',
    description: 'State yang menentukan apakah input dapat digunakan atau tidak',
    type: 'boolean',
    required: 'false',
  },
  {
    name: '__test__',
    description: '<strong>data-testid</strong> untuk keperluan unit testing',
    type: 'string',
    required: 'false',
  },
  {
    name: 'type',
    description: 'HTML type dari sebuah input',
    type: 'string',
    required: 'false',
  },
  {
    name: 'required',
    description: 'State yang menentukan apakah input boleh dikosongkan atau tidak',
    type: 'boolean',
    required: 'false',
  },
  {
    name: 'onFocus',
    description: 'Fungsi yang akan dipanggil ketika input di fokus',
    type: 'function',
    required: 'false',
  },
  {
    name: 'onBlur',
    description: 'Fungsi yang akan dipanggil ketika input di blur',
    type: 'function',
    required: 'false',
  },
  {
    name: 'onEnter',
    description: 'Fungsi yang akan dipanggil ketika menekan tombol enter',
    type: 'function',
    required: 'false',
  },
  {
    name: 'onEsc',
    description: 'Fungsi yang akan dipanggil ketika menekan tombol ESC',
    type: 'function',
    required: 'false',
  },
  {
    name: 'defaultValue',
    description: 'Nilai default pada input',
    type: 'string',
    required: 'false',
  },
  {
    name: 'value',
    description: 'Nilai yang dikontrol',
    type: 'string',
    required: 'false',
  },
]

export default function PlaygroundLayout() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <div>
          <Header />
        </div>
        <header className='h-20 w-full sticky top-0 tm-base border-b'>
          sd
        </header>
        <main className='p-8'>
          <h1 className='text-3xl font-bold mb-2'>Input</h1>
          <code>Component for handling user input and collect data.</code>
          <div className='tm-base border rounded p-4 mt-4'>
            <SimpleInput />
          </div>
          <h3 className='mt-8 font-bold'>Component Props</h3>
          <table className='font-normal text-xs w-[70%] mt-2'>
            <thead className='text-left border border-l-0 border-r-0 tm-base'>
              <tr className='text-sky-400'>
                <th className='py-4 px-1'>
                  <code>Props</code>
                </th>
                <th>
                  <code>Description</code>
                </th>
                <th>
                  <code>Type</code>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                property.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <code>{item.name}</code>
                    </td>
                    <td className='py-3 px-1'>
                      <code dangerouslySetInnerHTML={{ __html: item.description }} />
                    </td>
                    <td>
                      <code className='text-primary'>{item.type}</code>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}

PlaygroundLayout.propTypes = {
  // children: PropTypes.node,
}
