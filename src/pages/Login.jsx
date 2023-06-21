import { useDispatch } from 'react-redux'
import { setUser, setStatus } from '../store/slices/authSlice'

import { useForm } from 'react-hook-form'
import BaseInput from '../components/controlled/BaseInput'
import { useState } from 'react'
import auth from '../services/api/auth'
import { Link } from 'react-router-dom'

function AccountRegistrationIntro() {
  return (
    <div className="border border-gray-300 flex flex-col justify-between">
      <div className="space-y-5 p-5 my-5 text-gray-600">
        <div className="flex items-center space-x-1">
          <i className="fa fa-file-o" style={{ fontSize: 14 }} />
          <div className="uppercase text-gray-800 text-sm">new customer</div>
        </div>
        <div className="text-sm">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </div>
      </div>

      <div className="flex justify-end p-2 py-3 bg-gray-100">
        <Link to="/register">
          <div className="py-2 px-4 rounded text-white text-sm bg-[#333] hover:bg-primary cursor-pointer">
            Continue
          </div>
        </Link>
      </div>
    </div>
  )
}

function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()

  const handleLogin = async ({ email, password }) => {
    setLoading(true)

    let formData = new FormData()
    formData.append('username', email)
    formData.append('password', password)

    const requestPayload = {
      method: 'post',
      url: 'login',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }
    const { isError, user, error } = await auth.signIn(requestPayload)
    if (!isError) {
      dispatch(setUser({ user }))
      dispatch(setStatus({ signedIn: true }))
    } else {
      setError(error.toString())
    }

    setLoading(false)
  }

  return (
    <div className="border border-gray-300 flex flex-col justify-between">
      <div className="p-5 my-5 text-gray-600 space-y-3">
        <div className="space-y-5">
          <div className="flex items-center space-x-1">
            <i className="fa fa-file-text-o" style={{ fontSize: 14 }} />
            <div className="uppercase text-gray-800 text-sm">
              Returning customer
            </div>
          </div>
          <div className="text-sm font-semibold">I am a returning customer</div>
        </div>

        {error && <div className="text-red-600 text-xs">{error}</div>}
        <div className="space-y-2">
          <div>
            <BaseInput
              label="E-Mail Address"
              sm={false}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                E-Mail Address is required
              </span>
            )}
          </div>

          <div>
            <BaseInput
              type="password"
              label="Password"
              sm={false}
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-2 py-3 bg-gray-100">
        <div
          className="cursor-pointer hover:text-primary"
          style={{ fontSize: 13 }}
        >
          Forgotten Password
        </div>
        <div
          className="py-2 px-4 rounded text-white text-sm flex space-x-2 items-center bg-[#333] hover:bg-primary cursor-pointer"
          onClick={handleSubmit(handleLogin)}
        >
          {loading && (
            <i
              className="fa fa-circle-o-notch animate-spin"
              style={{ fontSize: 14 }}
            />
          )}
          <div>Login</div>
        </div>
      </div>
    </div>
  )
}

export default function Login() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4"
      style={{ width: 95 + '%', margin: '0 auto' }}
    >
      <AccountRegistrationIntro />
      <LoginForm />
    </div>
  )
}
