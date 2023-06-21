import AccountSiteMap from '../components/my_account/AccountSiteMap'
import GiftVoucherForm from '../components/product/GiftVoucherForm'

export default function GiftVoucher() {

  return (
    <div className="px-10 leading-5">
      <ul class="flex items-center text-[#999] my-[23px]">
        <li>
          <a href="#" className='focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </a>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mx-2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <li><a href="#" className='text-[#094bad] text-[14px] font-medium'>
          Gift Voucher</a></li>
      </ul >
      <div className="md:flex w-full">
        <div className='md:w-[79%] pr-[15px]'>
          <h2 className="font-medium mt-5 mb-2.5 text-xl">Purchase a Gift Card</h2>
          <p className='mb-2.5 text-[12px]'>This gift card will be emailed to the recipient after your order has been paid for.</p>
          <GiftVoucherForm />
        </div>
        <div className='hidden md:block w-[21%] pl-[15px]'>
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
