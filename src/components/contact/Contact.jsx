import Title from '../shared/title/Title'
import style from './Contact.module.css'


function Contact(){
    
    return(
        <>
         <section className=' mb-5 '>
            <Title title="Contact Me"/>
            <form className='w-50 m-auto'>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control rounded-5" id="floatingInput" placeholder=" "/>
                    <label htmlFor="floatingInput">Full Name</label>
                    </div>  
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-5" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>         
                    <div className="form-floating mb-3">
                    <input type="text" className="form-control rounded-5" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Phone Number</label>
                    </div>         
                    <div className="form-floating">
                    <textarea className="form-control h-25 rounded-5 " placeholder="" id="floatingTextarea2" ></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                    </div>  
                    <div className=' text-center'>
                    <button className={`${style.sendBtn} btn w-50  mt-4 rounded-5 mb-3 px-3 py-2  `}>Send</button>   
                    </div>
            </form>
         </section>
        </>
    )
}
export default Contact