import React from 'react'
import DatePicker from 'react-datepicker'

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import RadioBox from '../components/controlled/RadioBox'
import Label from '../components/controlled/Label'
import BaseInput from '../components/controlled/BaseInput'

import 'react-datepicker/dist/react-datepicker.css'
import '../App.css'

export default function ProductReturn() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [reason, setReason] = useState('')
  const [openStatus, setStatus] = useState('no')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [datePickerIsOpen, setdatePickerIsOpen] = useState(false)
  const [date, setDate] = useState('')
  const handleReturn = async (data) => {}
  const handleChange = () => {}
  return (
    <div
      className="overflow-visible box-border text-gray-400 p-0 leading-6 text-sm justify-center"
      style={{ width: 95 + '%', margin: '0 auto' }}
    >
      <ul className="flex list-none my-6 leading-normal rounded bg-transparent p-0 space-x-3 w-full ">
        <li className="relative py-0">
          <Link to="#">
            <i className="fa fa-home ml-2 text-gray-400 hover:text-blue-2"></i>
          </Link>
        </li>
        <li>
          <i className="fa fa-angle-right text-gray-400"></i>
        </li>

        <li className="text-primary">
          <Link to="#">Return</Link>
        </li>
      </ul>
      <div className="w-full text-gray-600 bg-transparent my-3 mx-0 rounded list-none box-border flex gap-8 p-0 min-h-fit">
        <div
          className="mb-2 float-left relative sm:w-[79 '%'] w-full"
          style={{ minHeight: 1 + 'px', margin: '0 auto' }}
        >
          {/* main page start */}
          <div className="w-full">
            <h2 className="text-gray-700 font-normal ">Product Returns</h2>
            <p className="mt-2 text-xs">
              Please complete the form below to request product returns.
            </p>
            <h2 className="mt-8 mb-2">Order information</h2>
            <hr className="mb-6"></hr>
            {/* PERSONAL DETAILS */}
            <form onSubmit={handleSubmit(handleReturn)}>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  required={true}
                  className="mt-4"
                  name="First Name"
                ></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    placeholder="First Name"
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-red-400 mt-2 text-xs">
                      First name is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  required={true}
                  className="mt-4"
                  name="Last Name"
                ></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    placeholder="Last Name"
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-xs mt-2">
                      Last name is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label required={true} className="mt-4" name="E-mail"></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    placeholder="E-mail"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-2">
                      Email is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  required={true}
                  className="mt-4"
                  name="Telephone"
                ></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    type="text"
                    placeholder="Telephone"
                    {...register('telephone', { required: true })}
                  />
                  {errors.telephone && (
                    <span className="text-red-400 text-xs mt-2">
                      Telephone is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label required={true} className="mt-4" name="Order ID"></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    type="text"
                    placeholder="Order ID"
                    {...register('orderID', { required: true })}
                  />
                  {errors.orderID && (
                    <span className="text-red-400 text-xs mt-2">
                      Order ID is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label className="mt-4" name="Order Date"></Label>
                <div className="flex w-full mr-4">
                  <DatePicker
                    selected={date}
                    name="date"
                    className="block w-[420px] md:w-[270px]  h-9 px-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-l-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    dateFormat="yyyy-MM-dd"
                    placeholderText={'Order Date'}
                    onClickOutside={() => {
                      setdatePickerIsOpen((prev) => !prev)
                    }}
                    open={datePickerIsOpen}
                    onSelect={(date) => {
                      setdatePickerIsOpen((prev) => !prev)
                      setDate(date)
                    }}
                    {...register('date')}
                  />

                  <button
                    className="leading-normal border-collapse rounded-l-none -ml-[1px] justify-self-end inline-block mt-1 hover:bg-primary hover:text-white h-9 rounded-r text-sm border border-[#ccc] text-[#333] border-solid
                    cursor-pointer align-middle whitespace-nowrap text-center font-normal py-[6px] px-3 box-border"
                    type="button"
                    onClick={() => {
                      setDate(new Date())
                      setdatePickerIsOpen((prev) => !prev)
                    }}
                  >
                    <i className="fa fa-calendar"></i>
                  </button>
                </div>
              </div>
              <h2 className="mt-8 mb-2">Product Information</h2>
              <hr className="mb-6"></hr>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  required={true}
                  className="mt-4"
                  name="Product Name"
                ></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    placeholder="Product Name"
                    {...register('productName')}
                  />
                  {errors.productName && (
                    <span className="text-red-400 text-xs mt-2">
                      Product name is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  required={true}
                  className="mt-4"
                  name="Product code"
                ></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    placeholder="Product Code"
                    {...register('productCode', { required: true })}
                  />
                  {errors.productCode && (
                    <span className="text-red-400 text-xs mt-2">
                      Product code is required
                    </span>
                  )}
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label className="mt-4" name="Quantity"></Label>
                <span className="flex flex-col w-full">
                  <BaseInput
                    type="text"
                    value={1}
                    placeholder="Quantity"
                    {...register('quantity')}
                  />
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  className="inline-block max-w-full text-right"
                  style={{ width: 16.6667 + '%' }}
                  required={true}
                  name="Reason for Return"
                ></Label>
                <div className="flex flex-col gap-4 w-full mt-3">
                  <RadioBox
                    selected={reason}
                    setter={setReason}
                    value="deadOnArrival"
                    title="Dead On Arrival"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                  <RadioBox
                    value="orderError"
                    selected={reason}
                    setter={setReason}
                    title="Order Error"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                  <RadioBox
                    selected={reason}
                    setter={setReason}
                    value="wrongItem"
                    title="Received Wrong Item"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                  <RadioBox
                    selected={reason}
                    setter={setReason}
                    value="other"
                    title="Other"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                </div>
              </div>

              <div className="md:flex mb-4 sm:space-x-4">
                <Label
                  className="mt-4"
                  required={true}
                  name="Product is opened"
                ></Label>
                <span className="flex gap-4 w-full mt-1">
                  <RadioBox
                    selected={openStatus}
                    setter={setStatus}
                    value="yes"
                    title="Yes"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                  <RadioBox
                    selected={openStatus}
                    setter={setStatus}
                    value="no"
                    title="No"
                    onChange={handleChange}
                    {...register('reason', { required: true })}
                  />
                </span>
              </div>
              <div className="md:flex mb-4 sm:space-x-4">
                <Label className="mt-4" name="other datails"></Label>
                <span className="flex gap-4 w-full mt-1">
                  <textarea
                    className="px-3 mb-5 resize-none overflow-auto m-0 border-solid text-xs
                    border-gray-1 bg-none block h-auto w-full py-1 transition duration-15 
                    ease-in-out border rounded shadow-sm focus:shadow-blue-300 focus:outline-none 
                     focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    id="input-comment"
                    placeholder="Other details"
                    name="comment"
                    rows={10}
                  ></textarea>
                </span>
              </div>
              <div className="mb-10 flex justify-between space-x-2 text-m">
                <button
                  type="back"
                  value="back"
                  className="bg-[#555] px-5 h-10 hover:bg-primary rounded-sm font-thin text-sm text-white py-0.5"
                >
                  Back
                </button>
                <button
                  type="submit"
                  value="Return"
                  className=" bg-blue-1 hover:bg-blue-2 border-blue-2 px-5 h-10 font-thin text-sm ml-4 text-white py-0.5"
                >
                  Submit
                </button>
                {loading && (
                  <i
                    className="fa fa-circle-o-notch animate-spin"
                    style={{ fontSize: 14 }}
                  />
                )}
              </div>
            </form>
          </div>
          {/* main page end */}
        </div>
        <div
          className="relative sm:w-1/4 hidden md:block text-gray-2"
          style={{ margin: '0 auto', minHeight: 1 + 'px' }}
        >
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
