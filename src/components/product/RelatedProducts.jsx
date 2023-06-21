import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

function Carousel({
  items,
  Child,
  index = 0,
  hideBtns = false,
  showChevrons = false,
  chevronY = 0,
  chevronlX = 0,
  chevronrX = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [height, setHeight] = useState(0)
  const targetEl = useRef()
  useEffect(() => setHeight(targetEl.current.clientHeight), [])
  useEffect(() => setCurrentIndex(index), [index])
  const totalPages = items.length
  return (
    <div className="relative">
      <div className={'overflow-x-hidden overflow-y-hidden relative'} style={{ height }}>
        <div className="relative h-full">
          {items.map((item, index) => (
            <motion.div
              animate={{ x: (index - currentIndex) * 100 + '%' }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className="absolute left-0"
              key={index}
            >
              <div ref={index === 0 ? targetEl : null} className="w-full">
                <Child item={item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showChevrons && (
        <>
          <div className="absolute bottom-0 top-0 right-5 z-20 flex">
            <motion.div
              animate={{ x: chevronlX, y: chevronY }}
              className="bg-white cursor-pointer  border text-gray-700 hover:bg-primary hover:text-white w-[20px] h-[30px] flex items-center justify-center mr-2"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
                )
              }
            >
              <ChevronLeftIcon />
            </motion.div>
          </div>
          <div className="absolute bottom-0 top-0 right-0 z-20 flex">
            <motion.div
              animate={{ x: chevronrX, y: chevronY }}
              className="bg-white cursor-pointer border text-gray-700 hover:bg-primary hover:text-white w-[20px] h-[30px] flex items-center justify-center"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex + 1 == totalPages ? prevIndex : prevIndex + 1
                )
              }
            >
              <ChevronRightIcon />
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}
function Product({ product }) {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <div
      className="space-y-2 w-full"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="lg:h-[180px] cursor-pointer group relative text-black">
        <img
          src={product.picture}
          className="w-full h-full opacity-80 group-hover:opacity-100"
        />
        {product.discounted && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[8px] top-[8px]">
            <div className="text-xs font-semibold">{product.discountPercent}</div>
          </div>
        )}
        {product.isNew && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[8px] top-[8px]">
            <div className="text-sm font-semibold uppercase">New</div>
          </div>
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-primary hover:bg-red-500 text-white"
              >
                <i className="fa fa-eye"></i>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-full">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                exit={{ y: -30, opacity: 0, transition: { duration: 0.1 } }}
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center z-10"
              >
                <div className="flex-auto flex items-center space-x-2 -mt-5 justify-center">
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary py-2 font-semibold px-3 text-white cursor-pointer capitalize rounded-full text-xs  hover:bg-red-500"
                  >
                    add to cart
                  </motion.div>

                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer  hover:bg-primary hover:text-white"
                  >
                    <i className="fa fa-heart-o"></i>
                  </motion.div>
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer  hover:bg-primary hover:text-white" 
                  >
                    <i className="fa fa-retweet"></i>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={
              'flex flex-col items-center space-y-2 ' +
              (mouseOver ? 'opacity-0' : 'opacity-100')
            }
          >
            <div className="flex space-x-2 items-center">
              <div className="flex space-x-1 items-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <i
                    key={index}
                    className="fa fa-star text-[#fec42d]"
                    style={{ fontSize: 12 }}
                  ></i>
                ))}
              </div>
              <div className="text-[10px] text-[#333]">
                ({product.totalRatings})
              </div>
            </div>
            <div className="text-[13px] text-[#333] font-medium">
              {product.name}
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <div className="text-primary font-semibold">
              $
              {product.discounted
                ? product.discountedPrice
                : product.price}
              .00
            </div>
            {product.discounted && (
              <div className="line-through text-gray-600 text-sm">
                ${product.price}.00
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default function RelatedProducts() {
  const products = [
    {
      name: 'Lastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 2,
      price: 80,
      discounted: false,
      // discountedPrice: 85,
    },
    {
      name: 'Exceerur sint occaecat',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 59,
      discounted: true,
      discountedPrice: 50,
      discountPercent: '-15%',
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 5,
      price: 60,
      discounted: false,
      discountedPrice: 85,
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 2,
      price: 48,
      discounted: false,
      discountedPrice: 85,
      isNew: true,
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 4,
      price: 90,
      discounted: false,
      // discountedPrice: 85,
    },
  ]
  const child = ({ item }) => (
    <div className="grid lg:grid-cols-5 gap-[30px] grid-cols-2">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  )
  return (
    <div className="pb-20 pr-[15px]">
      <h3 className="text-[16px] font-semibold uppercase mb-2 text-[#333]">Related Products</h3>
      <Carousel
        Child={child}
        items={[products, products, products]}
        hideBtns={true}
        showChevrons={true}
        chevronY={-50}
      />
    </div>
  )
}