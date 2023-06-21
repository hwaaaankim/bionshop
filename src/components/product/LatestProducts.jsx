function LatestProducts() {
  const latestProducts = [
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Mandouille Short',
      rate: 4,
      price: 76,
      discounted: true,
      discount: 55,
    },
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Xancetta Bresao',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 66,
      discounted: false,
    },
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Chicken Swinesha',
      rate: 4,
      price: 56,
      discounted: true,
      discount: 45,
    }
  ]
  return (
    <div className="w-full relative border border-[#d7d7d7] overflow-hidden mb-10 rounded">
      <h3 className="border-b border-[#d7d7d7] uppercase text-[16px] font-bold text-black p-4 bg-[#f5f5f5]">
        Latest products
      </h3>
      <div className="py-4 px-2.5">
        {latestProducts.map((product, index) => (
          <div key={index} className="flex pb-2.5 mb-3 w-full">
            <div className="w-3/4 relative">
              <div className="item-img-info">
                <a href="#" target="_self" title="Mandouille short " className="cursor-pointer">
                  <img src={product.picture} alt="Mandouille short" className="align-middle" />
                </a>
              </div>
            </div>
            <div className="w-full item-info">
              <div className="mb-1.5">
                <a href="#" target="_self" title="Mandouille short" className="text-sm text-[#333] font-medium capitalize leading-4 cursor-pointer hover:text-[#094bad]">{product.name}</a>
              </div>
              <div className="rating mb-1.5">
                <span className="flex space-x-1 text-[#fec42d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {product.discounted && (
                  <div className="text-primary font-semibold">
                    ${product.discount}.00
                  </div>
                )}
                <div
                  className={
                    product.discounted
                      ? 'line-through text-[14px] text-gray-500'
                      : 'text-primary font-semibold'
                  }
                >
                  ${product.price}.00
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default LatestProducts;