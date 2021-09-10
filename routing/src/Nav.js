import './App.css';
// Import Link from react router dom
import { Link } from 'react-router-dom';

function Nav() {
  {/* simple way to change color by creating object with color white */}
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            {/* Takes on prop which is "to", takes you to the linked page */}
            <Link style={navStyle} to='/about'>
              <li>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
              <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
