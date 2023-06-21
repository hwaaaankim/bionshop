import React, { useRef } from 'react'

const RadioBox = React.forwardRef(({ value, setter, title, selected }, ref) => {
  return (
    <div className="flex space-x-1 items-center py-0 cursor-pointer">
      <input
        checked={selected === value}
        type="radio"
        value={value}
        onChange={(event) => setter(event.target.value)}
        className="w-3 h-3"
        ref={ref}
      />
      <div className="text-xs text-gray-500">{title}</div>
    </div>
  )
})
export default RadioBox
