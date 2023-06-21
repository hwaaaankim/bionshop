import Icon from '../components/icon/Icon'
import CheckBox from '../components/controlled/CheckBox'
import Label from '../components/controlled/Label'
import BaseInput from '../components/controlled/BaseInput'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import account from '../services/api/account'

function Register() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleRegistration = async (data) => {
    setLoading(true)
    // let formData = new FormData()
    // formData.append('u', email)
    // formData.append('password', password)
    if (data.password !== data.repeat_password) {
      setError('Passwords do not much')
      return
    }
    const { isError, resonse, error } = await account.register(data)
    if (!isError) {
      console.log(response)
    } else {
      setError(error.toString())
    }
    setLoading(false)
  }

  return (
    <div className="sm:mx-10 mx-3 my-4 pb-10">
      <ul className="flex flex-row mb-4 text-gray-400">
        <Icon className="mt-1.5" size="12" id="home"></Icon>
        <li>
          <a href="/"></a>
        </li>
        <Icon className="mt-2 mx-2" id="chevronRight" size="10"></Icon>
        <li>
          <a href="/account">Account</a>
        </li>
        <Icon className="mt-2 mx-2" id="chevronRight" size="10"></Icon>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
      <h2 className="text-gray-700 font-normal ">Register Account</h2>
      <p className="mt-2 text-xs">
        If you already have an account with us, please login at{' '}
        <a href="/login">the login page.</a>{' '}
      </p>
      <h2 className="mt-8 mb-2">Your Personal Details</h2>
      <hr className="mb-6"></hr>
      {/* PERSONAL DETAILS */}
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Firstname"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="firstname"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-400 mt-2 text-xs">
                Firstname is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Lastname"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="lastname"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-400 text-xs mt-2">
                Lastname is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Email"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="email"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-2">
                Email is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Telephone"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              type="number"
              placeholder="telephone"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('telephone', { required: true })}
            />
            {errors.telephone && (
              <span className="text-red-400 text-xs mt-2">
                Telephone is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label className="mt-4" name="Fax"></Label>
          <input
            type="number"
            className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
            {...register('fax')}
          />
        </div>
        <h2 className="mt-8 mb-2">Your Address</h2>
        <hr className="mb-6"></hr>
        {/* <Address></Address> */}
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Company"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="company"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('company')}
            />
            {errors.company && (
              <span className="text-red-400 text-xs mt-2">
                Company is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Address 1"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="address"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('address1', { required: true })}
            />
            {errors.address1 && (
              <span className="text-red-400 text-xs mt-2">
                Address is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label className="mt-4" name="Address 2"></Label>
          <input
            placeholder="address 2"
            className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
            {...register('address2', { required: true })}
          />
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="City"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="city"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('city', { required: true })}
            />
            {errors.city && (
              <span className="text-red-400 text-xs mt-2">
                City is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Postcode"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              placeholder="Firstname"
              type="number"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs"
              {...register('postcode', { required: true })}
            />
            {errors.postcode && (
              <span className="text-red-400 text-xs mt-2">
                Postcode is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="State"></Label>
          <span className="flex flex-col w-full">
            <select
              className="w-full focus-within:border-2 pl-3 border text-xs border-gray-300 rounded py-2 pr-5"
              {...register('state', { required: true })}
            >
              <option selected disabled>
                Select your state
              </option>
              <option value="North Chungcheong">North Chungcheong</option>
              <option vaue="South Chungcheong">South Chungcheong</option>
              <option value="Gangwon, Gyeonggi">Gangwon, Gyeonggi</option>
              <option value="North Gyeongsang">North Gyeongsang</option>
              <option value="South Gyeongsang">South Gyeongsang</option>
              <option value="North Jeolla">North Jeolla</option>
              <option value="South Jeolla">South Jeolla</option>
              <option value="Jeju">Jeju</option>
            </select>
          </span>
          {errors.state && (
            <span className="text-red-400 text-xs mt-2">State is required</span>
          )}
        </div>
        <h2 className="mt-4 mb-2">Your Password</h2>
        <hr className="mb-6"></hr>
        {/* <Password></Password> */}
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label required={true} className="mt-4" name="Password"></Label>
          <span className="flex flex-col w-full">
            <input
              type="password"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-red-400 text-xs mt-2">
                Password is required
              </span>
            )}
          </span>
        </div>
        <div className="sm:flex mb-4 sm:space-x-4">
          <Label
            required={true}
            className="mt-4"
            name="Repeat Password"
          ></Label>
          <span className="flex flex-col w-full">
            <input
              type="password"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm"
              {...register('repeat_password', { required: true })}
            />
            {errors.repeat_password && (
              <span className="mt-2 text-red-600 text-xs">
                Confirm your password
              </span>
            )}
          </span>
        </div>
        <h2 className="mt-4 mb-2">Newsletter</h2>
        <hr className="mb-6"></hr>
        {/* <NewsLetter></NewsLetter> */}
        <div className="sm:flex mb-4 sm:space-x-4">
          <span>Subscribe</span>
          <div className="space-x-4">
            <input
              type="radio"
              value="yes"
              className="outline-none focus-within:border-2 pl-3  border border-gray-300 rounded py-2  text-sm"
              {...register('newsletter', { required: true })}
            />{' '}
            Yes
            <input
              type="radio"
              value="no"
              className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2  text-sm"
              {...register('newsletter', { required: true })}
            />{' '}
            No
          </div>
        </div>
        <div className="sm:flex sm:float-right space-x-2 text-m">
          <span className='w-full flex items-center'>
            <p className='mr-1'>I have read and agree to the<a href="/something">Pricing Tables</a></p>
            <CheckBox></CheckBox>
          </span>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            type="submit"
            value="Register"
            className="-mr-8 bg-blue-2 px-5 h-10 font-thin text-sm ml-4 text-white py-0.5"
          >
            Register
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
  )
}

export default Register
