import React from 'react'

const BaseInput = React.forwardRef(
  ({ type = 'text', label, placeholder, ...rest }, ref) => {
    return (
      <div className="">
        <div className='text-neutral-500' style={{ fontSize: 14, }}>{label}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="block h-8 w-full px-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          {...rest}
          ref={ref}
        />
      </div>
    )
  }
)

export default BaseInput
