import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductTab() {
  return (
    <div className="my-10 sm:pr-[15px]">
      <div className="mt-20 float-left w-full">
        <Tab.Group>
          <Tab.List className="bg-[#f5f5f5] sm:p-4 p-3 space-y-2 rounded text-center flex flex-col sm:flex-row justify-center space-x-3">
            {['Description', 'Reviews(1)', 'Tags', 'Custom Tab'].map((title, index) => (
              <Tab
                key={index}
                className={({ selected }) => classNames(
                  'text-sm text-[#222] py-3 px-6 cursor-pointer uppercase border border-[#e8e8e8] rounded-full',
                  ' bg-[#fff] hover:border-[#222] hover:text-[#222] hover:bg-[#f2f2f2]',
                  selected ? 'bg-gray-100 border-[#222222]' : ''
                )
                }
              >
                <span className='font-extrabold'>{title}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="py-11 bg-white border-none text-[#666] leading-5">
            <Tab.Panel id="tab-1" className="tab-pane fade transition-opacity duration-75">
              <p className="mb-2.5 text-sm leading-6">
                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                pixel resolution. Designed specifically for the creative professional,
                this display provides more space for easier access to all the tools
                and palettes needed to edit, format and composite your work. Combine
                this display with a Mac Pro, MacBook Pro, or PowerMac G5 and there's
                no limit to what you can achieve. <br />
                <br />
                The Cinema HD features an active-matrix liquid crystal display that
                produces flicker-free images that deliver twice the brightness, twice
                the sharpness and twice the contrast ratio of a typical CRT display.
                Unlike other flat panels, it's designed with a pure digital interface
                to deliver distortion-free images that never need adjusting. With over
                4 million digital pixels, the display is uniquely suited for
                scientific and technical applications such as visualizing molecular
                structures or analyzing geological data. <br />
                <br />
                Offering accurate, brilliant color performance, the Cinema HD delivers
                up to 16.7 million colors across a wide gamut allowing you to see
                subtle nuances between colors from soft pastels to rich jewel tones. A
                wide viewing angle ensures uniform color from edge to edge. Apple's
                ColorSync technology allows you to create custom profiles to maintain
                consistent color onscreen and in print. The result: You can
                confidently use this display in all your color-critical applications.
                <br />
                <br />
                Housed in a new aluminum design, the display has a very thin bezel
                that enhances visual accuracy. Each display features two FireWire 400
                ports and two USB 2.0 ports, making attachment of desktop peripherals,
                such as iSight, iPod, digital and still cameras, hard drives, printers
                and scanners, even more accessible and convenient. Taking advantage of
                the much thinner and lighter footprint of an LCD, the new displays
                support the VESA (Video Electronics Standards Association) mounting
                interface standard. Customers with the optional Cinema Display VESA
                Mount Adapter kit gain the flexibility to mount their display in
                locations most appropriate for their work environment.
                <br />
                <br />
                The Cinema HD features a single cable design with elegant breakout for
                the USB 2.0, FireWire 400 and a pure digital connection using the
                industry standard Digital Video Interface (DVI) interface. The DVI
                connection allows for a direct pure-digital connection.<br />
              </p>
              <h3 className="font-semibold text-lg mt-5 mb-2.5">Features:</h3>
              <p className="mb-2.5 text-sm">Unrivaled display performance</p>
              <ul className="text-sm leading-6">
                <li>
                  30-inch (viewable) active-matrix liquid crystal display provides
                  breathtaking image quality and vivid, richly saturated color.
                </li>
                <li>
                  Support for 2560-by-1600 pixel resolution for display of high
                  definition still and video imagery.
                </li>
                <li>
                  Wide-format design for simultaneous display of two full pages of
                  text and graphics.
                </li>
                <li>
                  Industry standard DVI connector for direct attachment to Mac- and
                  Windows-based desktops and notebooks
                </li>
                <li>
                  Incredibly wide (170 degree) horizontal and vertical viewing angle
                  for maximum visibility and color performance.
                </li>
                <li>
                  Lightning-fast pixel response for full-motion digital video
                  playback.
                </li>
                <li>
                  Support for 16.7 million saturated colors, for use in all
                  graphics-intensive applications.
                </li>
              </ul>
              <p className="mb-2.5 text-sm">Simple setup and operation</p>
              <ul className="text-sm leading-6">
                <li className="leading-6">
                  Single cable with elegant breakout for connection to DVI, USB and
                  FireWire ports
                </li>
                <li className="leading-6">
                  Built-in two-port USB 2.0 hub for easy connection of desktop
                  peripheral devices.
                </li>
                <li className="leading-6">
                  Two FireWire 400 ports to support iSight and other desktop
                  peripherals
                </li>
              </ul>
              <p className="mb-2.5 text-sm">Sleek, elegant design</p>
              <ul className="text-sm leading-6">
                <li>Huge virtual workspace, very small footprint.</li>
                <li>
                  Narrow Bezel design to minimize visual impact of using dual displays
                </li>
                <li>Unique hinge design for effortless adjustment</li>
                <li>
                  Support for VESA mounting solutions (Apple Cinema Display VESA Mount
                  Adapter sold separately)
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel id="tab-review" className="opacity-100 my-5">
              <form>
                <div id="review">
                  <table className="border border-[#ddd] w-full mb-5 bg-transparent border-collapse">
                    <tbody>
                      <tr className="bg-[#f9f9f9]">
                        <td className="w-1/2 border border-[#ddd] p-2 leading-3 align-top text-sm font-bold">
                          <strong>Super Administrator</strong>
                        </td>
                        <td className=" text-xs w-1/2 border border-[#ddd] p-2 leading-3 align-top text-right">29/07/2015</td>
                      </tr>
                      <tr>
                        <td className="border border-[#ddd] p-2 align-top leading-3">
                          <p className="text-sm mb-2.5">Best this product opencart</p>
                          <div className="text-[#666]">
                            <div className="align-middle inline-block">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#666]">
                                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-right"></div>
                </div>
                <h2 id="review-title" className="text-xl font-semibold">Write a review</h2>
                <div className="text-[#666] text-xs leading-6">
                  <div className="mb-4">
                    <span className="icon icon-user"></span>
                    <input
                      type="text"
                      name="name" className="w-full h-9 py-1.5 px-3 text-sm leading-5 text-[#555] bg-white border border-[#ccc] rounded focus:border-[#66afe9] focus:outline-none shadow-sm"
                      value="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="icon icon-bubbles-2"></span>
                    <textarea
                      className="resize-none h-auto w-full py-1.5 px-3 text-sm leading-6 text-[#555] bg-white border border-[#ccc] rounded shadow-sm focus:border-[#66afe9] focus:outline-none"
                      name="text"
                    >
                      Your Review</textarea
                    >
                  </div>
                  <span className="text-xs"
                  ><span className="text-danger bg-[#a94442] px-1.5 py-1 mt-1.5 rounded text-white">Note:</span> HTML is not
                    translated!</span
                  >

                  <div className="mb-4 space-x-1">
                    <b className="font-bold">Rating</b> <span>Bad</span>&nbsp;
                    <input type="radio" name="rating" value="1" className="my-1 leading-normal" /> &nbsp;
                    <input type="radio" name="rating" value="2" className="my-1 leading-normal" /> &nbsp;
                    <input type="radio" name="rating" value="3" className="my-1 leading-normal" /> &nbsp;
                    <input type="radio" name="rating" value="4" className="my-1 leading-normal" /> &nbsp;
                    <input type="radio" name="rating" value="5" className="my-1 leading-normal" />
                    &nbsp;<span>Good</span>
                  </div>
                  <div className="clear-both">
                    <a id="button-review" className="mt-3 py-2 px-3 mr-2.5 bg-[#808080] text-white border border-[#808080] text-sm font-normal cursor-pointer">Continue</a>
                  </div>
                </div>
              </form>
            </Tab.Panel>
            <Tab.Panel id="tab-4" className="text-sm">
              <a href="#" className="cursor-pointer text-[#555]">Monitor</a>,
              <a href="#" className="cursor-pointer text-[#555]">Apple</a>
            </Tab.Panel>
            <Tab.Panel id="tab-5" className="text-sm">
              <p className="mb-2.5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <p className="mb-2.5">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <p className="mb-2.5">
                Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div >
    </div >
  )
}



