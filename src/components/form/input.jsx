import React from 'react'
import PropTypes from 'prop-types'
import { useDebouncedCallback } from 'use-debounce'
import clsx from 'clsx'

// eslint-disable-next-line max-len
const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

/**
 * Parent component:
 *  -components/form/module/sign.jsx
 *
 * @param register func = Fungsi React Hook Form untuk registrasi input form
 * @param label string = Label dari input form
 * @param name string = Unik id untuk registrasi input form
 * @param errorMessage string = Pesan yang akan ditampilkan jika validasi tidak sesuai
 * @param isError bool = State yang menentukan apakah input form valid atau tidak
 * @param placeholder string = Placeholder pada input form
 * @param disabled bool = State yang menentukan apakah input form dapat digunakan atau tidak
 *
 */

export default function Input({
  register = () => {},
  label = 'default label',
  name = 'default name',
  errorMessage,
  isError,
  placeholder,
  disabled,
  __test__,
  type = 'text',
  required,
  onFocus = () => {},
  onBlur = () => {},
  onEnter = () => {},
  onEsc = () => {},
  defaultValue,
  value,
}) {
  const isEmail = type === 'email'

  const onKeyUp = (e) => {
    if (e.keyCode === 13) onEnter()
    if (e.keyCode === 27) onEsc()
  }

  const debounceOnKeyUp = useDebouncedCallback(onKeyUp, 500)

  return (
    <React.Fragment>
      <label>
        {label} {required && <span className='text-red-400'>&nbsp;*</span>}
        <input
          data-testid={__test__}
          {
            ...register(name, {
              required: required ? errorMessage : false,
              pattern: isEmail ? re : undefined,
            })
          }
          className={clsx(
            'w-full bg-slate-300 px-2 py-1.5 mt-1 rounded dark:text-gray-100 dark:bg-gray-700',
            disabled && 'opacity-70',
          )}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyUp={debounceOnKeyUp}
        />
      </label>
      <p
        className='mb-2 text-sm text-red-400 mt-2'
        data-testid={`erm-${__test__}`}
      >{isError ? errorMessage : ''}
      </p>
    </React.Fragment>
  )
}

Input.propTypes = {
  register: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  __test__: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'password', 'email',
  ]),
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onEsc: PropTypes.func,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
}
