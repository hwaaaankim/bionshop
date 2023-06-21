import { motion } from 'framer-motion'
//import { background } from 'public/image/icon/contact-icon.png'
import { useNavigate } from 'react-router-dom'

function SocialMedia() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white bg-primary py-[30px] px-[25px] rounded items-center">
      <div className="flex">
        <div className="uppercase font-semibold text-xl xl:pr-3 xl:mt-1 xl:block hidden">
          follow socials
        </div>
        <ul className="flex">
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'fa fa-facebook'} />
          </li>
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-twitter'} />
          </li>
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-google-plus'} />
          </li>
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-pinterest'} />
          </li>
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-youtube-play'} />
          </li>
          <li className="w-11 h-11 flex justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-linkedin'} />
          </li>
          <li className="sm:flex hidden w-11 h-11 justify-center float-let items-center mx-1 cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm">
            <i className={'text-[12px] fa fa-skype'} />
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="uppercase font-semibold pr-5 mt-2 lg:block hidden text-lg leading-10">
          signup for newsletter
        </div>
        <div className="flex-auto flex">
          <input
            className="flex-auto py-2 px-2 text-xs bg-white text-gray-700 rounded-l outline-none"
            placeholder="Your email address..."
          />
          <div className="uppercase bg-[#222] text-white text-sm font-semibold px-4 flex items-center rounded-r">
            subscribe
          </div>
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div>
      <img
        src="image/catalog/logo-footer.png"
        style={{ width: 203, height: 41 }}
      />
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="flex flex-col space-x-3">
      <a href="#">
        <img
          className="max-w-[100%]"
          src="image/catalog/logo-footer.png"
          style={{ width: 203, height: 41 }}
        />
      </a>
      <div className="flex mt-8">
        <img src="image/icon/icon-contact.png" />
        <div className="flex-auto space-y-6 text-gray-2 text-xs ml-3">
          <div className="text-[11px]">
            San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SPL,
            Mexico
          </div>
          <div className="text-[11px]">
            (+0214)0 315 215 - (+0214)0 <br />
            315 215
          </div>
          <div className="text-[11px] cursor-pointer">
            Contact@Opencartworks.Com
          </div>
          <div className="text-[11px]">Open Time: 8:00AM - 6:00PM</div>
        </div>
      </div>
    </div>
  )
}

function SpecialLink({ title, to }) {
  const navigate = useNavigate()
  return (
    <div
      className="flex space-x-2 items-center cursor-pointer text-gray-700 hover:text-primary"
      onClick={() => (!to ? null : navigate(to))}
    >
      <i className="fa fa-dot-circle-o" style={{ fontSize: 8 }} />
      <div className="text-xs">{title}</div>
    </div>
  )
}

