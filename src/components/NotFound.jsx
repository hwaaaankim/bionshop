import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility as toggleHeader } from '../store/slices/headerSlice'
import { toggleVisibility as toggleFooter } from '../store/slices/footerSlice'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const hideFooterNHeader = () => {
    dispatch(toggleHeader({ hidden: true }))
    dispatch(toggleFooter({ hidden: true }))
  }
  const showFooterNHeader = () => {
    dispatch(toggleHeader({ hidden: false }))
    dispatch(toggleFooter({ hidden: false }))
  }
  useEffect(() => {
    hideFooterNHeader()
    return showFooterNHeader
  }, [])

  return (
    <div className="py-10 flex justify-center items-start bg-gray-100 h-screen">
      <div className="space-y-2 w-2/5 bg-white p-5 rounded-lg">
        <div className="font-light text-red-600 uppercase text-xl">
          Oops! Page Not found
        </div>
        <div className="text-sm text-gray-600">
          Sorry, we couldn't find the page you're looking for. Please check the
          URL to make sure it's correct. You can also click the button below to
          go to the home page
        </div>
        <div
          className="inline-block py-1 px-6 bg-gray-200 rounded cursor-pointer hover:opacity-75"
          onClick={() => navigate('/')}
        >
          Go home
        </div>
      </div>
    </div>
  )
}

export default NotFound
