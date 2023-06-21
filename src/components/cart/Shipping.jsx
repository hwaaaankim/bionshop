import { useForm } from "react-hook-form";
import BaseInput from "../controlled/BaseInput";
import { Disclosure, Transition } from '@headlessui/react'
import Label from "../controlled/Label";

function Shipping() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const estimateShipping = async (data) => {
        console.log(data)
        // await cart.applyCoupon(data)
    }

    return (
        <Disclosure>
            <div className="w-full float-left box-border text-xs leading-5">
                <div className="box-border pb-4 bg-white border border-solid px-0 shadow-sm inline-block w-full rounded mb-5">
                    <Disclosure.Button className="w-full text-left px-2 py-2 bg-gray-100 border-b-transparent">
                        <h4 className="my-0 text-base font-medium">
                            Estimate Shipping & Taxes <i className="fa fa-caret-down"></i>
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
                        <Disclosure.Panel className="text-gray-500 py-0 my-0">
                            <div className="border-separate relative pt-2 w-full">
                                <span className="px-5 mt-4">Enter your destination to get a shipping estimate.</span>
                                <form className="mt-2 px-4 justify-between w-full" onSubmit={handleSubmit(estimateShipping)}>
                                    <div className='sm:flex mb-4 sm:space-x-4'>
                                        <Label required={true} className='mt-4' name='Postcode'></Label>
                                        <span className='flex flex-col w-full'>
                                            <BaseInput placeholder='postcode' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-xs' {...register("postcode", { required: true })} />
                                            {errors.postcode && <span className='text-red-400 mt-2 text-xs'>Postcode is required</span>}
                                        </span>
                                    </div>
                                    <div className='sm:flex mb-4 sm:space-x-4'>
                                        <Label required={true} className='mt-4' name='State'></Label>
                                        <span className='flex flex-col w-full'>
                                            <select className='w-full focus-within:border-2 pl-3 border text-xs border-gray-300 rounded py-2 pr-5' {...register("state", { required: true })}>
                                                <option selected disabled>Select your state</option>
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
                                        {errors.state && <span className='text-red-400 text-xs mt-2'>State is required</span>}
                                    </div>
                                    <input type="submit"
                                        className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent
                                    align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 px-2 h-9"
                                        value="Get Quotes"
                                    />
                                </form>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </div >
            </div >
        </Disclosure >
    )
}
export default Shipping