import { Link } from 'react-router-dom'

/* props isn't being used here, directly accessing user and signout object */
const NavBar = ({ user, handleSignout }) => {
    return (
      <>
        <p>Twatter</p>
        {user ? ( /* Renders If there's a user */
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
                </ul>
          </nav>
        ) : ( /* Renders if no user (User set to null or other falsey value) */
            <nav>
                <ul>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        )}
      </>
    )
  }
  export default NavBar
  