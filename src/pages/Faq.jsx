import Icon from '../components/icon/Icon'
import { More, Less } from '../components/product/svg'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
const Faq = () => {
  const [isActive, setIsActive] = useState('0')
  // const handleToggle = (index) => {
  //   if (isActive === index) {
  //     return setIsActive('0')
  //   }
  //   setIsActive(index)
  // }
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-xs font-body w-[95%] max-w-[1650px] leading-6">
      {/* Breadcrumb */}
      <ul className="flex mt-6 mb-11 leading-normal text-gray-2 space-x-3 ">
        <li>
          <a href="#">
            <i className="fa fa-home ml-2  hover:text-blue-3"></i>
          </a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="8"></Icon>
        </li>
        <li className=" hover:text-primary">
          <a href="#">Account</a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="8"></Icon>
        </li>
        <li className=" hover:text-primary">
          <a href="#">Page</a>
        </li>
        <li>
          <Icon className="mt-1" id="chevronRight" size="9"></Icon>
        </li>
        <li className="text-primary text-sm">
          <a href="/faq">Faq</a>
        </li>
      </ul>
      <div className="">
        <div className="mb-4">
          <h3 className="text-xl mb-2">Got Questions? We’ve Got Answers!</h3>
          <p>
            Asunt in anim uis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in anim id est laborum.
            Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in anim id est laborum.
          </p>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque.
                  </p>
                  <p>
                    Nullam ac nisi non eros gravida venenatis. Ut euismod,
                    turpis sollicitudin lobortis pellentesque, libero massa
                    dapibus dui, eu dictum justo urna et mi. Integer dictum est
                    vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis
                    ut, vestibulum eu, tincidunt vel, nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    Donec eros tellus scelerisque nec rhoncus eget laoreet sit
                    amet
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque.
                  </p>
                  <p>
                    Nullam ac nisi non eros gravida venenatis. Ut euismod,
                    turpis sollicitudin lobortis pellentesque, libero massa
                    dapibus dui, eu dictum justo urna et mi. Integer dictum est
                    vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis
                    ut, vestibulum eu, tincidunt vel, nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    Curabitur molestie euismod erat. Proin eros odio?
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque.
                  </p>
                  <p>
                    Nullam ac nisi non eros gravida venenatis. Ut euismod,
                    turpis sollicitudin lobortis pellentesque, libero massa
                    dapibus dui, eu dictum justo urna et mi. Integer dictum est
                    vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis
                    ut, vestibulum eu, tincidunt vel, nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    In scelerisque sem at dolor. Maecenas mattis
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque. Nullam ac nisi non eros
                    gravida venenatis. Ut euismod, turpis sollicitudin lobortis
                    pellentesque, libero massa dapibus dui, eu dictum justo urna
                    et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla
                    mauris ipsum, convallis ut, vestibulum eu, tincidunt vel,
                    nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    Nunc feugiat mi a tellus consequat imperdiet
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque. Nullam ac nisi non eros
                    gravida venenatis. Ut euismod, turpis sollicitudin lobortis
                    pellentesque, libero massa dapibus dui, eu dictum justo urna
                    et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla
                    mauris ipsum, convallis ut, vestibulum eu, tincidunt vel,
                    nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    Vestibulum ante ipsum primis in faucibus orci luctus
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque. Nullam ac nisi non eros
                    gravida venenatis. Ut euismod, turpis sollicitudin lobortis
                    pellentesque, libero massa dapibus dui, eu dictum justo urna
                    et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla
                    mauris ipsum, convallis ut, vestibulum eu, tincidunt vel,
                    nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <div>
                <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                  <div className="bg-[#a0a0a0] p-2 w-10">
                    {open ? (
                      <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    ) : (
                      <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                    )}
                  </div>
                  <h3 className="text-[17px] p-2">
                    SmartAddons membership fee is one-time fee, or I have to pay
                    extra?
                  </h3>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                  <p>
                    Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                    aliquet. Phasellus id nisi vitae odio pretium aliquam.
                    Pellentesque a leo. Donec consequat lectus sed felis.
                    Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec
                    et mi eu massa ultrices scelerisque. Nullam ac nisi non eros
                    gravida venenatis. Ut euismod, turpis sollicitudin lobortis
                    pellentesque, libero massa dapibus dui, eu dictum justo urna
                    et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla
                    mauris ipsum, convallis ut, vestibulum eu, tincidunt vel,
                    nisi.
                  </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
export default Faq
