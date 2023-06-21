import HeaderBottom from '../header/HeaderBottom'
import HeaderCenter from '../header/HeaderCenter'
import HeaderTop from '../header/HeaderTop'

function Header() {
  return (
    <>
      <HeaderTop />
      <div className="bg-primary">
        <HeaderCenter />
        <HeaderBottom />
      </div>
    </>
  )
}
export default Header
