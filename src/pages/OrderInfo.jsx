import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Icon from '../components/icon/Icon'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import '../App.css'

function OrderDetails() {
  const [orderDetails, orderDatails] = useState({})
  return (
    <>
      <div className="w-full">
        <h2 className="mt-5 text-xl text-inherit box-border font-normal leading-none mb-2">
          Order Information
        </h2>
      </div>
      <div
        className="overflow-x-auto box-border leading-6 text-xs text-gray-2"
        style={{ minHeight: 0.1 + '%' }}
      >
        <table className="mb-3 w-full max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border ">
          <thead className="px-2 py-2 bg-gray-200 border-b-transparent h-8">
            <tr className="font-bold">
              <td
                className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0"
                colSpan={2}
              >
                Order Details
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0 w-1/2">
                <b>Order ID:</b> #214521
                <br />
                <b>Date Added:</b> 20/06/2016
              </td>
              <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                <b>Payment Method:</b> Cash On Delivery
                <br />
                <b>Shipping Method:</b> Flat Shipping Rate
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function PaymentAdress() {
  const [PaymentAddress, setPaymentAddress] = useState({})
  return (
    <>
      <div
        className="overflow-x-auto box-border leading-6 text-xs text-gray-2"
        style={{ minHeight: 0.1 + '%' }}
      >
        <table className="mb-3 w-full max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border ">
          <thead className="px-2 py-2 bg-gray-200 border-b-transparent h-8">
            <tr className="font-bold">
              <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                Payment Address
              </td>
              <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                Shipping Address
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                Jhone Cary
                <br />
                Central Square
                <br />
                22 Hoi Wing Road
                <br />
                New Delhi
                <br />
                India
              </td>
              <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                Jhone Cary
                <br />
                Central Square
                <br />
                22 Hoi Wing Road
                <br />
                New Delhi
                <br />
                India
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function PricingTable() {
  const handleReOrder = () => {}
  const handleReturn = () => {}
  return (
    <>
      <div className="w-full">
        <h2 className="mt-5 text-xl text-inherit box-border font-normal leading-none mb-2">
          Order Information
        </h2>
      </div>
      <div className="box-border overflow-x-auto leading-6 text-xs text-gray-2 min-h-[0.01%]">
        <table
          className="box-border border-solid border border-gray-3 min-w-[600px] mb-5 w-full max-w-full bg-transparent 
                        border-collapse text-xs border-spacing-0 "
        >
          <thead className="px-2 py-2 bg-gray-200 border-b-transparent text-sm font-semibold h-8">
            <tr>
              <td className="p-2 text-left border-solid border">
                Product Name
              </td>
              <td className="p-2 text-left border-solid border">Model</td>
              <td className="text-right p-2 border-solid border">Quantity</td>
              <td className="text-right p-2 border-solid border">Price</td>
              <td className="text-right p-2 border-solid border">Total</td>
              <td className="p-2 border-solid border w-fit"></td>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 align-top">
              <td className="p-2 text-left border-solid border border-gray-3">
                iPhone5
              </td>
              <td className="p-2 text-left border-solid border border-gray-3">
                product 11
              </td>
              <td className="text-right p-2 border-solid border">1</td>
              <td className="text-right p-2 border-solid border">$123.20</td>
              <td className="text-right p-2 border-solid border">$123.20</td>
              <td className="text-right w-24 border border-solid p-2">
                <Tippy
                  content={
                    <span style={{ fontSize: 10 + 'px' }}> Add to Cart</span>
                  }
                >
                  <button
                    className="mr-1 cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block px-3 h-8"
                    onClick={handleReOrder}
                    type="button"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </Tippy>
                <Tippy
                  content={<span style={{ fontSize: 10 + 'px' }}> Remove</span>}
                >
                  <button
                    type="button"
                    className="cursor-pointer bg-red-1 border-red-2 hover:bg-red-500 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block  px-3 h-8"
                    onClick={handleReturn}
                  >
                    <i className="fa fa-reply"></i>
                  </button>
                </Tippy>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="p-2 border-solid border" colSpan="3"></td>
              <td className="p-2 border-solid border">
                <b>Sub-Total</b>
              </td>
              <td className="p-2 border-solid border">$101.00</td>
              <td className="p-2 border-solid border"></td>
            </tr>
            <tr>
              <td className="p-2 border-solid border" colSpan="3"></td>
              <td className="p-2 border-collapse border-solid border">
                <b>Flat Shipping Rate</b>
              </td>
              <td className="p-2 border-solid border">$5.00</td>
              <td className="border-solid border"></td>
            </tr>
            <tr className="text-right align-baseline">
              <td className="p-2 border-solid border" colSpan="3"></td>
              <td className="p-2 border-solid border">
                <b>Eco Tax (-2.00)</b>
              </td>
              <td className="p-2 border-solid border">$6.00</td>
              <td className="border-solid border"></td>
            </tr>
            <tr className="text-right align-top">
              <td className="p-2 border-solid border" colSpan="3"></td>
              <td className="p-2 border-solid border">
                <b>VAT (20%)</b>
              </td>
              <td className="p-2 border-solid border">$21.20</td>
              <td className="p-2 border-solid border"></td>
            </tr>
            <tr className="text-right align-top">
              <td
                className="p-2 border-collapse border-solid border"
                colSpan="3"
              ></td>
              <td className="p-2 border-solid border">
                <b>Total</b>
              </td>
              <td className="p-2 border-solid border">$133.20</td>
              <td className="border-solid border"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

function OrderHistory() {
  return (
    <>
      <div className="w-full">
        <h2 className="mt-5 text-xl text-inherit box-border font-normal leading-none mb-2">
          Order History
        </h2>
      </div>
      <div
        className="overflow-x-auto box-border leading-6 text-xs text-gray-2"
        style={{ minHeight: 0.1 + '%' }}
      >
        <table
          className="box-border border-solid border border-gray-3 mb-5 w-full max-w-full bg-transparent 
                        border-collapse text-xs border-spacing-0"
        >
          <thead className="px-2 py-2 bg-gray-200 border-b-transparent text-sm font-semibold h-8">
            <tr className="align-top text-left">
              <td className="p-2 text-left border-solid border">Date Added</td>
              <td className="p-2 text-left border-solid border">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 align-top text-left">
              <td className="p-2 border-solid border">20/06/2016 </td>
              <td className="p-2 border-solid border">Processing</td>
            </tr>
            <tr className="hover:bg-gray-100 align-top">
              <td className="p-2 border-solid border">21/06/2016 </td>
              <td className="p-2 border-solid border">Shipped</td>
            </tr>
            <tr className="hover:bg-gray-100 align-top">
              <td className="p-2 border-solid border">24/06/2016 </td>
              <td className="p-2 border-solid border">Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default function OrderInfo() {
  const handleSubmit = () => {}
  return (
    <div
      className="overflow-visible box-border pb-8 text-gray-400 p-0 leading-6 text-sm justify-center"
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
          <a href="#">Order Information</a>
        </li>
      </ul>
      <div className="w-full bg-transparent my-3 mx-0 rounded list-none box-border flex gap-4 text-neutral-700 p-0 min-h-fit">
        <div
          className="float-left relative space-y-2 w-[79 '%'] sm: w-full"
          style={{ minHeight: 1 + 'px', margin: '0 auto' }}
        >
          <OrderDetails />
          <PaymentAdress />
          <PricingTable />
          <OrderHistory />
          <div className="float-right mt-2 mb-5">
            <button
              type="submit"
              className="bg-blue-1 border-blue-2 text-white text-sm transition ease-in-out font-normal px-3 py-2 focus:bg-primary "
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className="hidden sm:relative box-border float-left mb-3 px-4 md:block text-gray-600"
          style={{ width: 21 + '%', margin: '0 auto', minHeight: 1 + 'px' }}
        >
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
