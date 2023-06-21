import banner from '../../assets/images/banner-sidebar.jpg'

function BannerSidebar() {

  return (
    <div className='hidden md:block w-full relative overflow-hidden mb-10 rounded-[3px]'>
      <a title="Banner Image" href="#" className='text-[#555] cursor-pointer outline-none bg-transparent'>
        <img src={banner} alt="Banner Image" className='w-full' />
      </a>
    </div>
  )
}

export default BannerSidebar;