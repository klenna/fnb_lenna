import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Button({
  onClick,
  text = 'Button',
  className,
  disabled,
  testid,
}) {
  return (
    <button
      className={clsx(className)}
      data-testid={testid}
      disabled={disabled}
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
}
