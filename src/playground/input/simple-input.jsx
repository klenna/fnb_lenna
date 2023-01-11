/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CodeBlock from 'components/common/code-block'
import Input from 'components/form/input'
import { useForm } from 'react-hook-form'
import Button from 'components/common/button'
import { Fragment, useState } from 'react'
import clsx from 'clsx'

const codeStr = (
  label,
  errorMessage,
  placeholder,
  disabled,
  error,
  required,
) => `import Input from 'components/input'
import { useForm } from 'react-hook-form'

function SimpleInput() {
  const { register } = useForm()

  return(
    <Input 
      name='input1' 
      register={register}
      ${ `label='${label}'`}
      ${`errorMessage='${errorMessage}'`}
      ${`placeholder='${placeholder}'`}
      ${`disabled={${disabled}}`}
      ${`error={${error}}`}
      ${`required={${required}}`}
    />
  )
}

export default SimpleInput`

export default function SimpleInput() {
  const [stringProps, setStringProps] = useState({
    label: '',
    errorMessage: '',
    placeholder: '',
  })

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [required, setRequired] = useState(false)

  const { register, setError: makeError } = useForm()

  const toggleDisabled = () => setDisabled((old) => !old)
  const toggleError = () => {
    if (!error) {
      makeError('input1', { type: 'custom', message: stringProps.errorMessage })
    }
    setError((old) => !old)
  }
  const toggleRequired = () => setRequired((old) => !old)

  const onChangeStringProps = (e) => {
    const { name, value } = e.target
    setStringProps(
      (old) => ({
        ...old,
        [name]: value,
      }),
    )
  }

  return (
    <Fragment>
      <div className='grid grid-cols-2 gap-8'>
        <div>
          {/* <code className='block mb-4 text-xs'>
          Untuk dapat menggunakan komponen <strong className='text-primary'>Input</strong> dibutuhkan minimal 2 props.
          Yaitu <strong className='text-primary'>register</strong> dan <strong className='text-primary'>name</strong>.
          Dimana props tersebut dibutuhkan untuk registrasi di <i>react-hook-form.</i>
        </code> */}
          <h4 className='mb-4 text-2xl text-primary'>Demo</h4>
          <div className='flex flex-col'>
            <Input
              disabled={disabled}
              errorMessage={stringProps.errorMessage}
              isError={error}
              label={stringProps.label}
              name='input1'
              placeholder={stringProps.placeholder}
              register={register}
              required={required}
            />
            <div className='text-xs mt-4'>
              <CodeBlock
                code={
                  codeStr(
                    stringProps.label,
                    stringProps.errorMessage,
                    stringProps.placeholder,
                    disabled,
                    error,
                    required,
                  )
                }
              />
            </div>
          </div>
        </div>

        {/**
       * Below form is controling code block & input demo
       */}

        <div className='bg-gray-900 dark:bg-gray-700 rounded p-4'>
          <h4 className='mb-4 text-xl text-white'>Props Editor</h4>
          <div className='flex flex-col gap-4'>
            <input
              className='py-1 px-2 bg-gray-700 dark:bg-gray-800 w-full'
              name='label'
              placeholder='Label'
              type='text'
              value={stringProps.label}
              onChange={onChangeStringProps}
            />
            <input
              className='py-1 px-2 bg-gray-700 dark:bg-gray-800 w-full'
              name='errorMessage'
              placeholder='Error Message'
              type='text'
              value={stringProps.errorMessage}
              onChange={onChangeStringProps}
            />
            <input
              className='py-1 px-2 bg-gray-700 dark:bg-gray-800 w-full'
              name='placeholder'
              placeholder='Placeholder'
              type='text'
              value={stringProps.placeholder}
              onChange={onChangeStringProps}
            />
            <div className='flex gap-4 text-white items-center'>
              <label>Disabled</label>
              <div className='flex'>
                <Button
                  className={clsx('py-1 px-2', !disabled ? 'bg-primary' : 'bg-gray-800')}
                  text='false'
                  onClick={toggleDisabled}
                />
                <Button
                  className={clsx('py-1 px-2', disabled ? 'bg-primary' : 'bg-gray-800')}
                  text='true'
                  onClick={toggleDisabled}
                />
              </div>
            </div>
            <div className='flex gap-4 text-white items-center'>
              <label>Error</label>
              <div className='flex'>
                <Button
                  className={clsx('py-1 px-2', !error ? 'bg-primary' : 'bg-gray-800')}
                  text='false'
                  onClick={toggleError}
                />
                <Button
                  className={clsx('py-1 px-2', error ? 'bg-primary' : 'bg-gray-800')}
                  text='true'
                  onClick={toggleError}
                />
              </div>
            </div>
            <div className='flex gap-4 text-white items-center'>
              <label>Required</label>
              <div className='flex'>
                <Button
                  className={clsx('py-1 px-2', !required ? 'bg-primary' : 'bg-gray-800')}
                  text='false'
                  onClick={toggleRequired}
                />
                <Button
                  className={clsx('py-1 px-2', required ? 'bg-primary' : 'bg-gray-800')}
                  text='true'
                  onClick={toggleRequired}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <code className='text-sm italic'>
          <ul className='list-disc'>
            <li>
              <i>Error message will only appear when props isError & errorMessage is provided</i>
            </li>
          </ul>
        </code>
      </div>
    </Fragment>
  )
}
