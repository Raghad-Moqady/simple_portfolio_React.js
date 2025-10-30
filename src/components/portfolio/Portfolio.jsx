import { useState } from 'react'
import Title from '../shared/title/Title'
import img1 from '../../assets/images/HTML5_logo.png'
import img2 from '../../assets/images/CSS3_logo.png'
import img3 from '../../assets/images/Javascript_logo.png'
import img4 from '../../assets/images/bootstrap_logo.png'
import img5 from '../../assets/images/reactJs_logo.png'
import img6 from '../../assets/images/Logo_C_sharp.png'
import img7 from '../../assets/images/SQLServer.png'
import img8 from '../../assets/images/ASPNET.png'

 
import style from './Portfolio.module.css'



function Portfolio(){
    const [imgs,setImgs]= useState([img1, img2, img3, img4, img5, img6, img7, img8]);
     
    return(
        <>
        <section className=' mb-5 py-3'>
         <Title title="Portfolio"/>

         <div className='container '>
            <div className="row row-gap-3">
                {imgs.map(src=>
                <div className="col-md-3 ">
                    <div className={`${style.imgBox} `}>
                         <img src={src} alt="img" className='w-100 h-50 object-fit-contain '/>
                    </div>
                </div>
                )}
            </div>
         </div>
        </section>
        
        </>
    )
}
export default Portfolio