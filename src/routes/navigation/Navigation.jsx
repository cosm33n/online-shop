import { Outlet, Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'

import './Navigation.scss'
const Navigation = () => (
  <>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <img src={logo} alt='crown' className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/auth'>
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
)

export default Navigation