function InformationNavs() {
  const navs = [
    { path: '/about', title: 'About Us' },
    { path: '/faq', title: 'FAQ' },
    { path: '', title: 'Warranty And Services' },
    { path: '', title: 'Support 24/7 page' },
    { path: '', title: 'Product Registration' },
    { path: '', title: 'Product Support' },
  ]
  return (
    <div>
      <div className="uppercase font-semibold">INFORMATION</div>
      <div className="bg-primary w-[70px] h-[2px]"></div>
      <div className="space-y-4 mt-8">
        {navs.map((nav, index) => (
          <SpecialLink key={index} title={nav.title} to={nav.path} />
        ))}
      </div>
    </div>
  )
}
function AccountNavs() {
  const navs = [
    { path: '', title: 'Brands' },
    { path: '', title: 'Gift Certificates' },
    { path: '', title: 'Affiliates' },
    { path: '', title: 'Specials' },
    { path: '/faq', title: 'FAQs' },
    { path: '', title: 'Custom Link' },
  ]
  return (
    <div>
      <div className="uppercase font-semibold">MY ACCOUNT</div>
      <div className="bg-primary w-[70px] h-[2px]"></div>
      <div className="space-y-4 mt-8">
        {navs.map((nav, index) => (
          <SpecialLink key={index} title={nav.title} to={nav.path} />
        ))}
      </div>
    </div>
  )
}
function CategoryNavs() {
  const titles = [
    'Event & Party Supplies',
    'Home Improvement',
    'Lamps & Light Fixtures',
    'Kitchen & Bath Fixtures',
    'Customer Service',
    'Kitchen & Dining',
  ]
  return (
    <div>
      <div className="uppercase font-semibold">CATEGORIES</div>
      <div className="bg-primary w-[70px] h-[2px]"></div>
      <div className="space-y-4 mt-8">
        {titles.map((title, index) => (
          <SpecialLink key={index} title={title} />
        ))}
      </div>
    </div>
  )
}
function ServiceNavs() {
  const navs = [
    { path: '/contact_us', title: 'Contact Us' },
    { path: '/product_return', title: 'Returns' },
    { path: '', title: 'Support' },
    { path: '', title: 'Site Map' },
    { path: '', title: 'Customer Service' },
    { path: '', title: 'Custom Link' },
  ]
  return (
    <div>
      <div className="uppercase font-semibold">SERVICES</div>
      <div className="bg-primary w-[70px] h-[2px]"></div>
      <div className="space-y-4 mt-8">
        {navs.map((nav, index) => (
          <SpecialLink key={index} title={nav.title} to={nav.path} />
        ))}
      </div>
    </div>
  )
}

function FooterBottom() {
  const navigate = useNavigate()
  const navs = [
    { path: '/about', title: 'about us' },
    { path: '', title: 'customer service' },
    { path: '', title: 'privacy policy' },
    { path: '', title: 'site map' },
    { path: '/order_history', title: 'orders and returns' },
    { path: '/contact_us', title: 'contact us' },
  ]
  return (
    <div className="border-t border-solid text-center mx-auto my-auto">
      <div className="flex flex-col space-y-12 items-center w-[90%] sm:w-[750px] xl:w-[95%] md:w-[930px] pt-10 text-center pb-6 mx-0 my-auto">
        <img
          src="image/catalog/demo/payment/pay1.jpg"
          className="w-[507px] h-[51]"
        />
        <div className="flex flex-col items-center space-y-12 sm:w-[80%] mx-auto">
          <ul>
            {navs.map((nav, key) => (
              <li
                key={key}
                className="uppercase text-xs font-semibold text-gray-800 hover:text-primary cursor-pointer inline-block px-3"
                onClick={() => (!nav.path ? null : navigate(nav.path))}
              >
                {nav.title}
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-2 text-center">
            **$50 off orders $350+ with the code BOO50. $75 off orders $500+
            with the code BOO75. $150 off orders $1000+ with the code BOO150.
            Valid from October 28, 2016 to October 31, 2016. Offer may not be
            combined with any other offers or promotions, is non-exchangeable
            and non-refundable. Offer valid within the US only.
          </p>
        </div>
        <img
          src="image/catalog/demo/payment/pay1.jpg"
          className="w-[507px] h-[40px]"
        />
      </div>
    </div>
  )
}

function PoweredBy() {
  return (
    <div className="flex items-center justify-center bg-[#222] text-white py-[25px] text-xs">
      SuperMarket © 2018 Demo Store. All Rights Reserved. Designed by&nbsp;
      <span className="cursor-pointer hover:text-primary">
        OpenCartWorks.Com
      </span>
    </div>
  )
}
export default function Footer() {
  return (
    <footer className="mt-32 bg-[#f5f5f5]">
      <div className="sm:px-5">
        <motion.div animate={{ y: -40 }} className="mt-[-50px] mb-[-15px]">
          <SocialMedia />
        </motion.div>
      </div>
      <div className="px-5">
        <div className="pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
          <ContactInfo />
          <InformationNavs />
          <AccountNavs />
          <CategoryNavs />
          <ServiceNavs />
          <CategoryNavs />
        </div>
        <FooterBottom />
      </div>
      <PoweredBy />
    </footer>
  )
}
