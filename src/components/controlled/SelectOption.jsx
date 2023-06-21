import React from 'react'

const SelectOption = React.forwardRef(
  ({ label, id, options, ...rest }, ref) => {

    console.log(options)
    return (
      <div className="">
        <div className='text-neutral-400' style={{ fontSize: 14, }}>{label}</div>
        <select
            defaultValue={''}
            className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          {...rest}
          ref={ref}
        >
         {/* {options.map(option =>(
        <option value={option.value}> {option.name}</option>
      )} */}
        </select>
      </div>
    )
  }
)

export default SelectOption
