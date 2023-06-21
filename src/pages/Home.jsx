import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Carousel({
  items,
  Child,
  index = 0,
  hideBtns = false,
  showChevrons = false,
  showChevronsConditionally = true,
  chevronY = 0,
  chevronlX = 0,
  chevronrX = 0,
  pageSize = 1,
}) {
  const [mouseIn, setMouseIn] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(index)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const targetEl = useRef()
  const widthRef = useRef()
  useEffect(() => {
    setHeight(targetEl.current.clientHeight)
    setWidth(widthRef.current.clientWidth)
  }, [])
  useEffect(() => setCurrentIndex(index), [index])
  const totalPages = items.length
  const makeChevronVisible =
    showChevrons &&
    (!showChevronsConditionally || (showChevronsConditionally && mouseIn))

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <div ref={widthRef} className="right-0 left-0 top-0 bottom-0"></div>
      <div className={'overflow-x-hidden relative'} style={{ height }}>
        <div className={'relative h-full'}>
          {items.map((item, index) => (
            <motion.div
              animate={{
                x:
                  (index - currentIndex) *
                  (width / pageSize + (pageSize === 1 ? 0 : 30 / pageSize)),
              }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className={'absolute left-0'}
              style={{
                width:
                  width / pageSize -
                  (pageSize === 1 ? 0 : 30) +
                  (pageSize === 1 ? 0 : 30 / pageSize),
                marginRight: pageSize === 1 ? 0 : 30,
              }}
              key={index}
            >
              <div ref={index === 0 ? targetEl : null} className="w-full">
                <Child item={item} />
              </div>
            </motion.div>
          ))}
        </div>
        {!hideBtns && (
          <div className="absolute bottom-0 right-0 left-0 pb-4 flex space-x-2 items-center justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={
                  'w-[30px] h-[6px] ' +
                  (index === currentIndex ? 'bg-primary' : 'bg-white') +
                  ' hover:bg-primary rounded cursor-pointer'
                }
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        )}
      </div>

      {makeChevronVisible && (
        <>
          <div className="absolute bottom-0 top-0 -left-[20px] z-20 flex items-center">
            <motion.div
              initial={{ x: chevronlX, y: chevronY, scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white cursor-pointer shadow-lg border text-gray-700 hover:bg-primary hover:text-white w-[40px] h-[40px] flex items-center justify-center rounded-full"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
                )
              }
            >
              <i className="fa fa-caret-left" style={{ fontSize: 20 }}></i>
            </motion.div>
          </div>
          <div className="absolute bottom-0 top-0 -right-[20px] z-20 flex items-center">
            <motion.div
              initial={{ x: chevronrX, y: chevronY, scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white cursor-pointer shadow-lg border text-gray-700 hover:bg-primary hover:text-white w-[40px] h-[40px] flex items-center justify-center rounded-full"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex + pageSize == totalPages ? prevIndex : prevIndex + 1
                )
              }
            >
              <i className="fa fa-caret-right" style={{ fontSize: 20 }}></i>
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}

function ImageCarouse() {
  const images = [
    { id: 1, path: 'image/catalog/slideshow/home1/slider-1.jpg' },
    { id: 2, path: 'image/catalog/slideshow/home1/slider-2.jpg' },
    { id: 3, path: 'image/catalog/slideshow/home1/slider-3.jpg' },
  ]
  const child = ({ item }) => (
    <img src={item.path} className="w-full h-[300px]" />
  )
  return <Carousel Child={child} items={images} />
}

function BestSelling() {
  const [currentPage, setPage] = useState(1)
  const navigate = useNavigate()
  const bestSellingItems = [
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
    {
      id: 2,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 67,
      discounted: true,
      discount: 20,
    },
  ]

  const child = ({ item }) => (
    <div className="w-full grid grid-cols-1 xs:grid-cols-2 mdp5:grid-cols-4 lgp8:grid-cols-1 gap-2">
      {[1, 2, 3, 4].map((pitem, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <img src={item.picture} className="w-[60px] h-[60px]" />
          <div className="flex-auto -space-y-1">
            <div
              className="text-[13px] pt-2 cursor-pointer hover:text-primary"
              onClick={() => navigate('/product')}
            >
              {item.name}
            </div>
            <div className="space-x-1">
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {item.discounted && (
                <div className="text-primary font-semibold">
                  ${item.discount}.00
                </div>
              )}
              <div
                className={
                  item.discounted
                    ? 'line-through text-[14px] text-gray-500'
                    : 'text-primary font-semibold'
                }
              >
                ${item.price}.00
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <div className="col-span-4 lgp8:col-span-1 rounded border border-gray-50">
      <div className="flex space-x-2 justify-between items-center bg-[#e9ecf1] rounded-t py-[6px] px-[20px]">
        <div className="flex-auto uppercase font-semibold">best selling</div>
        <div className="flex space-x-2 items-center">
          {[0, 1].map((page) => (
            <motion.div
              key={page}
              className={
                'h-[8px] cursor-pointer rounded-full bg-' +
                (page === currentPage ? 'primary' : 'black')
              }
              animate={{ width: page == currentPage ? 30 : 8 }}
              onClick={() => setPage(page)}
            ></motion.div>
          ))}
        </div>
      </div>

      <Carousel
        Child={child}
        items={bestSellingItems}
        index={currentPage}
        hideBtns={true}
      />
    </div>
  )
}

function LatestProducts() {
  const [currentPage, setPage] = useState(1)
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
    {
      id: 2,
      picture: 'image/catalog/demo/product/80/1.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 89,
      discounted: true,
      discount: 80,
    },
  ]
  const child = ({ item }) => (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((pitem, index) => (
        <div key={index} className="flex space-x-4 items-center">
          <img src={item.picture} className="w-[80px] h-[80px]" />
          <div className="flex-auto space-y-1">
            <div
              className="text-[13px] pt-2 cursor-pointer hover:text-primary"
              onClick={() => navigate('/product')}
            >
              {item.name}
            </div>
            <div className="space-x-1">
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
              <i
                className="fa fa-star text-[#fec42d]"
                style={{ fontSize: 12 }}
              ></i>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {item.discounted && (
                <div className="text-primary font-semibold">
                  ${item.discount}.00
                </div>
              )}
              <div
                className={
                  item.discounted
                    ? 'line-through text-[14px] text-gray-500'
                    : 'text-primary font-semibold'
                }
              >
                ${item.price}.00
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-3">
      <div>
        <div className="uppercase font-semibold py-2">latest products</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <Carousel
        Child={child}
        items={products}
        index={currentPage}
        hideBtns={true}
      />

      <div className="flex space-x-2 items-center ml-[80px] pl-4 py-6">
        {[0, 1].map((page) => (
          <motion.div
            key={page}
            className={
              'h-[8px] cursor-pointer rounded-full bg-' +
              (page === currentPage ? 'primary' : 'black')
            }
            animate={{ width: page == currentPage ? 30 : 8 }}
            onClick={() => setPage(page)}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

function Features() {
  const items = [
    {
      id: 1,
      icon: 'fa fa-file-text-o',
      title: 'free delivery',
      description: 'on order over $49.86',
    },
    {
      id: 2,
      icon: 'fa fa-shield',
      title: 'order protection',
      description: 'secured information',
    },
    {
      id: 3,
      icon: 'fa fa-gift',
      title: 'promotion gift',
      description: 'special offers!',
    },
    {
      id: 4,
      icon: 'fa fa-money',
      title: 'money back',
      description: 'return over 30 days',
    },
  ]
  return (
    <div className="border">
      <img
        src="image/catalog/banners/call-us.jpg"
        className="w-full h-[124px] cursor-pointer"
      />
      <div className="">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={
              'flex space-x-4 items-center px-4 py-6 cursor-pointer group' +
              (index + 1 < items.length ? ' border-b' : '')
            }
          >
            <i
              className={item.icon + ' text-primary'}
              style={{ fontSize: 36 }}
            ></i>
            <div className="text-[13px]">
              <div className="uppercase font-semibold text-gray-700 group-hover:text-primary group-hover:text-[13.5px]">
                {item.title}
              </div>
              <div className="capitalize text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Recommended() {
  const [currentPage, setPage] = useState(0)
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      picture: 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee',
      rate: 4,
      price: 89,
    },
    {
      id: 2,
      picture: 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee2',
      rate: 4,
      price: 89,
    },
    {
      id: 3,
      picture: 'image/catalog/demo/product/270/e10.jpg',
      name: 'Sausage Cowbee3',
      rate: 4,
      price: 89,
    },
  ]

  const child = ({ item }) => (
    <div className="space-y-2 items-center">
      <div
        className="cursor-pointer hover:opacity-80"
        onClick={() => navigate('/product')}
      >
        <img src={item.picture} className="w-full h-[246px]" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-1 items-center justify-center">
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
          <i className="fa fa-star text-[#fec42d]" style={{ fontSize: 11 }}></i>
        </div>
        <div className="text-[13px] font-semibold">{item.name}</div>
        <div className="text-primary font-semibold">${item.price}.00</div>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div>
        <div className="uppercase font-semibold py-2">recommended</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <Carousel
        Child={child}
        items={products}
        index={currentPage}
        hideBtns={true}
      />

      <div className="flex space-x-2 items-center ml-[80px]">
        {[0, 1, 2].map((page) => (
          <motion.div
            key={page}
            className={
              'h-[8px] cursor-pointer rounded-full bg-' +
              (page === currentPage ? 'primary' : 'black')
            }
            animate={{ width: page == currentPage ? 30 : 8 }}
            onClick={() => setPage(page)}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

function LatestPosts() {
  const navigate = useNavigate()
  const posts = [
    {
      title: 'Biten demons lector in henderit in vulp nemusa tumps',
      date: 'December 4th, 2017',
      comments: [],
    },
    {
      title: 'Commodo laoreet semper tincidun sit dolor spums',
      date: 'November 15th, 2017',
      comments: [],
    },
  ]

  return (
    <div className="space-y-2">
      <div>
        <div className="uppercase font-semibold py-2">latest posts</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-2 items-center py-2">
        <div className="cursor-pointer hover:opacity-80">
          <img
            src="image/catalog/blog/1.jpg"
            className="w-full h-[170px] rounded"
          />
        </div>

        <div className="space-y-4 py-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className={
                'space-y-2 pb-4' + (index + 1 < posts.length ? ' border-b' : '')
              }
            >
              <div
                className="text-[13px] font-[600] cursor-pointer hover:text-primary"
                onClick={() => navigate('/blog-detail')}
              >
                {post.title}
              </div>
              <div className="flex space-x-2 items-center justify-between text-[#999] text-xs">
                <div className="flex space-x-1 items-center">
                  <i className="fa fa-calendar"></i>
                  <div>{post.date}</div>
                </div>
                <div className="flex space-x-1 items-center">
                  <i className="fa fa-comments"></i>
                  <div>{post.comments.length} Comment</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const [currentPage, setPage] = useState(1)

  const testimonials = [
    {
      author: 'Johny Walker',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    },
    {
      author: 'Johny Walker2',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    },
    {
      author: 'Johny Walker3',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    },
  ]

  const child = ({ item }) => (
    <div className="space-y-4 flex flex-col items-center">
      <div className="w-[86px] h-[86px] border-[3px] border-primary rounded-full cursor-pointer">
        <img
          src="image/catalog/demo/client/user-1.jpg"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="text-sm font-medium">{item.author}</div>
      <div className="px-2 space-x-2">
        <i
          className="fa fa-quote-left text-gray-300"
          style={{ fontSize: 22 }}
        ></i>
        <span className="text-xs text-gray-500 text-center">
          “{item.quote}”
        </span>
        <i
          className="fa fa-quote-right text-gray-300"
          style={{ fontSize: 22 }}
        ></i>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div>
        <div className="uppercase font-semibold py-2">testimonials</div>
        <div className="grid grid-cols-2">
          <div className="border-b-2 border-primary"></div>
          <div className="border-b-2 border-gray-400"></div>
        </div>
      </div>

      <div className="space-y-4 px-2 py-6 border rounded-md">
        <Carousel
          Child={child}
          items={testimonials}
          index={currentPage}
          hideBtns={true}
        />

        <div className="flex space-x-2 items-center ml-[80px]">
          {[0, 1, 2].map((page) => (
            <motion.div
              key={page}
              className={
                'h-[8px] cursor-pointer rounded-full bg-' +
                (page === currentPage ? 'primary' : 'black')
              }
              animate={{ width: page == currentPage ? 30 : 8 }}
              onClick={() => setPage(page)}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MiniBanners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mdp5:grid-cols-5 gap-[30px]">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="h-auto cursor-pointer hover:opacity-80">
          <img src="image/catalog/banners/cat1.jpg" className="w-full h-full" />
        </div>
      ))}
    </div>
  )
}

function Product({ product, showProgress = false }) {
  const [mouseOver, setMouseOver] = useState(false)
  const navigate = useNavigate()
  const ProgressBar = ({ progress }) => (
    <div className="flex">
      <div
        className="h-[14px] bg-primary rounded-l-lg"
        style={{ width: progress + '%' }}
      ></div>
      <div
        className="h-[14px] bg-gray-200 rounded-r-lg"
        style={{ width: 100 - progress + '%' }}
      ></div>
    </div>
  )

  return (
    <div
      className="space-y-2 w-full"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div
        className="h-[180px] cursor-pointer group relative"
        onClick={() => navigate('/product')}
      >
        <img
          src={product.picture}
          className="w-full h-full opacity-80 group-hover:opacity-100"
        />
        {product.discounted && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[5px] top-[5px]">
            <div className="text-xs font-semibold">11%</div>
          </div>
        )}
        {product.isNew && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[5px] top-[5px]">
            <div className="text-xs font-semibold">New</div>
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
                <div className="flex-auto flex space-x-2 items-center justify-between">
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary py-2 font-semibold px-3 text-white cursor-pointer capitalize rounded-full text-xs"
                  >
                    add to cart
                  </motion.div>

                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer"
                  >
                    <i className="fa fa-heart-o"></i>
                  </motion.div>
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer"
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
                {[1, 2, 3, 4, 5].map((sindex) => (
                  <i
                    key={sindex}
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
            <div className="flex space-x-2 items-center justify-center">
              <div className="text-primary font-semibold">
                ${product.discounted ? product.discountedPrice : product.price}
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

        {showProgress && (
          <div className="w-full space-y-2">
            <ProgressBar progress={product.totalSold.percentage} />
            <div className="flex items-center justify-center">
              <div className="text-[#333] text-xs">Sold:&nbsp;</div>
              <div className="text-primary text-[13px] font-semibold">
                {product.totalSold.total}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function FlashSale({ currentWidth }) {
  const flashSaleRef = useRef()
  const [width, setWidht] = useState(0)
  useEffect(() => setWidht(flashSaleRef.current.clientWidth), [])

  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 40,
        percentage: 40,
      },
    },
  ]

  const child = ({ item }) => <Product product={item} showProgress={true} />

  return (
    <div className="space-y-4">
      <div className="block xs:flex space-y-1 xs:space-y-0 xs:space-x-4 items-center">
        <div ref={flashSaleRef} className="py-1 uppercase text-xl font-bold">
          flash sale
        </div>

        <div className="xs:flex-auto xs:flex xs:space-x-2 items-center justify-between">
          <div className="flex space-x-2 items-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex space-x-2 items-center">
                <div className="bg-primary text-white text-lg px-[10px] rounded">
                  00
                </div>
                {index < 4 && <div className="text-lg font-bold">:</div>}
              </div>
            ))}
          </div>
          <div className="hidden xs:flex space-x-2 items-center text-[13px] cursor-pointer hover:text-primary">
            <div>View All</div>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div className="hidden xs:flex">
        <div className="border-b-2 border-primary" style={{ width }}></div>
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>

      <Carousel
        Child={child}
        items={[...products, ...products]}
        hideBtns={true}
        showChevrons={true}
        chevronY={-80}
        index={0}
        pageSize={
          currentWidth >= 1200
            ? 5
            : currentWidth >= 992
            ? 3
            : currentWidth >= 480
            ? 2
            : 1
        }
        showChevronsConditionally={false}
      />
    </div>
  )
}

function CatalogBanners() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="h-max-[225px] h-auto hidden md:block cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner3.jpg"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-4 md:col-span-2 h-max-[225px] h-auto cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner4.jpg"
          className="w-full h-full"
        />
      </div>
      <div className="h-max-[225px] h-auto hidden md:block cursor-pointer opacity-80 hover:opacity-100">
        <img
          src="image/catalog/banners/banner5.jpg"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

function ProductCategories({
  currentWidth,
  category,
  subCategories,
  hasLeftBannner = false,
  hasRightBanner = false,
}) {
  if (!category) category = 'Technology'
  if (!subCategories)
    subCategories = [
      'Smartphone',
      'Tablets',
      'Computer',
      'Accessories',
      'Hitech',
    ]
  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      isNew: true,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
  ]

  const child = ({ item }) => <Product product={item} />

  return (
    <div className="space-y-4">
      <div className="block mdp5:flex items-stretch justify-between space-y-2 mdp5:space-y-0">
        <div className="bg-primary inline-block text-white border-b-2 border-primary uppercase font-semibold py-2 px-4">
          {category}
        </div>
        <div className="flex-auto border-b-2 border-gray-200 flex space-x-4 items-center mdp5:justify-end">
          {subCategories.map((scategory, index) => (
            <div
              key={index}
              className="py-1 px-2 cursor-pointer text-gray-800 hover:text-primary"
            >
              {scategory}
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
        {hasLeftBannner && (
          <div className="md:w-[200px] h-[275px] cursor-pointer opacity-80 hover:opacity-100">
            <img
              src="image/catalog/demo/category/tab1.jpg"
              className="w-full h-full"
            />
          </div>
        )}

        <div className="md:flex-auto">
          <Carousel
            Child={child}
            items={[...products, ...products]}
            hideBtns={true}
            showChevrons={true}
            chevronY={-50}
            index={0}
            pageSize={
              currentWidth >= 1200
                ? 4
                : currentWidth >= 992
                ? 2
                : currentWidth >= 768
                ? 1
                : currentWidth >= 480
                ? 2
                : 1
            }
          />
        </div>

        {hasRightBanner && (
          <div className="md:w-[200px] h-[275px] cursor-pointer opacity-80 hover:opacity-100">
            <img
              src="image/catalog/demo/category/tab1.jpg"
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Technology({ currentWidth }) {
  const scategories = [
    'Smartphone',
    'Tablets',
    'Computer',
    'Accessories',
    'Hitech',
  ]
  return (
    <ProductCategories
      category="Technology"
      subCategories={scategories}
      hasLeftBannner={true}
      currentWidth={currentWidth}
    />
  )
}

function FurnitureNdecor({ currentWidth }) {
  const scategories = [
    'Living room',
    'Bathroom',
    'Bedroom',
    'Accessories',
    'Decor',
  ]
  return (
    <ProductCategories
      category="Furniture & decor"
      subCategories={scategories}
      hasRightBanner={true}
      currentWidth={currentWidth}
    />
  )
}

function FashionNaccessories({ currentWidth }) {
  const scategories = [
    'Smartphone',
    'Tablets',
    'Computer',
    'Accessories',
    'Hitech',
  ]
  return (
    <ProductCategories
      category="Fashion & accessories"
      subCategories={scategories}
      hasLeftBannner={true}
      currentWidth={currentWidth}
    />
  )
}

function NewArrivals({ currentWidth }) {
  const products = [
    {
      name: 'Pastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 51,
        percentage: 80,
      },
    },
    {
      name: 'Lommodo qulutvenla',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 62,
        percentage: 70,
      },
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 45,
        percentage: 70,
      },
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 30,
        percentage: 40,
      },
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 96.0,
      discounted: true,
      discountedPrice: 85,
      totalSold: {
        total: 40,
        percentage: 40,
      },
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  const child = ({ item }) => <Product product={item} />

  return (
    <div className="space-y-4">
      <div className="flex items-stretch">
        {['best seller', 'new arrivals', 'most rating'].map((title, index) => (
          <div
            key={index}
            className={
              'py-1 pr-12 uppercase text-lg font-semibold cursor-pointer hover:text-primary border-b-2 ' +
              (activeTab !== index
                ? 'border-gray-300'
                : 'border-primary text-primary')
            }
            onClick={() => setActiveTab(index)}
          >
            {title}
          </div>
        ))}
        <div className="flex-auto border-b-2 border-gray-300"></div>
      </div>

      <Carousel
        Child={child}
        items={[...products, ...products]}
        hideBtns={true}
        showChevrons={true}
        chevronY={-50}
        index={0}
        pageSize={
          currentWidth >= 1200
            ? 5
            : currentWidth >= 992
            ? 3
            : currentWidth >= 768
            ? 2
            : 1
        }
      />
    </div>
  )
}

function BrandsCarousel() {
  const child = ({ item }) => (
    <div className="grid grid-cols-7 gap-0">
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div
          key={index}
          className="h-[71px] opacity-80 hover:opacity-100 cursor-pointer"
        >
          <img src="image/catalog/brands/b1.png" className="w-full h-full" />
        </div>
      ))}
    </div>
  )
  return (
    <div className="p-[30px] border border-gray-200 rounded">
      <Carousel
        Child={child}
        items={[1, 2, 3]}
        hideBtns={true}
        showChevrons={true}
        chevronlX={-18}
        chevronrX={18}
        showChevronsConditionally={false}
      />
    </div>
  )
}

export default function Home() {
  const [currentWidth, setCurrentWidth] = useState()
  const handleResize = function () {
    setCurrentWidth(document.body.clientWidth)
  }

  useEffect(() => {
    setCurrentWidth(document.body.clientWidth)
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <div className="grid grid-cols-4 gap-8 w-full px-[15px] md:px-0 md:w-[80%] lgp8:w-[95%] mx-auto py-8">
      <div className="col-span-4 lgp8:col-span-3 flex lgp8:space-x-8">
        <div className="hidden lgp8:block" style={{ width: 237 }}></div>
        <div className="flex-auto bg-gray-50 h-[300px]">
          <ImageCarouse />
        </div>
      </div>
      <BestSelling />
      <div className="col-span-4 md:flex md:space-x-8 space-y-4 md:space-y-0">
        <div className="space-y-8 md:w-[237px] shrink-0">
          <div className="h-[390px] cursor-pointer">
            <img
              src="image/catalog/banners/banner1.jpg"
              className="w-full h-full"
            />
          </div>

          <LatestProducts />
          <Features />
          <Recommended />
          <LatestPosts />
          <Testimonials />

          <div className="h-[390px] cursor-pointer">
            <img
              src="image/catalog/banners/banner2.jpg"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="md:flex-auto space-y-8">
          <MiniBanners />
          <FlashSale currentWidth={currentWidth} />
          <CatalogBanners />
          <Technology currentWidth={currentWidth} />
          <FurnitureNdecor currentWidth={currentWidth} />
          <FashionNaccessories currentWidth={currentWidth} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {[1, 2].map((index) => (
              <div
                key={index}
                className="opacity-80 hover:opacity-100 cursor-pointer"
              >
                <img
                  src="image/catalog/banners/bn1.jpg"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          <NewArrivals currentWidth={currentWidth} />
          <BrandsCarousel />
        </div>
      </div>
    </div>
  )
}
