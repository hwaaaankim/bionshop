import { Link } from 'react-router-dom'
import { Dropdown } from './HeaderTop'

function CategoriesMenu() {
  return (
    <div>
      <div className="flex space-x-2 justify-between items-center bg-black px-4 py-[10px] w-[237px] rounded-t">
        <div className="flex space-x-2 items-center">
          <i className="fa fa-bars" style={{ fontSize: 16 }} />
          <div className="uppercase text-base font-medium">all categories</div>
        </div>
        <i className="fa fa-angle-down" style={{ fontSize: 16 }} />
      </div>
    </div>
  )
}

function HomeDropDown() {
  const content = (
    <div className="p-10 flex space-x-8">
      {[
        'Home page - (default)',
        'Home page - layout 2',
        'Home page - layout 3',
        'Home page - rtl',
      ].map((title, index) => (
        <div key={index} className="w-[110px] space-y-2 cursor-pointer group">
          <img
            src="image/catalog/menu/home-1.jpg"
            className="w-full h-[60px]"
          />
          <div className="uppercase text-center text-xs text-gray-700 font-semibold group-hover:text-primary">
            {title}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <Link to="/" className="uppercase text-sm font-semibold">
            home
          </Link>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function FeaturesDropDown() {
  const navs = [
    {
      title: 'Listing',
      links: [
        { name: 'category page 1', path: 'category' },
        { name: 'category page 2', path: 'catrgory_two' },
        { name: 'category page 3', path: 'catrgory_three' },
      ],
    },
    {
      title: 'product',
      links: [
        { name: 'product page 1', path: 'product_one' },
        { name: 'product page 2', path: 'product' },
      ],
    },
    {
      title: 'shopping',
      links: [
        { name: 'shopping cart', path: 'cart' },
        { name: 'checkout', path: 'checkout' },
        { name: 'compare', path: 'compare' },
        { name: 'wishlist', path: 'wish_list' },
      ],
    },
    {
      title: 'my account',
      links: [
        { name: 'login', path: 'login' },
        { name: 'register', path: 'register' },
        { name: 'my account', path: 'my_account' },
        { name: 'order history', path: 'order_history' },
        { name: 'order information', path: 'order_info' },
        { name: 'product returns', path: 'product_return' },
        { name: 'gift voucher', path: 'gift_voucher' },
      ],
    },
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="uppercase text-gray-700 font-semibold cursor-pointer hover:text-primary border-b pb-2">
            {nav.title}
          </div>
          <div className="space-y-4">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="capitalize text-xs cursor-pointer hover:text-primary"
              >
                <Link to={link.path}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">features</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function PagesDropDown() {
  const navs = [
    {
      links: [
        { name: 'FAQ', path: 'faq' },
        { name: 'Site Map' },
        { name: 'Contact us', path: 'contact_us' },
        { name: 'Banner' },
        { name: 'Effect' },
      ],
    },
    {
      links: [
        { name: 'About us 1', path: 'about' },
        { name: 'About us 2', path: '' },
        { name: 'About us 3', path: '' },
        { name: 'About us 4', path: '' },
      ],
    },
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="space-y-4">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="text-xs cursor-pointer hover:text-primary"
              >
                <Link to={link.path}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">pages</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function CategoriesDropDown() {
  const navs = [
    {
      title: 'Automotive',
      links: [
        'car alarms & security',
        'car audio & speakers',
        'Gadgets & auto parts',
        'more car accessories',
      ],
    },
    {
      title: 'furnitures',
      links: ['bathroom', 'bedroom', 'decor', 'living room'],
    },
    {
      title: 'jewelry & watches',
      links: ['earings', 'wedding rings', 'men watches'],
    },
    {
      title: 'electronics',
      links: ['computer', 'smartphone', 'tablets', 'monitors'],
    },
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="opacity-80 hover:opacity-100 cursor-pointer w-[120px] h-[60px]">
            <img
              src="image/catalog/menu/megabanner/image-3.jpg"
              className="w-full h-full"
            />
          </div>
          <div className="uppercase text-gray-700 font-semibold cursor-pointer hover:text-primary border-b pb-2">
            {nav.title}
          </div>
          <div className="space-y-2">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="capitalize text-sm cursor-pointer hover:text-primary"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown
      placement="bottom"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">categories</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function Accessories() {
  return (
    <div className="uppercase text-sm font-semibold cursor-pointer hover:text-black">
      accessories
    </div>
  )
}

function Blog() {
  return (
    <div className="uppercase text-sm font-semibold cursor-pointer hover:text-black">
      <Link to="blog">Blog</Link>
    </div>
  )
}

function AccountNav() {
  return (
    <div className="flex space-x-4 items-center justify-end text-[12px]">
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-1 items-center cursor-pointer hover:text-black">
          <i className="fa fa-lock" />
          <Link to="/login">
            <div>Login</div>
          </Link>
        </div>
        <div>or</div>
        <Link to="/register">
          <div className="cursor-pointer hover:text-black">Register</div>
        </Link>
      </div>

      <div className="border border-l h-4 border-white"></div>

      <div className="flex space-x-1 items-center">
        <i className="fa fa-phone-square" />
        <div>Hotline (+123)4 567 890</div>
      </div>
    </div>
  )
}

export default function HeaderBottom() {
  return (
    <div className="flex items-center mdp5:space-x-8 text-white px-[2.5%]">
      <div className="hidden mdp5:flex space-x-8 items-end">
        <CategoriesMenu />
        <HomeDropDown />
        <FeaturesDropDown />
        <PagesDropDown />
        <CategoriesDropDown />
      </div>
      <div className="hidden mdp5:flex space-x-8 items-center">
        <Accessories />
        <Blog />
      </div>
      <div className="flex-auto pt-2 hidden lgp8:block">
        <AccountNav />
      </div>
      <div className="flex-auto flex mdp5:hidden items-center justify-between">
        <div className="flex space-x-2 items-center py-1 cursor-pointer">
          <i className="fa fa-bars"></i>
          <div className="uppercase text-sm">all categories</div>
        </div>
        <div className="py-1 px-2">
          <i className="fa fa-bars" style={{ fontSize: 20 }}></i>
        </div>
      </div>
    </div>
  )
}
