import { useForm } from 'react-hook-form'
import { useState } from 'react'
import CheckBox from '../controlled/CheckBox'
import Label from '../controlled/Label'
import BaseInput from '../controlled/BaseInput'

export default function GiftVoucherForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors }, } = useForm()

  return (
    <div className="text-left">
      <form>
        <div className="md:flex mb-4 md:space-x-4">
          <Label required={true} className="mt-4 text-[12px] " name="Recipient's Name"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              md={false}
              {...register('recipientName', { required: true })}
            />
            {errors.recipientName && (
              <span className="text-red-400 mt-2 text-xs">
                Recipient's Name is required
              </span>
            )}
          </span>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label required={true} className="mt-4 text-[12px]" name="Recipient's e-mail"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              sm={false}
              {...register('recipientEmail', { required: true })}
            />
            {errors.recipientEmail && (
              <span className="text-red-400 mt-2 text-xs">
                Recipient's e-mail is required
              </span>
            )}
          </span>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label required={true} className="mt-4 text-[12px]" name="Your Name"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              sm={false}
              {...register('yourName', { required: true })}
            />
            {errors.yourName && (
              <span className="text-red-400 mt-2 text-xs">
                Your name is required
              </span>
            )}
          </span>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label required={true} className="mt-4 text-[12px]" name="Your e-mail"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              sm={false}
              {...register('yourEmail', { required: true })}
            />
            {errors.yourEmail && (
              <span className="text-red-400 text-xs mt-2">
                Your email is required
              </span>
            )}
          </span>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label required={true} className="w-full flex-nowrap text-[12px]" name="Gift Certificate Theme"></Label>
          <div className="flex flex-col w-full space-y-2 text-[12px]">
            <span className='flex'>
              <input
                type="radio"
                value="general"
                className='mr-2'
                {...register('certificateTheme', { required: true })}
              />General
            </span>
            <span className='flex'>
              <input
                type="radio"
                value="birthday"
                className='mr-2'
                {...register('certificateTheme', { required: true })}
              />Birthday
            </span>
            <span className='flex'>
              <input
                type="radio"
                value="christmas"
                className='mr-2'
                {...register('certificateTheme', { required: true })}
              />
              Christmas
            </span>
            {errors.certificateTheme && (
              <span className="text-red-400 text-xs mt-2">
                Certificate Theme is required
              </span>
            )}
          </div>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label className="mt-4 text-[12px]" name="Message"></Label>
          <span className="flex flex-col w-full">
            <textarea className="resize-none block w-full px-3 py-2 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" rows="5" cols="40" name="message"></textarea>
            {errors.message && (
              <span className="text-red-400 text-xs mt-2">
                Your message is required
              </span>
            )}
          </span>
        </div>
        <div className="md:flex mb-4 md:space-x-4">
          <Label className="mt-4 text-[12px]" name="Amount"></Label>
          <span className="flex flex-col w-full">
            <BaseInput
              sm={false}
              placeholder='10'
              {...register('amount', { required: true })}
            />
            {errors.amount && (
              <span className="text-red-400 text-xs mt-2">
                Amount is required
              </span>
            )}
          </span>
        </div>
        <div className="w-full mb-10 sm:flex items-center md:space-x-4 text-m">
          <div className='w-full'>
            <span className='flex justify-end items-center text-xs'>
              <p className='mr-1'>I understand that gift certificates are non-refundable.</p>
              <CheckBox {...register('accept', { required: true })}></CheckBox>
            </span>
            {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          </div>

          <div>
            <button
              type="submit"
              value="continue"
              className="w-full bg-blue-2 px-5 h-8 font-thin text-sm text-white focus:outline-none"
            >
              Continue
            </button>
            {loading && (
              <i
                className="fa fa-circle-o-notch animate-spin"
                style={{ fontSize: 14 }}
              />
            )}
          </div>
        </div>
      </form>
    </div >
  )
}