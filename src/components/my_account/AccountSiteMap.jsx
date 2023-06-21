import { Link } from 'react-router-dom'
export default function AccountSiteMap() {
  return (
    <aside>
      <h2 className="text-xl leading-none  font-medium mb-2 mt-5">Account</h2>
      <div className="text-xs font-light text-gray-700">
        <ul className="leading-6">
          <li className="mb-3">
            <Link to="#">Login</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Register</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Forgotten Password </Link>
          </li>
          <li className="mb-3">
            <Link to="#">My Account</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Wish List</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Order History</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Downloads</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Reward Points</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Returns</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Transactions</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Newsletter</Link>
          </li>
          <li className="mb-3">
            <Link to="#">Recurring payments</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
