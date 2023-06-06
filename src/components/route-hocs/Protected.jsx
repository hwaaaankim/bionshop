import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
export default function Protected({ component }) {
  const auth = useSelector((state) => state.auth)

  if (!auth.signedIn) {
    return <Navigate to="/login" replace={true} />
  }
  return <>{component}</>
}
