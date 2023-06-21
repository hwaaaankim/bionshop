import { useState } from 'react'
import { Dropdown } from './HeaderTop'
import { useNavigate } from 'react-router-dom'

function Logo() {
  return (
    <div className="flex md:block justify-center">
      <img src="image/catalog/logo.png" style={{ width: 189, height: 39 }} />
    </div>
  )
}

function CategoriesSelector({ category, setter }) {
  const categories = ['All Categories', 'Apparel', 'Cables and Connectors']
  return (
    <div
      style={{ padding: '0 15px' }}
      className="bg-gray-100 rounded-l hidden mdp5:block"
    >
      <select
        value={category}
        onChange={setter}
        style={{ height: 40, fontSize: 12 }}
        className="rounded-l outline-none bg-gray-100"
      >
        {categories.map((item, index) => (
          <option value={item} key={index} style={{ fontSize: 12 }}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

function FilterBar() {
  const [category, setCategory] = useState('All Categories')
  const [search, setSearch] = useState('')
  return (
    <div className="flex-auto hidden md:flex items-center">
      <CategoriesSelector category={category} setter={setCategory} />
      <div className="mdp5:flex-auto bg-white p-0.5 rounded-l mdp5:rounded-l-none rounded-r border-l border-gray-400">
        <div className="flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontSize: 12 }}
            className="mdp5:flex-auto outline-none px-4 text-gray-500"
            placeholder="Keyword here..."
          />
          <div
            style={{ width: 81, height: 36 }}
            className="flex items-center justify-center bg-black cursor-pointer hover:bg-red-500 rounded-r"
          >
            <i className="fa fa-search text-white" style={{ fontSize: 12 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Product({ product, light = false }) {
  return (
    <div
      className={
        (light ? '' : 'bg-[#f9f9f9]') +
        ' p-[8px] text-xs text-gray-600 flex space-x-2 items-center border-b border-gray-200'
      }
    >
      <img
        src="image/catalog/demo/product/80/1.jpg"
        className="w-[54px] h-[54px] cursor-pointer"
      />
      <div className="w-[94px] break-words cursor-pointer hover:text-primary">
        {product.name}
      </div>
      <div className="flex-auto flex space-x-2 items-center justify-between">
        <div>{product.size}</div>
        <div>${product.price} </div>
        <div className="cursor-pointer hover:text-primary">
          <i className="fa fa-edit"></i>
        </div>
        <div className="cursor-pointer hover:text-primary">
          <i className="fa fa-times"></i>
        </div>
      </div>
    </div>
  )
}
function CartContent() {
  const navigate = useNavigate()
  const products = [
    { id: 1, name: 'Yutculpa ullamco', size: 'xl', price: 80.0 },
    { id: 2, name: 'Xancetta bresao', size: 'xl', price: 60.0 },
  ]
  return (
    <div className="w-[320px] space-y-5 pb-[10px]">
      <div>
        {products.map((item, index) => (
          <Product key={item.id} product={item} light={index % 2 !== 0} />
        ))}
      </div>
      <div className="text-xs text-gray-600">
        <div className="grid grid-cols-2 gap-2 p-2 border-y border-y-gray-200">
          <div className="font-semibold">Sub-Total</div>
          <div className="text-right">$140.00</div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 border-b border-b-gray-200">
          <div className="font-semibold">Eco Tax (-2.00)</div>
          <div className="text-right">$2.00</div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 border-b border-b-gray-200">
          <div className="font-semibold">VAT (20%)</div>
          <div className="text-right">$20.00</div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 border-b border-b-gray-200">
          <div className="font-semibold">Total</div>
          <div className="text-right">$162.00</div>
        </div>
        <div className="flex space-x-[12px] items-center justify-end py-2">
          <div
            className="flex space-x-1 items-center py-[6px] px-[12px] cursor-pointer hover:text-primary"
            onClick={() => navigate('/cart')}
          >
            <i className="fa fa-shopping-cart"></i>
            <div>View Cart</div>
          </div>
          <div
            className="flex space-x-1 items-center py-[6px] px-[12px] cursor-pointer hover:text-primary"
            onClick={() => navigate('/checkout')}
          >
            <i className="fa fa-share"></i>
            <div>Checkout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartMini() {
  const Badge = ({ total }) => (
    <div
      className="absolute -top-2 -right-2 p-1.5 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
      style={{ fontSize: 8 }}
    >
      {total}
    </div>
  )
  const cartContent = CartContent()
  return (
    <Dropdown hasPadding={false} content={cartContent}>
      <div className="flex space-x-4 items-center">
        <div className="relative bg-white w-10 h-10 rounded-full">
          <div className="w-full h-full flex items-center justify-center">
            <i className="fa fa-shopping-bag" style={{ fontSize: 16 }} />
          </div>
          <Badge total={'02'} />
        </div>
        <div className="text-white hidden md:flex flex-col justify-end">
          <div className="uppercase text-sm font-semibold">my cart</div>
          <div style={{ fontSize: 12 }}>($162.00)</div>
        </div>
      </div>
    </Dropdown>
  )
}

function RightNavs() {
  return (
    <div className="hidden md:flex mdp5:space-x-6 mdp5:pl-12 mdp5:mx-4 items-center">
      {[{ icon: 'refresh' }, { icon: 'heart' }].map((item, index) => (
        <div
          className="cursor-pointer w-10 h-10 hidden lgp8:flex items-center justify-center"
          key={index}
        >
          <i
            className={'fa fa-' + item.icon + ' text-white hover:text-black'}
            style={{ fontSize: 24 }}
          />
        </div>
      ))}

      <CartMini />
    </div>
  )
}

function CartNsearchMini() {
  return (
    <div className="flex md:hidden space-x-2 justify-between">
      <div className="p-0 relative">
        <div className="p-1 cursor-pointer text-white">
          <i className="fa fa-search"></i>
        </div>
      </div>
      <CartMini />
    </div>
  )
}

export default function HeaderCenter() {
  return (
    <div className="px-[2.5%] pt-[25px] pb-[16px]">
      <div className="space-y-2 md:space-y-0 md:flex md:space-x-2 mdp5:space-x-7 items-center">
        <Logo />
        <FilterBar />
        <RightNavs />
        <CartNsearchMini />
      </div>
    </div>
  )
}
