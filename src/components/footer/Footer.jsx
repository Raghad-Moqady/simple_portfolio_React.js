import style from './Footer.module.css'


function Footer(){

    return(
        <>
        <footer className={`${style.footer} py-5 text-center`}>
             <div className="container">
                <div className="row ">
                    <div className="col-md-4 ">
                        <h3>Location</h3>
                        <p className='mt-4'>Palestine, Salfit</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Around the Web</h3>
                        <div className='d-flex w-50 m-auto justify-content-between mt-3'>
                             <div className={`${style.iconDiv} d-flex justify-content-center align-items-center `}>
                                <i className="fa-brands fa-facebook-f"></i>
                             </div>
                                <div className={`${style.iconDiv} d-flex justify-content-center align-items-center `}>
                                <i className="fa-brands fa-whatsapp"></i>
                             </div>
                                <div className={`${style.iconDiv} d-flex justify-content-center align-items-center `}>
                                <i className="fa-brands fa-linkedin-in"></i>
                             </div>
                                <div className={`${style.iconDiv} d-flex justify-content-center align-items-center `}>
                                <i className="fa-brands fa-twitter"></i>
                             </div>
                        </div>  
                    </div>
                    <div className="col-md-4">
                          <h3>My CV</h3>
                             <button className='btn btn-light rounded-5 px-4 mt-2 '>Free Download !</button>
                    </div>
                </div>
             </div>
        </footer>
         <section className={`${style.copyrightSection} p-3 text-white text-center`}>
            <p className='m-0 '>Copyright © Portfolio 2025</p>
            <p className='m-0'>Eng. Raghad Moqady | Full Stack Developer</p>
         </section>
        </>
    )
}
export default Footer