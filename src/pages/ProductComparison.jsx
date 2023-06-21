import e3 from '../assets/images/e3.jpg'

function ProductComparison() {

    return <div className="py-10 pl-5 mx-5 overflow-x-auto">
        <h1 className="text-lg ">Product Comparison</h1>
        <ul className="flex flex-row mb-4 mt-7 text-gray-400">
        <li>
          <a href="/">
            <Icon className="" size="12" id="home"></Icon>
          </a>
        </li>
        <Icon className="mt-0.5 mx-2" id="chevronRight" size="10"></Icon>
        <li className="/">
          <a href="/compare">Product Comparison</a>
        </li>
      </ul>
        <table className="">
            <thead className='py-2 comparison-thead'>
                <tr className='border'>
                    <td className='pl-3 text-xs font-normal py-3'>
                        <strong className="py-1 font-bold">Product Detais</strong>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Product</td>
                    <td className='border pl-3 text-xs font-normal py-3'><a href="product.html">Lorem ipsum dolor"</a></td>
                    <td className='border pl-3 text-xs font-normal py-3'><a href="product.html">Lorem ipsum dolor</a></td>
                    <td className='border pl-3 text-xs font-normal py-3'><a href="product.html">Lorem ipsum dolor</a></td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Image</td>
                    <td className="text-center border py-3"><img className='mx-auto rounded p-1 border border-gray-100 bg-white' title="Laptop Silver black" alt="Laptop Silver black" width="100px" src={e3}></img></td>
                    <td className="text-center border py-3"><img className='mx-auto rounded p-1 border border-gray-100 bg-white' title=" Strategies for Acquiring Your Own Laptop " alt=" Strategies for Acquiring Your Own Laptop " width="100px" src={e3}></img></td>
                    <td className="text-center border py-3"><img className='mx-auto rounded p-1 border border-gray-100 bg-white' title="Aspire Ultrabook Laptop" alt="Aspire Ultrabook Laptop" width="100px" src={e3}></img></td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Price</td>
                    <td className='border pl-3 text-xs font-normal py-3'><div><span className='text-base -mt-1 pr-1.5 text-blue-800 font-semibold'>$93.73</span> <span className='font-semibold text-gray-400 text-sm line-through'>$84.36</span> </div></td>
                    <td className='border pl-3 text-xs font-normal py-3'><div> <span className='text-base -mt-1 pr-1.5 text-blue-800 font-semibold'>$45</span> <span className='font-semibold text-gray-400 text-sm line-through'>$80</span></div></td>
                    <td className='border pl-3 text-xs font-normal py-3'><div><span className='text-base -mt-1 pr-1.5 text-blue-800 font-semibold'>$56</span> </div></td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Model</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Pt 001</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Pt 002</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Pt 003</td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Brand</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Apple</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Apple</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Apple</td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Availability</td>
                    <td className='border pl-3 text-xs font-normal py-3'>In Stock</td>
                    <td className='border pl-3 text-xs font-normal py-3'>In Stock</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Pre-Order</td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Rating</td>
                    <td className='border pl-3 text-xs font-normal py-3'>
                        <div className='text-yellow-500'>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                        </div>
                    </td>
                    <td className='border pl-3 text-xs font-normal py-3'>
                        <div className='text-yellow-500'>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                        </div>
                    </td>
                    <td className='border pl-3 text-xs font-normal py-3'>
                        <div className=''>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Summary</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                    <td className='border pl-3 text-xs font-normal py-3'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                    <td className='border pl-3 text-xs font-normal py-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Weight</td>
                    <td className='border pl-3 text-xs font-normal py-3'>1.50kg</td>
                    <td className='border pl-3 text-xs font-normal py-3'>1.80kg</td>
                    <td className='border pl-3 text-xs font-normal py-3'>2.00kg</td>
                </tr>
                <tr>
                    <td className='border pl-3 text-xs font-normal py-3'>Dimensions (L x W x H)</td>
                    <td className='border pl-3 text-xs font-normal py-3'>0.00mm x 0.00mm x 0.00mm</td>
                    <td className='border pl-3 text-xs font-normal py-3'>0.00mm x 0.00mm x 0.00mm</td>
                    <td className='border pl-3 text-xs font-normal py-3'>0.00cm x 0.00cm x 0.00cm</td>
                </tr>
                </tbody>
                <thead className='comparison-thead w-screen'>
                    <tr className='table-row '>
                        <td className='border pl-3 text-xs font-normal py-3'>
                            <strong>Processor</strong>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'>Clockspeed</td>
                        <td className='border pl-3 text-xs font-normal py-3'>100mhz</td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                    </tr>
                </tbody>
                <thead className='comparison-thead'>
                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'>
                            <strong>Memory</strong>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'>test 1</td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                        <td className='border pl-3 text-xs font-normal py-3'>Hammered metal outer - Semi-precious stone embellishments
                        </td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                    </tr>

                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'>test 2</td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                        <td className='border pl-3 text-xs font-normal py-3'>H: 11cm/4" W: 12cm/5" D: 5cm/2"
                        </td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                    </tr>

                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'>test 3</td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                        <td className='border pl-3 text-xs font-normal py-3'>Green - Black - Brown
                        </td>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                    </tr>

                    <tr>
                        <td className='border pl-3 text-xs font-normal py-3'></td>
                        <td className='border pl-3 text-xs font-normal py-3'><input type="button" onclick="" className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3" value="Add to Cart"></input>
                            <a className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3" href="#">Remove</a></td>
                        <td className='border pl-3 text-xs font-normal py-3'><input type="button" onclick="" className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3" value="Add to Cart"></input>
                            <a className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3" href="#">Remove</a></td>
                        <td className='border pl-3 text-xs font-normal py-3'><input type="button" onclick="" className="block bg-blue-600 text-white text-center sm:mx-10 mb-2 w-9/12 px-3 py-3" value="Add to Cart"></input>
                            <a className="block bg-red-600 text-white text-center sm:mx-10 px-3 w-9/12 py-3" href="#">Remove</a></td>
                    </tr>
                </tbody>
        </table>
    </div>

}

export default ProductComparison