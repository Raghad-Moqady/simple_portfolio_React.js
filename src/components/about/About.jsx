import style from './About.module.css'
import Title from './../shared/title/Title';

function About(){

    return(
        <>
          <section className={`${style.about} mb-5 py-4`}>
                 <div className={`container  text-center`}>
                     {<Title title="About"/>}
                     <div className='w-50 m-auto fs-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus dignissimos quisquam vel ab, natus, repudiandae odio consequatur eos eligendi nihil nulla cumque vitae odit hic a deleniti aliquam molestiae.
                     </div>
                     <button className='btn btn-light mt-4 mb-3 px-3 py-2 rounded-5 '>Download My CV</button>
                 </div>
          </section>
        </>
    )
}
export default About