import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { More, Less } from './svg'
import React from 'react'

type Props = {
  title: string
  body: string[]
}

const Disclosure = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border-b border-dotted border-[#e4e4e4] py-1.5">
      <button
        aria-controls={props.title}
        aria-expanded={isOpen}
        className="flex text-left items-center justify-between w-full m-0"
      >
        <div className="text-[#333] font-normal capitalize hover:text-[#094bad] text-[12px]">
          <a href="category">{props.title}</a>
        </div>
        {props.body ? (
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isOpen ? 'minus' : 'plus'}
                initial={{
                  rotate: isOpen ? -90 : 90,
                }}
                animate={{
                  rotate: 0,
                  transition: {
                    type: 'tween',
                    duration: 0.15,
                    ease: 'circOut',
                  },
                }}
                exit={{
                  rotate: isOpen ? -90 : 90,
                  transition: {
                    type: 'tween',
                    duration: 0.15,
                    ease: 'circIn',
                  },
                }}
              >
                {isOpen ? <Less /> : <More />}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          ''
        )}
      </button>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: 'auto',
                opacity: 1,
                display: 'block',
                transition: {
                  height: {
                    duration: 0.6,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.6,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: 'none',
                },
              }
        }
        className="font-light"
      >
        {props.body ? (
          <div className="ml-8">
            {props.body.map((faq, i) => (
              <a
                href="#"
                key={i}
                className="flex flex-col py-2 text-[#333] hover:text-[#094bad] text-xs font-normal cursor-pointer"
              >
                <a href="category">{faq}</a>
              </a>
            ))}
          </div>
        ) : (
          ''
        )}
      </motion.div>
    </div>
  )
}

export default function App() {
  const categories = [
    {
      name: 'Smartphone & Tablets',
      sub: [
        "Mens's Watches",
        "Women's Watches",
        "Kid's Watches",
        'Accessories',
      ],
    },
    {
      name: 'Electronics',
      sub: ['Cycling', 'Running', 'Swimming', 'Football'],
    },
    {
      name: 'Shoes',
      sub: [
        "Mens's Watches",
        "Women's Watches",
        "Kid's Watches",
        'Accessories',
      ],
    },
    {
      name: 'Watches',
      sub: [
        "Mens's Watches",
        "Women's Watches",
        "Kid's Watches",
        'Accessories',
      ],
    },
    {
      name: 'Jewellery',
      sub: [
        "Mens's Watches",
        "Women's Watches",
        "Kid's Watches",
        'Accessories',
      ],
    },
    { name: 'Health & Beauty' },
    { name: 'Kids & Babies' },
    { name: 'Sports' },
    { name: 'Home & Garden' },
    { name: 'Wines & Spirits' },
  ]
  return (
    <div className="border border-[#d7d7d7] overflow-hidden mb-10 rounded-[3px]">
      <h3 className="border-b border-[#d7d7d7] text-[16px] text-[#222] font-bold uppercase bg-[#f5f5f5] p-[15px]">
        Categories
      </h3>
      <div className="flex flex-col w-full p-5 justify-center items-center text-left">
        {categories.map((faq, i) => (
          <Disclosure key={i} title={faq.name} body={faq.sub} />
        ))}
      </div>
    </div>
  )
}
