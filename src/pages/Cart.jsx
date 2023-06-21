import Icon from "../components/icon/Icon"
import ShoppingCartTable from "../components/cart/ShoppingCartTable"
import Total from "../components/cart/Total"
import CouponCode from "../components/cart/CouponCode"
import Shipping from "../components/cart/Shipping"
import GiftCertificate from "../components/cart/GiftCertificate"


function Cart() {

    return <div className="flex flex-col sm:mx-10 mx-3 my-4 pb-2 sm:text-sm lg:text-xs">
        <ul className="flex flex-row mb-4 mt-7 text-gray-400">
        <li>
          <a href="/">
            <Icon className="" size="12" id="home"></Icon>
          </a>
        </li>
        <Icon className="mt-0.5 mx-2" id="chevronRight" size="10"></Icon>
        <li className="/">
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
      <div>
        <div>
        <h2 className="text-lg font-semibold text-gray-500 pb-2">Shopping Cart</h2>
        <ShoppingCartTable></ShoppingCartTable>
        <h2 className="text-lg font-semibold text-gray-500">What would you like to do next?</h2>
        <span>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</span>
        <CouponCode></CouponCode>
        <Shipping></Shipping>
        <GiftCertificate/>
        <div>
        <Total></Total>
        </div>
        <div className="space-x-2 justify-around"> 
          <a href='/' className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 pt-2 px-2 h-9">Continue Shopping</a>
          <a href='/checkout' className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 pt-2 px-2 h-9">Checkout</a>
        </div>
        </div>
        <div className="h-60"></div>
      </div>
    </div>
}

export default Cart