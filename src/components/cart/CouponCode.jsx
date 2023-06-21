import { useForm } from "react-hook-form";
import BaseInput from "../controlled/BaseInput";
import { Disclosure, Transition } from '@headlessui/react'

function CouponCode() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const applyCoupon = async (data) => {
        console.log(data)
        // await cart.applyCoupon(data)
    }

    return (
        <Disclosure>
        <div className="w-full float-left relative box-border text-xs leading-5 mt-4">
            <div className="box-border pb-4 bg-white border border-solid px-0 shadow-sm inline-block w-full rounded mb-5">
                <Disclosure.Button className="w-full text-left px-2 py-2 bg-gray-100 border-b-transparent">
                    <h4 className="my-0 text-base font-medium">
                    Use Coupon Code <i className="fa fa-caret-down"></i>
                    </h4>
                </Disclosure.Button>
                <Transition
                    // enter="transition duration-100 fade-in"
                    // enterFrom="transform opacity-0"
                    // enterTo="transform opacity-100"
                    // leave="transition duration-75 fade-out"
                    // leaveFrom="transform  opacity-100"
                    // leaveTo="transform opacity-0"
                >
                <Disclosure.Panel className="text-gray-500 py-0 mx-2 my-0">
                    <div className="flex border-separate relative w-full">
                        <form className="flex mt-2 justify-between w-full" onSubmit={handleSubmit(applyCoupon)}>
                            <span className="mt-3 w-1/3 px-4">Enter your coupon here</span>
                                <div className="w-full">
                                    <BaseInput
                                        className='block h-9 w-full px-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                                        {...register("coupon", { required: true })}
                                        placeholder="Enter your coupon here"
                                    />
                                </div>
                                    <input
                                        type="submit"
                                        className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 px-2 h-9"
                                        value="Apply Coupon"
                                    />
                                {errors.coupon && <span className='text-red-400 mt-2 text-xs'>Please enter coupon code</span>}
                        </form>
                    </div>
                </Disclosure.Panel>
                </Transition>
            </div>
        </div>
    </Disclosure>
    )
}
export default CouponCode