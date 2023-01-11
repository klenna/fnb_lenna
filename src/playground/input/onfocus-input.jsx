/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CodeBlock from 'components/common/code-block'
import Input from 'components/form/input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const codeStr = () => `import Input from 'components/input'
import { useForm } from 'react-hook-form'
import React from 'react'

function OnfocusInput() {
  const { register } = useForm()
  const [isFocused, setIsFocused] = React.useState(false)

  return(
    <Fragment>
      <div>is Focused? {isFocused ? 'Yes' : 'No'}</div>
      <Input 
        name='input1' 
        label='Some Label'
        register={register}
        placeholder='some placeholder'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Fragment>
  )
}

export default OnfocusInput`

export default function OnfocusInput() {
  const { register } = useForm()
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='grid grid-cols-2 gap-8'>
      <div>
        {/* <code className='block mb-4 text-xs'>
          Untuk dapat menggunakan komponen <strong className='text-primary'>Input</strong> dibutuhkan minimal 2 props.
          Yaitu <strong className='text-primary'>register</strong> dan <strong className='text-primary'>name</strong>.
          Dimana props tersebut dibutuhkan untuk registrasi di <i>react-hook-form.</i>
        </code> */}
        <h4 className='mb-4 text-2xl text-primary'>onFocus & onBlur</h4>
        <div className='flex flex-col'>
          <div className='mb-2 font-titillium font-bold text-white'>is Focused? {isFocused ? 'Yes' : 'No'}</div>
          <Input
            label='Some Label'
            name='input1'
            placeholder='some placeholder'
            register={register}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          <div className='text-xs mt-4'>
            <CodeBlock
              code={
                codeStr()
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
