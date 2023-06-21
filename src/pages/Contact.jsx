import Icon from '../components/icon/Icon'
import Label from '../components/controlled/Label'
import BaseInput from '../components/controlled/BaseInput'
import { useForm } from 'react-hook-form'
import account from '../services/api/account'
import { useState } from 'react'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Send contact function
  const sendContact = async (data) => {
    console.log(errors)
    setLoading(true)
    const { isError, response, error } = await account.updateAccount(data)
    if (!isError) {
      console.log(response)
    } else {
      setError(error.toString())
    }
    setLoading(false)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 text-xs font-body w-[95%] max-w-[1650px] leading-6">
      {/* Breadcrumb */}
      <ul className="flex mt-6 mb-11 leading-normal text-gray-2 space-x-3 ">
        <li>
          <a href="#">
            <i className="fa fa-home ml-2  hover:text-blue-3"></i>
          </a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="8"></Icon>
        </li>
        <li className=" hover:text-primary">
          <a href="#">Page</a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="9"></Icon>
        </li>
        <li className="text-primary text-sm">
          <a href="/contact_us">Contact Us</a>
        </li>
      </ul>
      <div className="">
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8442639328655!2d-71.10008329902021!3d42.34584359264178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63dc43ccb%3A0xa15d5aa87d0f0c12!2s4+Yawkey+Way%2C+Boston%2C+MA+02215!5e0!3m2!1sen!2s!4v1475081210943"
          width="100%"
          height="350"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 ">
        <div className="">
          <h3 className="text-lg py-5 font-medium mb-3">Your Store</h3>
          <address className="font-normal not-italic leading-[1.4285714] ">
            <div className="mb-4">
              <div className="pr-3 float-left text-xl">
                <i className="fa fa-home"></i>
              </div>
              <div className="">
                My Company, 42 avenue des Champs Elysées 75000 Paris France
              </div>
            </div>
            <div className="mb-4">
              <div className="pr-3 float-left text-xl">
                <i className="fa fa-phone"></i>
              </div>
              <div className="">Phone : 0123456789</div>
            </div>
            <div className="leading-6">
              Maecenas euismod felis et purus consectetur, quis fermentum
              velition. Aenean egestas quis turpis vehicula.Maecenas euismod
              felis et purus consectetur, quis fermentum velition. Aenean
              egestas quis turpis vehicula.It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English.
            </div>
          </address>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(sendContact)}>
            <h3 className="text-lg py-5 font-medium mb-3">Contact Form</h3>
            <div className="sm:flex mb-4 sm:space-x-4 ">
              <Label
                name="Your Name"
                required={true}
                className="text-xs"
              ></Label>
              <div className="w-full">
                <BaseInput
                  type="text"
                  sm="false"
                  {...register('name', { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-400 mt-2 text-xs">
                    Name is required
                  </span>
                )}
              </div>
            </div>
            <div className="sm:flex mb-4 sm:space-x-4 ">
              <Label
                name="E-Mail Address"
                required={true}
                className="text-xs"
              ></Label>
              <div className="w-full">
                <BaseInput
                  type="text"
                  sm="false"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 mt-2 text-xs">
                    Enail is required
                  </span>
                )}
              </div>
            </div>
            <div className="sm:flex mb-4 sm:space-x-4">
              <Label name="Enquiry" required={true} className="text-xs"></Label>
              <textarea
                className="block h-auto resize-none w-full px-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                rows="10"
                {...register('enquiry', { required: true })}
              ></textarea>
            </div>

            <div className="float-right">
              <button
                type="submit"
                className="bg-gray-600 text-white text-sm font-normal leading-[1.42857143] cursor-pointer px-5 py-2.5 rounded-[3px] hover:bg-blue-800 focus:border-blue-300 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
