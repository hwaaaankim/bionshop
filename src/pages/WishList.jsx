import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import image from '../assets/images/10.jpg'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import '../App.css'

function WishListTable() {
  const whishs = [
    {
      id: 1,
      image: { image },
      pName: 'iPad',
      model: 'pt 001',
      stoke: 'In stoke',
      unitPrice: {
        priceNew: '$45',
        priceOld: '$80',
      },
    },
    {
      id: 2,
      image: { image },
      pName: 'Comas samer rumas',
      model: 'pt 002',
      stoke: 'Pre-Order',
      unitPrice: {
        priceNew: '$80',
      },
    },
  ]
  const handleRemove = () => {}
  const handleUpdate = () => {}
  const [[imgWidth, imgHeight], setImgDimension] = useState(['80px', '80px'])
  return (
    <>
      <div className="w-full">
        <h2 className="mt-5 text-xl text-inherit box-border font-normal leading-none mb-2">
          My Wish List
        </h2>
      </div>
      <div
        className="overflow-x-auto box-border min-h-[0.01%] leading-6 text-xs text-gray-2"
        style={{ minHeight: 0.1 + '%' }}
      >
        <table className="mb-3 w-full max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border ">
          <thead className="py-1 bg-zinc-200 border-b-transparent">
            <tr className="font-bold align-top">
              <td className="text-center border border-solid px-2">Image</td>
              <td className="text-left border border-solid px-2">
                Product Name
              </td>
              <td className="text-left border border-solid px-2">Model</td>
              <td className="text-right border border-solid px-2">Stock</td>
              <td className="text-right border border-solid px-2">
                Unit Price
              </td>
              <td className="text-right border border-solid px-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {whishs.map((wish) => (
              <tr
                key={wish.id}
                className="hover:bg-gray-100 align-top border border-solid"
              >
                <td className="border border-solid p-2 text-center">
                  <a href="product.html">
                    <img
                      src={image}
                      width={imgWidth}
                      height={imgHeight}
                      alt="Xitefun Causal Wear Fancy Shoes"
                      title="Xitefun Causal Wear Fancy Shoes"
                      className="transition-all rounded object-cover p-1 border-solid border-gray-400
                            max-w-full inline-block align-middle cursor-pointer"
                    />
                  </a>
                </td>
                <td className="text-left border border-solid p-2">
                  <a href="product.html">{wish.pName}</a>
                </td>
                <td className="text-left border border-solid p-2">
                  {wish.model}
                </td>
                <td className="text-right border border-solid p-2">
                  {wish.stoke}
                </td>
                <td className="text-right border border-solid p-2">
                  <div className="price">
                    <span
                      className="font-semibold text-lg"
                      style={{ color: '#094bad' }}
                    >
                      {wish.unitPrice.priceNew}
                    </span>
                    {wish.unitPrice?.priceOld && (
                      <span
                        className="font-medium text-sm line-through inline-block px-2 leading-5"
                        style={{ color: '#aaa' }}
                      >
                        {wish.unitPrice?.priceOld}
                      </span>
                    )}
                  </div>
                </td>
                <td className="flex float-right p-2">
                  <Tippy
                    content={<span className="text-xs"> Add to Cart</span>}
                  >
                    <button
                      className="mr-1 cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block px-4 h-9"
                      onClick={handleUpdate}
                      type="button"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </Tippy>
                  <Tippy content={<span className="text-xs"> Remove</span>}>
                    <button
                      type="button"
                      className="cursor-pointer bg-red-1 hover:bg-red-500 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block px-4 h-9"
                      onClick={handleRemove}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </Tippy>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default function WishList() {
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
        <li>
          <Link to="#" className="hover:text-blue-2">
            Account
          </Link>
        </li>
        <li>
          <i className="fa fa-angle-right text-gray-400"></i>
        </li>

        <li className="text-primary">
          <Link href="#">My Wish List</Link>
        </li>
      </ul>
      <div className="w-full text-gray-600 bg-transparent my-3 mx-0 rounded list-none box-border flex flex-col sm:flex-row gap-8 p-0 min-h-fit">
        <div
          className="mb-2 float-left relative w-[79 '%'] sm:w-full"
          style={{ minHeight: 1 + 'px', margin: '0 auto' }}
        >
          <WishListTable />
        </div>
        <div
          className="hidden sm:relative sm:w-1/4 md:block text-gray-2"
          style={{ margin: '0 auto', minHeight: 1 + 'px' }}
        >
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
