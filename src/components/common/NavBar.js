import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'

function NavBar() {
  useLocation()
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }
  return (
    <div>
      <nav className="navbar is-light">
        <div className="container">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/" className="has-text-black">Home</Link>
            </div>
            <div className="navbar-item">
              <Link to="/dinosaurs" className="has-text-black">Dinosaurs</Link>
            </div>
            <div className="navbar-item">
              <Link to="/miscs" className="has-text-black">Food and Toys</Link>
            </div>
            <div className="navbar-item">
              {!isLoggedIn ?
                <>
                </>
                :
                <>
                  <Link to="/dinosaurs/new" className="has-text-black">Post Your Dinosaur</Link>
                </>
              }
            </div>
          </div>
          <div className="navbar-end">

            {!isLoggedIn ?
              <>
                <div className="navbar-item">
                  <Link to="/Register" className="has-text-black">Register</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/Login" className="has-text-black">Login</Link>
                </div>

              </>
              :
              <>

                <div className="navbar-item">
                  <p className="has-text-black" onClick={handleLogout}>Log Out</p>
                </div>
              </>

            }

            <div className="navbar-item">
              <Link to="/Basket"><img src='https://i.imgur.com/rN5Ky3e.png'></img></Link>

            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}
//
export default NavBar