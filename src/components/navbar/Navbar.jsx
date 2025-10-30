import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar(){

    return(
        <>
         <nav className={`${style.navbar} text-white py-4 `}>
         <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className='fw-bold fs-3' >Raghad Moqady</div>
                <div>
                    <ul className='d-flex m-0 p-0 fs-5'>
                        <li className='px-4'>
                            <Link to={'/'} className={`${style.navLinks}`}>Home</Link>
                         </li>
                        <li className='px-4'>
                            <Link to={'/portfolio'} className={`${style.navLinks}`}>Portfolio</Link>
                         </li>
                        <li className='px-4'>
                             <Link to={'/about'} className={`${style.navLinks}`}>About</Link>
                        </li>
                        <li className='px-4'>
                             <Link to={'/contact'} className={`${style.navLinks}`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         </nav>
        </>
    )
}
export default Navbar