import React from 'react'
import { useRef } from 'react'

const CheckBox = React.forwardRef(({ value, setter, title }, ref) => {
  return (
    <div className="flex space-x-2 items-baseline py-5 cursor-pointer">
      <input
        type="checkbox"
        value={value}
        onClick={() => (checked = !checked)}
        className="w-3 h-3"
        ref={ref}
      />
      <div className="text-sm text-gray-500">{title}</div>
    </div>
  )
})

export default CheckBox
