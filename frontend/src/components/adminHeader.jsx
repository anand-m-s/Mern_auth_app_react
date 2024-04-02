import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset,adminLogout } from '../features/admin/adminSlice'
import Button from '@mui/material/Button'



function AdminHeader() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { admin } = useSelector((state) => state.admins)

    const onLogout = () => {
        dispatch(adminLogout())
        dispatch(reset())
        // navigate('/admin')
    }
    return (
        <>
        <header className='header'>
            <div className='logo'>
                <Link to='/admin/dashboard'>Admin</Link>
            </div>

               {admin && <ul>
                    <li>
                        <Button variant='outlined'
                            onClick={onLogout}
                            color='info'
                        >Logout
                        </Button>
                    </li>
                    <li>
                        <Link to='/profile'>
                            <FaUser />
                            Profile
                        </Link>

                    </li>
                </ul>}
        </header >
        </>
    )
}

export default AdminHeader