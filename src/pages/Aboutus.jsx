import Icon from "../components/icon/Icon"
import aboutus from "../assets/images/about-us.jpg"
import e10 from "../assets/images/e10.jpg"
import whyList from "../assets/images/icon-whylist.png"

function Aboutus() {
    return <div className="flex flex-col sm:mx-10 mx-3 my-4 pb-2 sm:text-sm lg:text-xs">
        <ul className="flex flex-row mb-4 mt-7 text-xs text-gray-400">
            <li className='mt-0.5'>
                <a href="/">
                    <Icon className="" size="12" id="home"></Icon>
                </a>
            </li>
            <Icon className="mt-1 mx-2" id="chevronRight" size="10"></Icon>
            <li className="">
                <a href="/">Page</a>
            </li>
            <Icon className="mt-1 mx-2" id="chevronRight" size="10"></Icon>
            <li className="">
                <a href="/about">About us</a>
            </li>
        </ul>
        <div className="sm:flex sm:justify-between">
            <div className="sm:w-8/12">
                <span className="flex">
                    <h1 className="text-gray-500 sm:text-2xl">Welcome To Shop</h1>
                    <hr className="w-8/12 ml-4 mt-4"></hr></span>
                <div className="sm:flex sm:space-x-1 sm:m-4 my-4 sm:p-4">
                    <img className="w-full" src={aboutus} />
                    <div className="leading-5 sm:pl-4 text-gray-6">
                        <div class="des-about-us text-xs mt-4 px-0">Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor dui, vel posuere mauris.
                            <br></br>
                            <br></br>Pellentesque semper congue sodales. In consequat, metus eget con sequat ornare, augue dolor blandit purus, vitae lacinia nisi tellus in erat. Nulla ac justo eget massa aliquet sodales. Maecenas mattis male suada sem, in fringilla massa dapibus quis. Suspendisse aliquam leo id neque auctor molestie. Etiam at nulla tellus.
                            <br></br>
                            <br></br>Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim.</div>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/4">
                <h1 className="text-gray-500 text-2xl">Why Choose Us</h1>
                <ul className="mt-4 space-y-5">
                    <li className="why-list flex space-x-3">
                        {/* <i class="check"></i> */}
                        <img className="w-3 h-3" src={whyList}></img>
                        <a title="" className="text-xs" href="#">Shipping and Returns</a>
                    </li>
                    <li className="why-list flex space-x-3">
                        {/* <i class="check"></i> */}
                        <img className="w-3 h-3" src={whyList}></img>
                        <a title="" href="#">Secure shopping</a>
                    </li>
                    <li className="why-list flex space-x-3">
                        {/* <i class="check"></i> */}
                        <img className="w-3 h-3" src={whyList}></img>
                        <a title="" href="#">International Shipping</a>
                    </li>
                    <li className="why-list flex space-x-3">
                        {/* <i class="check"></i> */}
                        <img className="w-3 h-3" src={whyList}></img>
                        <a title="" href="#">Affiliates</a>
                    </li>
                    <li className="why-list flex space-x-3">
                        {/* <i class="check"></i> */}
                        <img className="w-3 h-3" src={whyList}></img>
                        <a title="" href="#">Group Sales</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mx-auto w-full my-10">
            <span className="flex space-x-2"><hr className="w-5/12"></hr><h1 className="text-center -mt-3.5 sm:text-2xl text-xs mb-4">Our Members</h1><hr className="w-5/12"></hr></span>
            <p className="text-center sm:w-1/2 m-auto">Consectetur adipiscing elit. Donec pellentesque venenatis elit, quis aliquet mauris malesuada vel. Donec vitae libero dolor, eget dapibus justo.
                Aenean facilisis aliquet feugiat. Suspendisse lacinia congue est ac semper. Nulla ut elit magna, vitae volutpat magna.</p>
        </div>
        <div class='md:grid md:grid-cols-2 md:gap-8  w-full'>
            <div class='flex p-4 border border-gray-200'>
                <img src={e10}></img>
                <span className="ml-5">
                    <h2 class='uppercase mb-2 font-bold sm:text-base'>Jennifer Lawrence</h2>
                    <span>ART DIRECTOR</span>
                    <p className="text-xs mt-3">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                    <ul className="flex mt-5">
                        <li className="social-icons">
                            <i className='fa fa-facebook'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-twitter'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-google-plus'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-skype'></i>
                        </li>
                    </ul>
                </span>
            </div>
            <div class='flex p-4 border border-gray-200'>
                <img src={e10}></img>
                <span className="ml-4">
                    <h2 class='uppercase mb-2 font-bold text-base'>Jennifer Lawrence</h2>
                    <span>ART DIRECTOR</span>
                    <p className="text-xs mt-3">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                    <ul className="flex mt-5">
                        <li className="social-icons">
                            <i className='fa fa-facebook'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-twitter'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-google-plus'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-skype'></i>
                        </li>
                    </ul>
                </span>
            </div>
            <div class='flex p-4 border border-gray-200'>
                <img src={e10}></img>
                <span className="ml-4">
                    <h2 class='uppercase mb-2 font-bold text-base'>Jennifer Lawrence</h2>
                    <span>ART DIRECTOR</span>
                    <p className="text-xs mt-3">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                    <ul className="flex mt-5">
                        <li className="social-icons">
                            <i className='fa fa-facebook'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-twitter'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-google-plus'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-skype'></i>
                        </li>
                    </ul>
                </span>
            </div>
            <div class='flex p-4 border border-gray-200'>
                <img src={e10}></img>
                <span className="ml-4">
                    <h2 class='uppercase mb-2 font-bold text-base'>Jennifer Lawrence</h2>
                    <span>ART DIRECTOR</span>
                    <p className="text-xs mt-3">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                    <ul className="flex mt-5">
                        <li className="social-icons">
                            <i className='fa fa-facebook'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-twitter'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-google-plus'></i>
                        </li>
                        <li className="social-icons">
                            <i className='fa fa-skype'></i>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
        <div className="border my-5 p-5">
            <h1 className="happy-customer-span mb-4">Happy Customers Say</h1>
            <div>
                <span class='block mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, justo non cursus adipiscing, dui nibh scelerisque justo, quis pretium turpis neque eget nulla. Curabitur dictum consectetur metus nec dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, justo non cursus adipiscing, dui nibh scelerisque justo non cursus adipiscing, dui nibh scelerisque justo, quis pretium turpis.</span>
                <span className="text-blue-800 text-base font-semibold mt-5"> -Join Doe</span>
                <span className="font-normal"> - Social Media Strategist</span>
            </div>
        </div>
    </div>
}

export default Aboutus