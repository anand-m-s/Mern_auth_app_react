import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Headers() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Goal setter</Link>
            </div>
            <ul>
                <li>
                    <Link to='/Login'>
                        <FaSignInAlt />
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/Register'>
                        <FaUser/>
                        Register
                    </Link>
                </li>
            </ul>

        </header>
    )
}

export default Headers