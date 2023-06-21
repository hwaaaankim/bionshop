import Icon from '../components/icon/Icon'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import image from '../assets/images/1.jpg'
import order from '../services/api/order'

function OrderHistory() {
  // const orderHistories = {
  //   {
  //     image:""
  //   }
  // }

  return (
    <div className="px-4 sm:px-6 lg:px-8 text-xs text-gray-2 leading-6 mb-8">
      {/* Breadcrumb */}
      <ul className="flex mt-6 leading-normal text-gray-3 space-x-3 ">
        <li>
          <a href="#">
            <i className="fa fa-home ml-2  hover:text-blue-3"></i>
          </a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="9"></Icon>
        </li>
        <li className="text-primary text-sm">
          <a href="/order_history">Order History</a>
        </li>
      </ul>
      <div className="flex">
        <div className="w-full sm:w-3/4 pr-7 mb-7">
          <h2 className="text-xl font-medium mt-11 mb-3">Order History</h2>
          <div className="overflow-x-auto min-h-[.01%]">
            <table className="w-full max-w-full">
              <thead>
                <tr className="bg-gray-4 font-bold">
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 px-1">
                    Image
                  </td>
                  <td className="text-left whitespace-nowrap border  border-solid border-collapse border-spacing-0 p-1">
                    Product Name
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1">
                    Order Id
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1 ">
                    Qty
                  </td>
                  <td className="text-center whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1">
                    Status
                  </td>
                  <td className="text-center  border border-solid border-collapse border-spacing-0 p-1">
                    Date Added
                  </td>
                  <td className="text-right whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1 ">
                    Total
                  </td>
                  <td className="text-right whitespace-nowrap border border-solid border-collapse border-spacing-0 p-1"></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center border border-solid border-collapse p-2">
                    <a href="/product">
                      <img
                        src={image}
                        alt="img-thumbnail"
                        title="Xitefun Causal Wear Fancy Shoes"
                        className="w-20 transition-all rounded text-center border border-solid border-separate border-spacing-0 h-auto"
                      />
                    </a>
                  </td>
                  <td className="text-left align-top border border-solid border-collapse p-2">
                    <a href="/product"> Aspire Ultrabook Laptop</a>
                  </td>
                  <td className="text-center align-top border border-solid border-collapse p-2">
                    #214521
                  </td>
                  <td className=" text-center align-top border border-solid border-collapse p-2">
                    1
                  </td>
                  <td className=" text-center align-top border border-solid border-collapse  p-2">
                    Shipped
                  </td>
                  <td className="text-center align-top border border-solid border-collapse p-2">
                    21/06/2016
                  </td>
                  <td className="text-right align-top border border-solid border-collapse p-2">
                    $228.00
                  </td>
                  <td class="text-center align-top pt-5 border border-solid border-collapse ">
                    <a
                      className="bg-[#5bc0de] px-3 py-3 text-white border-[#5bc0de] "
                      title="view"
                      href="/order_information"
                    >
                      <i class="fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          {/* Site Map */}
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
export default OrderHistory
