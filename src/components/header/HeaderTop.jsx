import Tippy from '@tippyjs/react/headless'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Dropdown({
  placement = 'bottom-end',
  hasPadding = 'true',
  bordered = true,
  content,
  children,
}) {
  const initial = { animate: { rotateX: 90, originY: 0 } }
  const [variants, setVariants] = useState(initial)

  const onShow = () => {
    setVariants({ animate: { rotateX: 0 } })
  }
  const onHide = () => {
    setVariants({ animate: { rotateX: 90 } })
  }

  const contentAnimated = (attrs) => (
    <motion.div
      variants={variants}
      animate="animate"
      transition={{ duration: 0.2 }}
      className={
        'bg-white ' +
        (bordered ? 'border ' : '') +
        (hasPadding ? 'px-4 py-2' : '') +
        ' shadow-lg overflow-clip text-gray-500'
      }
      {...attrs}
    >
      {content}
    </motion.div>
  )

  return (
    <Tippy
      render={contentAnimated}
      placement={placement}
      interactive={true}
      // visible={visible}
      onShow={onShow}
      onHide={onHide}
    >
      {children}
    </Tippy>
  )
}

function Currencies() {
  const currencies = [
    { icon: '€', name: 'Euro' },
    { icon: '€', name: 'Pounds' },
    { icon: '$', name: 'US Dollar' },
  ]
  const content = (
    <div>
      {currencies.map((item, index) => (
        <div
          key={index}
          className="p-2 hover:text-primary cursor-pointer"
          style={{ fontSize: 12 }}
        >
          <a href="#">
            ({item.icon})&nbsp;{item.name}
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown content={content}>
      <div className="text-gray-500 hover:text-primary cursor-pointer flex space-x-0.5 items-center">
        <div>$ US Dollar</div>
        <i className="fa fa-angle-down" style={{ fontSize: 10 }} />
      </div>
    </Dropdown>
  )
}

function Languages() {
  const languages = ['English', 'Arabic']
  const content = (
    <div>
      {languages.map((language, index) => (
        <div
          key={index}
          className="p-2 hover:text-primary cursor-pointer flex space-x-1 items-center"
          style={{ fontSize: 12 }}
        >
          <img
            src="image/catalog/flags/gb.png"
            style={{ width: 16, height: 11 }}
          />
          <a href="#">{language}</a>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown content={content}>
      <div className="text-gray-500 hover:text-primary cursor-pointer flex space-x-0.5 items-center">
        <img
          src="image/catalog/flags/gb.png"
          style={{ width: 16, height: 11 }}
        />
        <div>English</div>
        <i className="fa fa-angle-down" style={{ fontSize: 10 }} />
      </div>
    </Dropdown>
  )
}

function AccountNavs() {
  const accountNavs = [
    { icon: 'user', title: 'Register', path: 'register' },
    { icon: 'pencil-square-o', title: 'Log in', path: 'login' },
  ]
  const content = (
    <div>
      {accountNavs.map((nav, index) => (
        <div
          key={index}
          className="p-2 hover:text-primary cursor-pointer flex space-x-1 items-center"
          style={{ fontSize: 12 }}
        >
          <i className={'fa fa-' + nav.icon} style={{ fontSize: 12 }} />
          <Link to={nav.path}>{nav.title}</Link>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown content={content}>
      <div className="text-gray-500 hover:text-primary cursor-pointer flex space-x-1 items-center">
        <i className="fa fa-user" style={{ fontSize: 12 }} />
        <div className="hidden md:block" style={{ fontSize: 12 }}>
          My Account
        </div>
        <i className="fa fa-caret-down" style={{ fontSize: 10 }} />
      </div>
    </Dropdown>
  )
}

export default function HeaderTop() {
  return (
    <div className="flex space-x-2 items-center px-[2.5%] py-2">
      <div
        className="flex-auto leading-9 text-gray-500 hidden min-[1200px]::flex"
        style={{ fontSize: 12 }}
      >
        Welcome to SuperMarket! Wrap new offers / gift every single day on
        Weekends - New Coupon code:&nbsp;
        <span className="text-primary">Happy2018</span>
      </div>
      <div className="flex-auto flex min-[1200px]::hidden">
        <AccountNavs />
      </div>
      <div className="flex space-x-5 items-center" style={{ fontSize: 12 }}>
        <Currencies />
        <div className="h-3 bg-gray-400" style={{ width: 0.5 }}></div>
        <Languages />
      </div>
    </div>
  )
}
