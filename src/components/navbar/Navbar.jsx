import style from './Navbar.module.css'

function Navbar(){

    return(
        <>
         <div className={`${style.navbar} text-white py-4`}>
         <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className='fw-bold fs-3' >Raghad Moqady</div>
                <div>
                    <ul className='d-flex m-0 p-0 fs-5'>
                        <li className='px-4'>Portfolio</li>
                        <li className='px-4'>About</li>
                        <li className='px-4'>Contact</li>
                    </ul>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}
export default Navbar