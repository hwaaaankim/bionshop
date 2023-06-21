import { forwardRef } from 'react'

const BaseTextArea = forwardRef(
  ({ label, placeholder, required, ...rest }, ref) => (
    <div className="">
      {label && (
        <div className="text-neutral-500" style={{ fontSize: 14 }}>
          <span style={{ color: 'red' }}> {required && '*'} </span>
          {label}
        </div>
      )}
      <textarea
        placeholder={placeholder}
        // onKeyDown={(event) => setter(event.target.value)}
        className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        {...rest}
        ref={ref}
        rows={3}
      />
    </div>
  )
)

export default BaseTextArea
