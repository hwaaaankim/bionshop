import React from 'react'

const BaseInput = React.forwardRef(
  ({ type = 'text', label, placeholder, sm = true, ...rest }, ref) => {
    return (
      <div className="">
        <div className="text-neutral-500" style={{ fontSize: 14 }}>
          {label}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className={
            'block w-full px-3 py-' +
            (sm ? 1 : 2) +
            ' mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
          }
          {...rest}
          ref={ref}
        />
      </div>
    )
  }
)

export default BaseInput
