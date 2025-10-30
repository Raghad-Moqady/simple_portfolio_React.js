import style from './Hero.module.css'
import mainImg from '../../assets/images/headerImg.png'
function Hero(){

    return(
        <>
         <header className={`${style.header} text-white d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${style.imgbox}`}>
                <img src={mainImg} alt="header_img" className='w-100'/>
            </div>
            <h1>Raghad Moqady</h1>
            <hr className='w-25'/>
            <p className='fs-3'>Computer Systems Engineer | FullStack Developer</p>
         </header>
         
        </>
    )
}
export default Hero